import * as React from "react";
import { Logger, LogLevel } from "@pnp/logging";
import { isEqual } from "@microsoft/sp-lodash-subset";
import { IIconType } from "../../models/wc.Icons";

export interface IButtonIconProps {
  iconType: IIconType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  altText: string;
  className?: string;
}

export interface IButtonIconState {
}

export class ButtonIconState implements IButtonIconState {
  constructor() { }
}

export default class ButtonIcon extends React.Component<IButtonIconProps, IButtonIconState> {
  private LOG_SOURCE: string = "🔶ButtonIcon";
  private _className: string = "hoo-buttonicon";

  constructor(props: IButtonIconProps) {
    super(props);
    this.state = new ButtonIconState();
    if (props.className != undefined) {
      this._className = props.className;
    }
  }

  public shouldComponentUpdate(nextProps: IButtonIconProps, nextState: IButtonIconState) {
    if ((isEqual(nextState, this.state) && isEqual(nextProps, this.props)))
      return false;
    return true;
  }

  public render(): React.ReactElement<IButtonIconProps> {
    try {
      return (
        <button className={this._className} aria-label="" onClick={this.props.onClick}>
          <div className="hoo-icon" title={this.props.altText}>
            <span className={`hoo-icon-svg ${this.props.iconType.Class}`} aria-hidden="true" dangerouslySetInnerHTML={{ "__html": this.props.iconType.SVG }} >
            </span>
          </div>
        </button>
      );
    } catch (err) {
      Logger.write(`${this.LOG_SOURCE} (render) - ${err}`, LogLevel.Error);
      return null;
    }
  }
}