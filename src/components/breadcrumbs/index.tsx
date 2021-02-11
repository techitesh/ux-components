import React from "react";
import RBBreadcrumb from "react-bootstrap/Breadcrumb";

import BreadcrumbsProps from "./breadcrumbs.props";
import BreadcrumbProps from "./breadcrumb.props";
import UxElementTypeEnum from "../../shared/enums/element-type.enum";

import Icon from "../icon";
import classMap from "../../shared/utilities/classMap";

import "./breadcrumb.scss";

import {Dropdown} from 'react-bootstrap';

const breadcrumbsProps = (props: BreadcrumbsProps) => {

  return (
    <RBBreadcrumb
      {...{
        as: props.elementType || (UxElementTypeEnum.H2 as any),
        listProps: {
          className: "breadBackground"
        },
        className: classMap("edge-ux-breadcrumbs", props.className)
      }}
    >

      {props.children.map((child: BreadcrumbProps, key: number) => {
        const last: boolean = props.children.length === key + 1;
        return (
          <>
          {key < 3 && <RBBreadcrumb.Item
            {...{
              onClick: !last ? child.callback : undefined,
              active: last,
              key: key,
              className: child.className,
              linkProps: {
                className: "breadcrumb-link"
              }
            }}
          >
            {(!last || props.children.length === 1) && <span>{child.title}</span>}
            {!last && key < props.children.length - 2 && key < 2 && (
              <span className="pl-3 seperator">
                {typeof props.separator === "string" ? props.separator : <Icon {...props.separator} />}
              </span>
            )}
          </RBBreadcrumb.Item>}
          </>
        );
      })}
      {props.children.length > 4 && !props.loading &&
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic" className="crumbIconHolder">
            <i className={`crumbIcon fa fa-angle-down`}></i>
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {
              props.children.map((childs: BreadcrumbProps, index: number) => {
                const lastIndex: boolean = props.children.length === index + 1;
                return (
                  index > 2 && !lastIndex && <Dropdown.Item className="breadCrumbDropdown" onClick={() => {childs.callback()}}>{childs.title}</Dropdown.Item>
                )
              })
            }
          </Dropdown.Menu>
        </Dropdown>
      }
    </RBBreadcrumb>
  );
};

export default breadcrumbsProps;