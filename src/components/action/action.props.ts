import UxActionTypeEnum from "../../shared/enums/action-type.enum";
import EnhancedIconProps from "./../enhanced-icon/enhanced-icon.props";
import OutlinePriorityEnum from "../../shared/enums/outline-priority.enum";
import OutlineShadesEnum from "../../shared/enums/outline-shades.enum";
import UxPriorityEnum from "../../shared/enums/priority.enum";
import UxShadesEnum from "../../shared/enums/shades.enum";
import UxStyleEnum from "../../shared/enums/style.enum";

export default interface ActionProps {
  callback: any;
  priority?: UxPriorityEnum | UxShadesEnum | OutlinePriorityEnum | OutlineShadesEnum | "link";
  enabled?: boolean;
  type?: UxActionTypeEnum;
  text?: string;
  icon?: EnhancedIconProps;
  size?: "lg" | "sm";
  style?: UxStyleEnum;
  className?: string;
  textClassName?: string;
  tabIndex?: number;
}
