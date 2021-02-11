import React from "react";
import RBNavbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import Logo from "../../assets/icons/edgenuity.svg";
import NavbarProps from "./navbar.props";
import avbarItemProps from "./navbar-item.props";
import UxDirectionEnum from "../../shared/enums/direction.enum";
import UxOrientationEnum from "../../shared/enums/orientation.enum";
import UxSizeEnum from "../../shared/enums/size.enum";
import UxShadesEnum from "../../shared/enums/shades.enum";
import UxPositionEnum from "../../shared/enums/position.enum";
import classMap from "../../shared/utilities/classMap";

import "./navbar.scss";

const UxNavbar = (props: NavbarProps) => {
  let {
    brand,
    slogan,
    children,
    color,
    expand,
    orientation,
    variant,
    fixed,
  } = props;

  const sidebar: boolean = orientation === UxOrientationEnum.VERTICAL;
  const footer: boolean =
    orientation === UxOrientationEnum.HORIZONTAL &&
    fixed === UxPositionEnum.BOTTOM;
  const collapsible: boolean = Boolean(!footer && children.length > 1);
  const content = children.length && (
    <>
      <Nav
        className={`p-0 align-items-center ${
          sidebar ? "flex-column" : "col-4"
        } ${!collapsible ? "flex-row" : ""}`}
      >
        {children
          .filter(
            (childProps) =>
              childProps.direction &&
              childProps.direction === UxDirectionEnum.BEGINNING
          )
          .map((childProps: avbarItemProps, index: number) => (
            <div className="current" key={index}>
              {childProps.item}
            </div>
          ))}
      </Nav>
      <Nav
        className={`p-0 justify-content-center align-items-center ${
          sidebar ? "flex-column" : "col-4"
        } ${!collapsible ? "flex-row" : ""}`}
      >
        {children
          .filter(
            (childProps) =>
              childProps.direction &&
              childProps.direction === UxDirectionEnum.CENTER
          )
          .map((childProps: avbarItemProps, index: number) => (
            <div key={index}>{childProps.item}</div>
          ))}
      </Nav>
      <Nav
        className={`p-0 justify-content-end align-items-center ${
          sidebar ? "flex-column" : "col-4"
        } ${!collapsible ? "flex-row" : ""}`}
      >
        {children
          .filter(
            (childProps) =>
              !childProps.direction ||
              childProps.direction === UxDirectionEnum.END
          )
          .map((childProps: avbarItemProps, index: number) => (
            <div key={index}>{childProps.item}</div>
          ))}
      </Nav>
    </>
  );

  return (
    <RBNavbar
      {...{
        expand: sidebar ? undefined : expand ?? UxSizeEnum.MEDIUM,
        bg: color,
        variant: variant || UxShadesEnum.LIGHT,
        className: classMap(
          "edge-ux-navbar",
          "flex-nowrap",
          sidebar ? "sidebar flex-column" : footer ? "footer" : "header",
          props.className
        ),
        fixed: props.fixed || UxPositionEnum.TOP,
        role: props.role ?? "banner",
        as: props.asDiv ? "div" : undefined,
      }}
    >
      {brand && (
        <RBNavbar.Brand
          href={brand.href || undefined}
          className={classMap(
            sidebar ? "m-0" : "text-truncate",
            props.brandCallback && "cursor-pointer"
          )}
          onClick={props.brandCallback}
        >
          {
            <>
              <img
                src={Logo}
                width="40"
                height="40"
                alt={""}
                className="edge-ux-icon d-inline-block bg-light rounded-circle p-2 mb-3 mx-2"
              />
              {slogan && (
                <>
                  <br />
                  <span className="edge-ux-slogan text-primary">{slogan}</span>
                </>
              )}
            </>
          }
        </RBNavbar.Brand>
      )}
      {(collapsible && (
        <>
          <RBNavbar.Toggle aria-controls="basic-navbar-nav-toggle" />
          <RBNavbar.Collapse
            id="basic-navbar-nav-toggle"
            className={
              "justify-content-between " + (sidebar ? "flex-column" : "")
            }
          >
            {content}
          </RBNavbar.Collapse>
        </>
      )) || <div className="d-flex flex-grow-1">{content}</div>}
    </RBNavbar>
  );
};

export default UxNavbar;
