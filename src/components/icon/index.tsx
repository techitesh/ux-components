import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, SizeProp, IconPrefix } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/pro-solid-svg-icons";
import { far } from "@fortawesome/pro-regular-svg-icons";
import { fal } from "@fortawesome/pro-light-svg-icons";
import { fad } from "@fortawesome/pro-duotone-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import IconLibraryEnum from "../../shared/enums/icon-library.enum";
import IconProps from "./icon.props";
import UxIconEnum from "../../shared/enums/icon.enum";
import UxSizeEnum from "../../shared/enums/size.enum";
import assetImport from "../../shared/utilities/assetImport";
import classMap from "../../shared/utilities/classMap";

const Icon = (props: IconProps) => {
  let faUxIcontyle;
  let faIconLibrary;

  switch(props.library) {
    case IconLibraryEnum.REGULAR:
      faUxIcontyle = "far";
      faIconLibrary = far;
      break;
    case IconLibraryEnum.LIGHT:
      faUxIcontyle = "fal";
      faIconLibrary = fal;
      break;
    case IconLibraryEnum.DUOTONE:
      faUxIcontyle = "fad";
      faIconLibrary = fad;
      break;
    case IconLibraryEnum.SOLID:
      faUxIcontyle = "fas";
      faIconLibrary = fas;
      break;
    case IconLibraryEnum.BRAND:
      faUxIcontyle = "fab";
      faIconLibrary = fab;
      break;
    default:
      faUxIcontyle = "fas";
      faIconLibrary = fas;
      break;
  }

  const isFA = (icon: string): boolean => {
    const key: string = icon.toLocaleUpperCase().replace(/-/g, "_");
    return Boolean((UxIconEnum as any)[key]);
  };

  const getSize = (): string =>
    (({
      sm: "12",
      md: "20",
      lg: "30",
      "1x": "40",
      "2x": "60",
      "3x": "90",
      "4x": "150",
      "5x": "200"
    } as any)[props.size || "1x"]);

  library.add(faIconLibrary);

  return props.icon ? (
    isFA(props.icon) ? (
      <FontAwesomeIcon
        icon={[faUxIcontyle as IconPrefix, props.icon as any]}
        className={classMap("edge-ux-icon", props.className)}
        size={(props.size !== UxSizeEnum.MEDIUM ? props.size : undefined) as SizeProp}
        style={
          props.squared
            ? {
                width: Number(getSize()),
                height: Number(getSize())
              }
            : undefined
        }
      />
    ) : (
      <img
        alt={props.title}
        src={assetImport(props.icon) || props.icon}
        width={getSize()}
        height={props.squared ? getSize() : undefined}
        className={classMap("edge-ux-icon d-inline-block", props.className)}
      />
    )
  ) : null;
};

export default Icon;
