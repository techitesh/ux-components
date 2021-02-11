import React from "react";

import Icon from "../icon";
import EnhancedIconProps from "./enhanced-icon.props";
import UxPositionEnum from "../../shared/enums/position.enum";
import "./enhanced-icon.scss";
import classMap from "../../shared/utilities/classMap";

const EnhancedIcon = (props: EnhancedIconProps) => {
  const textClass = !props.title
    ? ""
    : props.textPosition === UxPositionEnum.LEFT
    ? "left"
    : props.textPosition === UxPositionEnum.RIGHT
    ? "right"
    : "";
  const position: UxPositionEnum = props.textPosition ? props.textPosition : UxPositionEnum.LEFT;
  const icon = (
    <div className={classMap("enhanced-icon-icon", props.enhancedClassName)}>
      <Icon {...props} />
    </div>
  );
  const text = (
    <div className={classMap("enhanced-icon-text", props.textClassName, textClass)}>
      <span>{props.title}</span>
    </div>
  );
  const before: boolean = position === UxPositionEnum.TOP || position === UxPositionEnum.LEFT;
  const enhancedIcon = before ? (
    <>
      {text}
      {icon}
    </>
  ) : (
    <>
      {icon}
      {text}
    </>
  );
  const vertical: boolean = position === UxPositionEnum.TOP || position === UxPositionEnum.BOTTOM;
  const classes: string = `d-flex ${vertical ? "flex-column" : "align-items-center"}`;

  return <div className={`edge-ux-enhanced-icon ${classes}`}>{enhancedIcon}</div>;
};

export default EnhancedIcon;
