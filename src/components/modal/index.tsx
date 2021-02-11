import React from "react";
import RBModal from "react-bootstrap/Modal";

import ModalProps from "./modal.props";
import UxPositionEnum from "../../shared/enums/position.enum";

import "./modal.scss";

const UxModal = (props: ModalProps) => {
  return (
    <RBModal
      {...{
        className: "edge-ux-modal",
        show: props.showModal,
        onHide: props.handleClose,
        backdrop: props.size === "full" ? false : props.backdrop ?? true,
        size: props.size !== "full" && props.size !== "md" ? props.size : undefined,
        centered: props.vPosition === UxPositionEnum.CENTER,
        dialogClassName: props.size === "full" ? "mw-100 h-100 m-0" : undefined,
        animation: props.animation || true,
        scrollable: props.scrollable || false
      }}
      aria-labelledby="edge-ux-modal-title"
    >
      <RBModal.Header closeButton={props.showClose ?? true}>
        <RBModal.Title id="edge-ux-modal-title">{props.title}</RBModal.Title>
      </RBModal.Header>
      <RBModal.Body>{props.body}</RBModal.Body>
      {props.footer && <RBModal.Footer>{props.footer.map((child: any) => child)}</RBModal.Footer>}
    </RBModal>
  );
};

export default UxModal;
