import UxPositionEnum from "../../shared/enums/position.enum";

export default interface UxModal {
  showModal: boolean;
  handleClose: any;
  title: any;
  body: any;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  footer?: any[];
  showClose?: boolean;
  scrollable?: boolean;
  animation?: boolean;
  vPosition?: UxPositionEnum.TOP | UxPositionEnum.BOTTOM | UxPositionEnum.CENTER;
  hPosition?: UxPositionEnum.LEFT | UxPositionEnum.RIGHT | UxPositionEnum.CENTER;
  backdrop?: boolean | "static";
}
