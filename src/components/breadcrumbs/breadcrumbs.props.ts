import UxElementTypeEnum from "../../shared/enums/element-type.enum";
import BreadcrumbProps from "./breadcrumb.props";
import IconProps from "../icon/icon.props";

export default interface BreadcrumbsProps {
  children: BreadcrumbProps[];
  elementType?: UxElementTypeEnum;
  separator?: IconProps | string;
  className?: string;
  loading?: boolean;
}
