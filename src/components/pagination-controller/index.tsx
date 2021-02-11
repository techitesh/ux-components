import React, { useState, useEffect } from "react";
import "./pagination-controller.scss";

interface PaginationControllerProps {
  rowsList: any[];
  setRowsCount?: number;
  callback: any;
}

export default function UxPaginate({
  rowsList,
  setRowsCount,
  callback,
}: PaginationControllerProps) {
  const [count, setCount] = useState(setRowsCount);
  const [show, setShow] = useState(false);

  function timeOut() {
    setTimeout(() => {
      setShow(false);
    }, 5000);
  }

  useEffect(() => {
    setCount(setRowsCount);
  }, [setRowsCount]);

  return (
    <>
      <div className="countButtonHolder">
        {show ? (
          <div className="controllerDropDown">
            {rowsList.map((data) => {
              return (
                <div
                  className="controllerDropDownItem"
                  onClick={() => {
                    setCount(data);
                    setShow(false);
                    callback(data);
                  }}
                >
                  {data}
                </div>
              );
            })}
          </div>
        ) : null}
        <div className="counterHolder">{count}</div>
        <div
          className="buttonHolder"
          onClick={() => {
            setShow(!show);
            timeOut();
          }}
        >
          <i className="fa fa-chevron-down"></i>
        </div>
      </div>
    </>
  );
}
