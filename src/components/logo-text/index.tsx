import React from "react";

import BrandedText from "../branded-text";
import LogoTextProps from "./logo-text.props";
import UxBrandTextEnum from "../../shared/enums/brand-text.enum";

const LogoText = (props: LogoTextProps) => {
  return (
    <span className="edge-ux-logo-text">
      {(props.type as UxBrandTextEnum) && props.type !== "custom" ? (
        <BrandedText registered={props.registered} />
      ) : (
        <span className="logo-text-custom text-primary">
          {props.title}
          {props.registered && <span className="text-xxs text-super">&reg;</span>}
        </span>
      )}
    </span>
  );
};

export default LogoText;
