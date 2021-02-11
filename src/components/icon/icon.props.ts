import UxBrandEnum from "../../shared/enums/brand.enum";
import UxIconEnum from "../../shared/enums/icon.enum";
import UxSizeEnum from "../../shared/enums/size.enum";
import IconLibraryEnum from "../../shared/enums/icon-library.enum";

export default interface IconProps {
  title?: string;
  icon?: UxBrandEnum | UxIconEnum | string;
  size?: UxSizeEnum;
  library?: IconLibraryEnum;
  className?: string;
  squared?: boolean;
}
