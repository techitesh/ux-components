import React from "react";

import BrandedTextProps from "./branded-text.props";

const BrandedText = (props: BrandedTextProps) => {
  return (
    <span className={`edge-ux-branded-text ${props.className}`}>
      <span className="text-secondary">Ed</span>
      <span className="text-dark">
        genuity
        {props.registered && <span className="text-xxs text-super">&reg;</span>}
      </span>
    </span>
  );
};

export default BrandedText;
