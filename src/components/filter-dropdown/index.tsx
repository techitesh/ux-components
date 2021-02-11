import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import FilterDropDownProps from "./filter-dropdown.props";

export default function UxFilterDropDown(props: FilterDropDownProps) {
  const { id, title, content } = props;
  return (
    <>
      <NavDropdown id={id} title={title}>
        {content}
      </NavDropdown>
    </>
  );
}
