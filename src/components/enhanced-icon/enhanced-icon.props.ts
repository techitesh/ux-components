import IconProps from "../icon/icon.props";
import UxPositionEnum from "../../shared/enums/position.enum";

export default interface EnhancedIconProps extends IconProps {
  textPosition?: UxPositionEnum;
  enhancedClassName?: string;
  textClassName?: string;
}
