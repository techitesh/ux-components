import UxBrandTextEnum from "./../../shared/enums/brand-text.enum";

export default interface LogoTextProps {
  type?: UxBrandTextEnum | "custom";
  title?: string;
  href?: string;
  registered?: boolean;
}
