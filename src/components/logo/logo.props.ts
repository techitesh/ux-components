import IconProps from "../icon/icon.props";
import LogoTextProps from "../logo-text/logo-text.props";

export default interface LogoProps extends IconProps, LogoTextProps {
  iconOnly?: boolean;
}
