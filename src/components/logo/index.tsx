import React from "react";

import Icon from "../icon";
import LogoText from "../logo-text";
import LogoProps from "./logo.props";

const Logo = (props: LogoProps) => {
  return (
    <span className="edge-ux-logo">
      <Icon {...props} />
      {!props.iconOnly && <LogoText {...props} />}
    </span>
  );
};

export default Logo;
