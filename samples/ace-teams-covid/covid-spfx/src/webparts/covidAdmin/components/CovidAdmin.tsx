import { IMicrosoftTeams } from "@microsoft/sp-webpart-base";

import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import { cloneDeep } from "@microsoft/sp-lodash-subset";
import { isEqual } from "@microsoft/sp-lodash-subset";

import strings from "CovidWebPartStrings";
import { cs } from "../services/covid.service";
import { ICheckIns, CheckInMode, ADMINTABS, CheckIns, SECURITY } from "../models/covid.model";

import CovidForm from "./organisms/CovidForm";
import DatePicker from "./molecules/DatePicker";
import CovidAdministration from "./organisms/CovidAdministration";
import ContactTracing from "./organisms/ContactTracing";
import Today from "./molecules/Today";
import PivotBar, { IPivotBarOption } from "./atoms/PivotBar";
import Dialog from "./molecules/Dialog";
import QuestionReview from "./molecules/QuestionReview";
import styles from "./CovidAdmin.module.scss";

export interface ICovidAdminProps {
  loading: boolean;
  microsoftTeams: IMicrosoftTeams;
  loginName: string;
  displayName: string;
  userId: number;
  userCanCheckIn: boolean;
}

export interface ICovidAdminState {
  tab: ADMINTABS;
  checkIns: ICheckIns[];
  selectedDate: Date;
  reviewFormVisible: boolean;
  currentCheckIn: ICheckIns;
}

export class CovidAdminState implements ICovidAdminState {
  constructor(
    public tab: ADMINTABS = ADMINTABS.TODAY,
    public checkIns: ICheckIns[] = [],
    public selectedDate: Date = new Date(),
    public reviewFormVisible: boolean = false,
    public currentCheckIn: ICheckIns = new CheckIns()

  ) { }
}

export default class CovidAdmin extends React.Component<ICovidAdminProps, ICovidAdminState> {
  private LOG_SOURCE: string = "🔶CovidAdmin";

  //Set up the tabs for the PivotBar
  private _tabOptions: IPivotBarOption[] = [];

  constructor(props: ICovidAdminProps) {
    super(props);
    const tab: ADMINTABS = (cs.Security == SECURITY.VISITOR) ? ADMINTABS.SELFCHECKIN : ADMINTABS.TODAY;
    this.state = new CovidAdminState(tab);
    try {
      if ((cs.Security == SECURITY.MEMBER) || (cs.Security == SECURITY.OWNER)) {
        this._tabOptions.push({
          key: ADMINTABS.TODAY,
          displayName: strings.AdminTabToday
        });
        this._tabOptions.push({
          key: ADMINTABS.GUEST,
          displayName: strings.AdminTabRegisterGuest
        });
      }
      this._tabOptions.push({
        key: ADMINTABS.SELFCHECKIN,
        displayName: strings.AdminTabSelfCheckIn
      });
      if (cs.Security == SECURITY.OWNER) {
        this._tabOptions.push({
          key: ADMINTABS.CONTACTTRACING,
          displayName: strings.AdminTabContactTracing
        });
        this._tabOptions.push({
          key: ADMINTABS.ADMINISTRATION,
          displayName: strings.AdminTabAdministration
        });
      }
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_changeDate) - ${err}`, LogLevel.Error);
    }
  }

  public shouldComponentUpdate(nextProps: Readonly<ICovidAdminProps>, nextState: Readonly<ICovidAdminState>) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public componentDidMount() {
    const checkIns = cloneDeep(cs.CheckIns);
    this.setState({ checkIns: checkIns });
    cs.CheckInsRefresh = this._updateCheckIns;
  }

  private _updateCheckIns = (selectedDate: Date) => {
    const checkIns = cloneDeep(cs.CheckIns);
    this.setState({ checkIns: checkIns, selectedDate: selectedDate });
  }

  private _changeTab = (newTab: ADMINTABS): void => {
    this.setState({ tab: newTab });
  }
  private _changeReviewVisibility = (visible: boolean): void => {
    this.setState({ reviewFormVisible: visible });
  }

  private _changeDate = (dateOffset: number) => {
    try {
      const selectedDate = cloneDeep(this.state.selectedDate);
      selectedDate.setDate(selectedDate.getDate() + dateOffset);
      cs.getCheckIns(selectedDate);
      this.setState({ selectedDate: selectedDate });

    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_changeDate) - ${err}`, LogLevel.Error);
    }
  }

  private _closeGuestForm = () => {
    this._changeTab(ADMINTABS.TODAY);
  }


  private _openReview = (checkIn: ICheckIns) => {
    try {
      this.setState({ currentCheckIn: checkIn });
      this._changeReviewVisibility(true);
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_checkInPerson) - ${err}`, LogLevel.Error);
    }
  }
  private _checkInPerson = (checkIn: ICheckIns) => {
    try {
      checkIn.CheckInById = this.props.userId;
      checkIn.CheckIn = new Date();
      cs.adminCheckIn(checkIn);
      this._changeReviewVisibility(false);
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_checkInPerson) - ${err}`, LogLevel.Error);
    }
  }
  private _cancelCheckIn = () => {
    try {
      const checkInForm = new CheckIns();
      this.setState({ currentCheckIn: checkInForm });
      this._changeReviewVisibility(false);
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (_cancel) - ${err}`, LogLevel.Error);
    }
  }

  public render(): React.ReactElement<ICovidAdminProps> {
    try {
      return (
        <div data-component={this.LOG_SOURCE} className={styles.covidAdmin}>
          {this.props.loading &&
            <div className="shimmerContainer">
              <div className="hoo-ph-primary hoo-ph-row"></div>
            </div>
          }
          {!this.props.loading &&
            <>
              <PivotBar options={this._tabOptions} onClick={this._changeTab} activeTab={this.state.tab} />
              {this.state.tab == ADMINTABS.SELFCHECKIN &&
                <CovidForm microsoftTeams={this.props.microsoftTeams} checkInMode={CheckInMode.Self} displayName={this.props.displayName} userId={this.props.userId} userCanCheckIn={this.props.userCanCheckIn} />
              }
              {this.state.tab === ADMINTABS.TODAY &&
                <>
                  <h1>{strings.TodayHeader}</h1>
                  <p>{strings.TodaySubHeader}</p>
                  <DatePicker selectedDate={this.state.selectedDate} onDateChange={this._changeDate} />
                  <Today data={this.state.checkIns} checkIn={this._openReview} />
                  <Dialog header={strings.ReviewCheckInHeader} content={strings.ReviewCheckInContent} visible={this.state.reviewFormVisible} onChange={this._changeReviewVisibility} height={90}>
                    <QuestionReview checkIn={this.state.currentCheckIn} save={this._checkInPerson} cancel={this._cancelCheckIn} />
                  </Dialog>
                </>
              }
              {this.state.tab === ADMINTABS.GUEST &&
                <CovidForm microsoftTeams={this.props.microsoftTeams} displayName={strings.CovidFormGuestValue} userId={this.props.userId} checkInMode={CheckInMode.Guest} close={this._closeGuestForm} />
              }
              {this.state.tab === ADMINTABS.CONTACTTRACING &&
                <ContactTracing />
              }
              {this.state.tab === ADMINTABS.ADMINISTRATION &&
                <CovidAdministration />
              }
            </>
          }
        </div>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}