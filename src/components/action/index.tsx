import React from "react";

import Button from "react-bootstrap/Button";

import ActionProps from "./action.props";
import Icon from "../icon";
import EnhancedIcon from "../enhanced-icon";
import UxActionTypeEnum from "../../shared/enums/action-type.enum";
import UxPriorityEnum from "../../shared/enums/priority.enum";
import classMap from "../../shared/utilities/classMap";

const UxAction = (props: ActionProps) => {
  const styleClass: string = (props.style && props.style === "rounded" ? "badge-pill" : props.style) || "";

  let content: JSX.Element | string | undefined =
    (props.icon && props.text && (
      <EnhancedIcon
        {...{
          ...props.icon,
          title: props.text
        }}
      />
    )) ||
    (props.icon && <Icon {...{ ...props.icon, title: props.text }} />) ||
    props.text ||
    "";

  const clickHandler = (event: any) => {
    event.stopPropagation();
    if (props.callback) props.callback();
  };

  return (
    <Button
      aria-label={props.text || "button"}
      variant={props.priority || UxPriorityEnum.PRIMARY}
      size={props.size || "lg"}
      disabled={props.enabled !== undefined ? !props.enabled : false}
      onClick={clickHandler}
      type={props.type || UxActionTypeEnum.BUTTON}
      tabIndex={props.tabIndex ?? undefined}
      className={classMap("edge-ux-action shape", styleClass, props.className)}
    >
      {content}
    </Button>
  );
};

export default UxAction;
