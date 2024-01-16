import forEach from "lodash-es/forEach";
import { findIndex } from "@microsoft/sp-lodash-subset";
import { cloneDeep } from "@microsoft/sp-lodash-subset";
import { find } from "@microsoft/sp-lodash-subset";
import indexOf from "lodash-es/indexOf";
import groupBy from "lodash-es/groupBy";
import eq from "lodash-es/eq";

import { graph } from "@pnp/graph";
import "@pnp/graph/users";
import "@pnp/graph/photos";
import "@pnp/graph/cloud-communications";

import { sp } from "@pnp/sp";
import { Logger, LogLevel } from "@pnp/logging";
import "@pnp/sp/webs";
import { Web } from "@pnp/sp/webs";
import "@pnp/sp/lists/web";
import "@pnp/sp/items/list";
import "@pnp/sp/site-users/web";
import { IItemAddResult } from "@pnp/sp/items/types";

import { ILocations, IQuestion, ICheckIns, ISelfCheckIn, SelfCheckInLI, CheckInLI, ISelfCheckInLI, Tables, IPerson, IQuery, SECURITY } from "../models/covid.model";


export interface ICovidService {
  Security: SECURITY;
  Locations: ILocations[];
  Questions: IQuestion[];
  CheckIns: ICheckIns[];
  QuestionListUrl: string;
  LocationListUrl: string;
  init: (siteUrl: string, loginName: string, isAdmin: boolean, isOwner: boolean, currentSiteUrl?: string) => Promise<void>;
  CheckInsRefresh: (selectedDate: Date) => void;
  userCanCheckIn: (userId: number) => Promise<boolean>;
  getCheckIns: (d: Date) => Promise<boolean>;
  moveSelfCheckIns: () => Promise<boolean>;
  addCheckIn: (checkIn: ICheckIns) => Promise<boolean>;
  addSelfCheckIn: (checkIn: ISelfCheckIn) => Promise<boolean>;
  searchCheckIn: (query: IQuery) => Promise<{ [key: string]: ICheckIns[] }>;
}

export class CovidService implements ICovidService {
  private LOG_SOURCE = "🔶CovidService";

  private SKIPADDFIELDS: string[] = ["Id", "Created"];
  private JSONFIELDS: string[] = ["Questions"];
  private JSONDATEFIELDS: string[] = ["Created", "CheckIn", "SubmittedOn"];

  private _security: SECURITY = SECURITY.VISITOR;
  private _isOwner: boolean;
  private _isAdmin: boolean;
  private _loginName: string;
  private _ready: boolean = false;
  private _locations: ILocations[];
  private _questions: IQuestion[];
  private _checkIns: ICheckIns[];
  private _users: IPerson[] = [];
  private _currentDate: Date;
  private _siteUrl: string;
  private _currentSiteUrl: string;
  private _questionListUrl: string;
  private _locationListUrl: string;

  private _checkInsRefresh: (selectedDate: Date) => void = null;

  constructor() { }

  public get Ready(): boolean {
    return this._ready;
  }

  public get Security(): SECURITY {
    return this._security;
  }

  public get Locations(): ILocations[] {
    return this._locations;
  }

  public get Questions(): IQuestion[] {
    return this._questions;
  }

  public get CheckIns(): ICheckIns[] {
    return this._checkIns;
  }

  public get QuestionListUrl(): string {
    return this._questionListUrl;
  }

  public get LocationListUrl(): string {
    return this._locationListUrl;
  }

  public set CheckInsRefresh(value: (selectedDate: Date) => void) {
    this._checkInsRefresh = value;
  }

  public async init(siteUrl: string, loginName: string, isAdmin: boolean, isOwner: boolean, currentSiteUrl?: string): Promise<void> {
    try {
      this._siteUrl = siteUrl;
      this._currentSiteUrl = currentSiteUrl || siteUrl;
      this._loginName = loginName;
      this._isAdmin = isAdmin;
      this._isOwner = isOwner;
      this._locationListUrl = `${this._siteUrl}/Lists/${Tables.LOCATIONLIST}/AllItems.aspx`;
      this._questionListUrl = `${this._siteUrl}/Lists/${Tables.QUESTIONLIST}/AllItems.aspx`;
      let p: Promise<any>[] = [];
      if (this._siteUrl === this._currentSiteUrl) {
        p.push(this._loadUserRole());
      }
      p.push(this._getLocations());
      p.push(this._getQuestions());
      const pResults = await Promise.all(p);
      if (pResults.indexOf(false) == -1) {
        this._ready = true;
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (init) - ${err.message}`, LogLevel.Error);
    }
  }

  private async _loadUserRole(): Promise<boolean> {
    let retVal: boolean = false;
    try {
      if (this._isAdmin || this._isOwner) {
        this._security = SECURITY.OWNER;
        retVal = true;
      } else {
        let data = await sp.web.currentUser.expand("groups").get<{ IsSiteAdmin: boolean, Groups: { Id: string }[] }>();
        let membersGroup = await sp.web.associatedMemberGroup();
        let membersIndex: number = findIndex(data.Groups, o => (o["Id"].toString() === membersGroup.Id.toString()));
        if (membersIndex > -1) {
          this._security = SECURITY.MEMBER;
        }
        retVal = true;
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_loadUserRole) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  private async _getLocations(): Promise<boolean> {
    let retVal: boolean = false;
    try {
      const web = Web(this._siteUrl);
      this._locations = await web.lists.getByTitle(Tables.LOCATIONLIST).items
        .top(5000)
        .select("Id, Title")
        .get<ILocations[]>();
      retVal = true;
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_getLocations) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  private async _getQuestions(): Promise<boolean> {
    let retVal: boolean = false;
    try {
      const web = Web(this._siteUrl);
      this._questions = await web.lists.getByTitle(Tables.QUESTIONLIST).items
        .top(5000)
        .select("Id, Title, ToolTip, QuestionType, Order")
        .filter("Enabled eq 1")
        .orderBy("Order")
        .get<IQuestion[]>();
      retVal = true;
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_getQuestions) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  public async userCanCheckIn(userId: number, siteUrl?: string): Promise<boolean> {
    let retVal: boolean = false;
    try {
      //await this.moveSelfCheckIns();
      let today = new Date();
      today.setHours(0, 0, 0, 0);

      if (this.Security == SECURITY.VISITOR) {
        let lastCheckInDate: Date = new Date(localStorage.getItem("checkInDate"));
        lastCheckInDate.setHours(0, 0, 0, 0);
        if (!eq(lastCheckInDate.getTime(), today.getTime())) {
          retVal = true;
        }
      } else {
        //Configured so that it can be called by external components (Viva Dashboard - ACE)
        const web = Web((siteUrl != undefined) ? siteUrl : this._siteUrl);
        const checkIns = await web.lists.getByTitle(Tables.COVIDCHECKINLIST).items
          .top(1)
          .filter(`(EmployeeId eq ${userId}) and (SubmittedOn gt '${today.toISOString()}')`)
          .get();

        if (checkIns.length < 1)
          retVal = true;
      }

    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (userCanCheckIn) - ${err.message} - `, LogLevel.Error);
    }
    return retVal;
  }

  private async _updateIPerson(checkIns: ICheckIns[] | IPerson[]): Promise<void> {
    try {
      let ids: string[] = [];
      for (let i = 0; i < checkIns.length; i++) {
        if (checkIns[i].hasOwnProperty("GraphId")) {
          let p: IPerson = checkIns[i] as IPerson;
          let idxEmp = findIndex(this._users, { Id: p.Id });
          if (idxEmp < 0) {
            idxEmp = await this._loadUserData(p);
          }
          if (idxEmp > -1) {
            p = this._users[idxEmp];
            if (indexOf(ids, p.GraphId) == -1)
              ids.push(p.GraphId);
          }
        } else {
          const ci: ICheckIns = checkIns[i] as ICheckIns;
          if (ci.CheckInById != null) {
            let idxCIB = findIndex(this._users, { Id: ci.CheckInById });
            if (idxCIB < 0) {
              idxCIB = await this._loadUserData(ci.CheckInBy);
            }
            if (idxCIB > -1) {
              ci.CheckInBy = this._users[idxCIB];
              if (indexOf(ids, ci.CheckInBy.GraphId) == -1)
                ids.push(ci.CheckInBy.GraphId);
            }
          }
          if (ci.EmployeeId != null) {
            let idxEmp = findIndex(this._users, { Id: ci.EmployeeId });
            if (idxEmp < 0) {
              idxEmp = await this._loadUserData(ci.Employee);
            }
            if (idxEmp > -1) {
              ci.Employee = this._users[idxEmp];
              if (indexOf(ids, ci.Employee.GraphId) == -1)
                ids.push(ci.Employee.GraphId);
            }
          }
        }
      }

      if (ids.length > 0) {
        await this._loadUserPresence(ids);
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_updateIPerson) - ${err.message} - `, LogLevel.Error);
    }
  }

  private async _loadUserData(user: IPerson): Promise<number> {
    let retVal: number = -1;
    try {
      const u = await graph.users.getById(user.EMail).select("id, jobTitle")();
      if (u) {
        user.GraphId = u.id;
        user.JobTitle = u.jobTitle;
        try {
          const photoValue = await graph.users.getById(user.GraphId).photo.getBlob();
          if (photoValue) {
            const url = window.URL || window.webkitURL;
            user.PhotoBlobUrl = url.createObjectURL(photoValue);
          }
        } catch (e) { }
        retVal = this._users.push(user) - 1;
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_loadUserData) - ${err.message} - `, LogLevel.Error);
    }
    return retVal;
  }

  private async _loadUserPresence(ids: string[]): Promise<void> {
    try {
      const p = await graph.communications.getPresencesByUserId(ids);
      if (p) {
        for (let i = 0; i < p.length; i++) {
          const user = find(this._users, { GraphId: p[i].id });
          if (user) {
            user.Presence = p[i];
          }
        }
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_loadUserPresence) - ${err.message} - `, LogLevel.Error);
    }
  }

  public async getCheckIns(d: Date): Promise<boolean> {
    let retVal: boolean = false;
    try {
      const start = cloneDeep(d);
      const end = cloneDeep(d);
      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 9999);
      this._checkIns = [];
      let checkInsPage = await sp.web.lists.getByTitle(Tables.COVIDCHECKINLIST).items
        .top(5000)
        .select("Id, Title, EmployeeId, Employee/Id, Employee/Title, Employee/EMail, Guest, CheckInOffice, Questions, SubmittedOn, CheckIn, CheckInById, CheckInBy/Id, CheckInBy/Title, CheckInBy/EMail, Created")
        .filter(`(SubmittedOn gt '${start.toISOString()}') and (SubmittedOn lt '${end.toISOString()}')`)
        .expand("Employee, CheckInBy")
        .getPaged<ICheckIns[]>();

      this._checkIns = this._checkIns.concat(checkInsPage.results);

      while (checkInsPage.hasNext) {
        checkInsPage = await checkInsPage.getNext();
        this._checkIns = this._checkIns.concat(checkInsPage.results);
      }

      forEach(this._checkIns, (ci) => {
        Object.getOwnPropertyNames(ci).forEach(prop => {
          if (this.JSONDATEFIELDS.indexOf(prop) > -1 && ci[prop] != null) {
            ci[prop] = new Date(ci[prop]);
          } else if (this.JSONFIELDS.indexOf(prop) > -1) {
            ci[`${prop}Value`] = JSON.parse(ci[prop]);
          }
        });
      });

      await this._updateIPerson(this._checkIns);

      this._currentDate = d;
      if (typeof this._checkInsRefresh == "function") {
        this._checkInsRefresh(d);
      }
      retVal = true;
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (getCheckIns) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  public moveSelfCheckIns(): Promise<boolean> {
    return new Promise(async (resolve) => {
      try {
        //Get Self CheckIns
        const selfCheckIns = await sp.web.lists.getByTitle(Tables.SELFCHECKINLIST).items
          .top(5000)
          .select("Id, Title, EmployeeId, CheckInOffice, Questions, Created")
          .get<ISelfCheckInLI[]>();

        if (selfCheckIns.length > 0) {
          let p = [];
          let pd = [];
          //Bulk Add to CovidCheckIns
          const batch = sp.createBatch();
          const batchDelete = sp.createBatch();
          for (let i = 0; i < selfCheckIns.length; i++) {
            const sci: ISelfCheckInLI = selfCheckIns[i];
            let checkInLI = new CheckInLI();
            checkInLI.SubmittedOn = sci.Created;
            Object.getOwnPropertyNames(sci).forEach(prop => {
              checkInLI[prop] = sci[prop];
            });
            this.SKIPADDFIELDS.forEach(f => { delete checkInLI[f]; });
            let userCanCheckIn = await this.userCanCheckIn(sci.EmployeeId);
            if (userCanCheckIn) {
              p.push(sp.web.lists.getByTitle(Tables.COVIDCHECKINLIST).items.inBatch(batch).add(checkInLI));
            }
            pd.push(sp.web.lists.getByTitle(Tables.SELFCHECKINLIST).items.getById(sci.Id).inBatch(batchDelete).delete());
          }
          batch.execute().then(async () => {
            let result: boolean = true;
            forEach(p, (item: IItemAddResult) => {
              if (item == null)
                result = false;
            });
            if (result) {
              batchDelete.execute();
              const success = await this.getCheckIns(new Date());
              resolve(success);
            } else {
              resolve(result);
            }
          });
        } else {
          resolve(true);
        }
      } catch (err) {
        Logger.write(`${this.LOG_SOURCE} (moveSelfCheckIns) - ${err.message}`, LogLevel.Error);
        resolve(false);
      }
    });
  }

  public async addCheckIn(checkIn: ICheckIns): Promise<boolean> {
    let retVal: boolean = false;
    try {
      let checkInLI = new CheckInLI();
      Object.getOwnPropertyNames(checkInLI).forEach(prop => {
        if (this.JSONFIELDS.indexOf(prop) > -1) {
          checkInLI[prop] = JSON.stringify(checkIn[`${prop}Value`]);
        } else {
          checkInLI[prop] = checkIn[prop];
        }
      });
      this.SKIPADDFIELDS.forEach(f => { delete checkInLI[f]; });
      const addCheckIn = await sp.web.lists.getByTitle(Tables.COVIDCHECKINLIST).items.add(checkInLI);
      if (addCheckIn.item) {
        retVal = true;
        this.getCheckIns(this._currentDate);
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (addCheckIn) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  public async adminCheckIn(checkIn: ICheckIns): Promise<boolean> {
    let retVal: boolean = false;
    try {
      const data = { CheckIn: checkIn.CheckIn, CheckInById: checkIn.CheckInById };
      const updateCheckIn = await sp.web.lists.getByTitle(Tables.COVIDCHECKINLIST).items.getById(checkIn.Id).update(data);
      if (updateCheckIn.item) {
        retVal = true;
        let ci = find(this._checkIns, { Id: checkIn.Id });
        ci.CheckIn = checkIn.CheckIn;
        ci.CheckInById = checkIn.CheckInById;
        let idxCIB = findIndex(this._users, { Id: ci.CheckInById });
        if (idxCIB < 0) {
          idxCIB = await this._loadUserData(ci.CheckInBy);
        }
        if (idxCIB > -1) {
          ci.CheckInBy = this._users[idxCIB];
        }
        if (typeof this._checkInsRefresh == "function") {
          this._checkInsRefresh(this._currentDate);
        }
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (adminCheckIn) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  public async addSelfCheckIn(checkIn: ISelfCheckIn): Promise<boolean> {
    let retVal: boolean = false;
    try {
      let selfCheckInLI = new SelfCheckInLI();
      Object.getOwnPropertyNames(selfCheckInLI).forEach(prop => {
        if (this.JSONFIELDS.indexOf(prop) > -1) {
          selfCheckInLI[prop] = JSON.stringify(checkIn[`${prop}Value`]);
        } else {
          selfCheckInLI[prop] = checkIn[prop];
        }
      });
      this.SKIPADDFIELDS.forEach(f => { delete selfCheckInLI[f]; });
      const web = Web(this._siteUrl);
      //Correct EmployeeId for different site collection
      if (this._siteUrl != this._currentSiteUrl) {
        const user = await web.ensureUser(this._loginName);
        if (user?.data.Id) {
          selfCheckInLI.EmployeeId = user.data.Id;
        }
      }
      const addSelfCheckIn = await web.lists.getByTitle(Tables.SELFCHECKINLIST).items.add(selfCheckInLI);
      if (addSelfCheckIn.item) {
        retVal = true;
        let lastCheckInDate: Date = new Date();
        localStorage.setItem("checkInDate", lastCheckInDate.toString());
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (addSelfCheckIn) - ${err.message}`, LogLevel.Error);
    }
    return retVal;
  }

  public async searchCheckIn(query: IQuery): Promise<{ [key: string]: ICheckIns[] }> {
    let retVal: { [key: string]: ICheckIns[] } = null;
    try {
      let filter = [];
      if (query.startDate != null) {
        const start: Date = cloneDeep(query.startDate);
        start.setHours(0, 0, 0, 0);
        filter.push(`(CheckIn gt '${start.toISOString()}')`);

      }
      if (query.endDate != null) {
        const end: Date = cloneDeep(query.endDate);
        end.setHours(23, 59, 59, 9999);
        filter.push(`(CheckIn lt '${end.toISOString()}')`);
      }
      if (query.office != null && query.office.length > 0) {
        filter.push(`(CheckInOffice eq '${query.office}')`);
      }
      const filterString = filter.join(" and ");
      let checkIns = [];
      let checkInsPage = await sp.web.lists.getByTitle(Tables.COVIDCHECKINLIST).items
        .top(5000)
        .select("Id, Title, EmployeeId, Employee/Id, Employee/Title, Employee/EMail, Guest, CheckInOffice, Questions, SubmittedOn, CheckIn, CheckInById, CheckInBy/Id, CheckInBy/Title, CheckInBy/EMail, Created")
        .filter(filterString)
        .expand("Employee, CheckInBy")
        .orderBy("CheckIn", false)
        .getPaged<ICheckIns[]>();

      checkIns = checkIns.concat(checkInsPage.results);

      while (checkInsPage.hasNext) {
        checkInsPage = await checkInsPage.getNext();
        checkIns = checkIns.concat(checkInsPage.results);
      }

      forEach(checkIns, (ci) => {
        Object.getOwnPropertyNames(ci).forEach(prop => {
          if (this.JSONDATEFIELDS.indexOf(prop) > -1 && ci[prop] != null) {
            ci[prop] = new Date(ci[prop]);
          } else if (this.JSONFIELDS.indexOf(prop) > -1) {
            ci[`${prop}Value`] = JSON.parse(ci[prop]);
          }
        });
      });

      await this._updateIPerson(checkIns);

      const results = groupBy(checkIns, (ci) => { return ci.CheckIn.toLocaleDateString(); });
      if (query.person != undefined) {
        for (let key in results) {
          let value = results[key];
          let include = false;
          if (value.length > 0) {
            forEach(value, (p) => {
              if (p.Employee == null) {
                if (p.Guest === query.person) {
                  include = true;
                }
              } else {
                if (p.Employee.Id === query.person) {
                  include = true;
                }
              }
            });
          }
          if (!include) {
            delete results[key];
          }
        }
      }
      retVal = results;
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (searchCheckIn) - ${err} - `, LogLevel.Error);
    }
    return retVal;
  }
}

export const cs = new CovidService();