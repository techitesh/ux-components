import NavbarItemProps from "./navbar-item.props";
import UxPositionEnum from "../../shared/enums/position.enum";
import UxPriorityEnum from "../../shared/enums/priority.enum";
import UxOrientationEnum from "../../shared/enums/orientation.enum";
import LogoProps from "../logo/logo.props";
import UxShadesEnum from "../../shared/enums/shades.enum";

export default interface NavbarProps {
  children: NavbarItemProps[];
  color?: UxPriorityEnum | UxShadesEnum;
  orientation: UxOrientationEnum;
  brand?: LogoProps;
  slogan?: string;
  brandCallback?: any;
  fixed?: UxPositionEnum.TOP | UxPositionEnum.BOTTOM;
  expand?: "lg" | "sm" | "md" | "xl";
  variant?: UxShadesEnum;
  className?: string;
  role?: string;
  asDiv?: boolean;
}
