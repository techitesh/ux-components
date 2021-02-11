/* eslint-disable array-callback-return */
import React, { useState } from "react";
import "./filter-slider.scss";
import TimesIcon from "../../assets/icons/icon_times.svg";
import ResetIcon from "../../assets/icons/icon_reset.svg";

interface IFilterSlider {
  opacity: number;
  backgroundVisibility: boolean;
  left: string;
  sliderHeader: string;
  activeFilters: Array<any>;
  setActiveFilters: any;
  resetText: string;
  onResetClick(): any;
  activeFilterText: string;
  types: Object;
  typesHeader: Array<any>;
  typesList: Object;
  filterStates: any;
  setFilterState: any;
  setSliderLeft: any;
  setBackgroundVisibility: any;
  setOpacity: any;
  onChecked: any;
  textMessage: any;
  setMultiFilterDropDown: any;
  screen: string;
  setStateName: any;
  stateName: any;
  stateCallback?: any;
}

export default function UxFilterSlider(props: IFilterSlider) {
  const {
    opacity,
    backgroundVisibility,
    left,
    sliderHeader,
    activeFilters,
    setActiveFilters,
    resetText,
    onResetClick,
    activeFilterText,
    types,
    typesHeader,
    typesList,
    filterStates,
    setFilterState,
    setSliderLeft,
    setBackgroundVisibility,
    setOpacity,
    onChecked,
    textMessage,
    setMultiFilterDropDown,
    screen,
    setStateName,
    stateName,
    stateCallback,
  } = props;
  const [backgroundOpaque, setBackgroundOpaque] = useState(false);
  function sliderleft() {
    if (left !== "-330px") {
      setSliderLeft("-330px");
      setTimeout(() => {
        setBackgroundVisibility(false);
      }, 800);
      setBackgroundOpaque(false);
      setOpacity(0);
      textMessage.current = "UxFilterSlider";
      setMultiFilterDropDown(false);
    } else {
      setBackgroundVisibility(true);
      setBackgroundOpaque(true);
      setTimeout(() => {
        setOpacity(1);
      }, 10);
      setSliderLeft("90px");
    }
  }

  function sliceFilter(data: string) {
    const ftrs = activeFilters.filter(function (item: any) {
      return item !== data;
    });
    //@ts-ignore
    const names = stateName[types[data]].filter(function (item: any) {
      return item !== data;
    });
    //@ts-ignore
    setActiveFilters.current = ftrs;
    //@ts-ignore
    setStateName({ ...stateName, [types[data]]: names });
  }

  function onUncheck(row: string) {
    if (row === "Active" || row === "Inactive") {
      if (row === "Active") {
        if (filterStates.Active === false) {
          setFilterState.current = {
            ...filterStates,
            Active: true,
            Inactive: false,
          };
          if (activeFilters.includes("Inactive")) {
            activeFilters[activeFilters.indexOf("Inactive")] = "Active";
          } else {
            setActiveFilters.current = [...activeFilters, "Active"];
          }
          //@ts-ignore
          stateName[types[row]] === undefined
            ? //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [row] })
            : //@ts-ignore
              setStateName({ ...stateName, [types[row]]: ["Active"] });
        } else {
          setFilterState.current = {
            ...filterStates,
            Active: false,
            Inactive: false,
          };
          sliceFilter("Active");
          //@ts-ignore
          stateName[types[row]] === undefined
            ? //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [row] })
            : //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [] });
        }
      } else {
        if (filterStates.Inactive === false) {
          setFilterState.current = {
            ...filterStates,
            Active: false,
            Inactive: true,
          };
          if (activeFilters.includes("Active")) {
            activeFilters[activeFilters.indexOf("Active")] = "Inactive";
          } else {
            setActiveFilters.current = [...activeFilters, "Inactive"];
          }
          //@ts-ignore
          stateName[types[row]] === undefined
            ? //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [row] })
            : //@ts-ignore
              setStateName({ ...stateName, [types[row]]: ["Inactive"] });
        } else {
          setFilterState.current = {
            ...filterStates,
            Active: false,
            Inactive: false,
          };
          sliceFilter("Inactive");
          //@ts-ignore
          stateName[types[row]] === undefined
            ? //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [row] })
            : //@ts-ignore
              setStateName({ ...stateName, [types[row]]: [] });
        }
      }
      onChecked();
    } else {
      if (filterStates[row] === false) {
        setActiveFilters.current = [...activeFilters, row];
        //@ts-ignore
        stateName[types[row]] === undefined
          ? //@ts-ignore
            setStateName({ ...stateName, [types[row]]: [row] })
          : //@ts-ignore
            setStateName({
              ...stateName,
              [types[row]]: [...stateName[types[row]], row],
            });
        setFilterState.current = { ...filterStates, [row]: true };
      } else {
        sliceFilter(row);
        setFilterState.current = { ...filterStates, [row]: false };
      }
      onChecked();
    }
    stateCallback && stateCallback([row, !filterStates[row]]);
  }

  function displayTypes(getData: string) {
    if (
      document
        .getElementsByClassName(getData)[0]
        .getAttribute("style")
        ?.includes("block")
    ) {
      document
        .getElementsByClassName(getData)[0]
        .setAttribute("style", "display: none");
      document
        .getElementsByClassName(`${getData}caret`)[0]
        .setAttribute("class", `fa fa-caret-up ${getData}caret`);
    } else {
      document
        .getElementsByClassName(getData)[0]
        .setAttribute("style", "display: block");
      document
        .getElementsByClassName(`${getData}caret`)[0]
        .setAttribute("class", `fa fa-caret-down ${getData}caret`);
    }
  }

  function clearTypes(obj: string) {
    setStateName({ ...stateName, [obj]: [] });
    let newState = {};
    for (const object in filterStates) {
      //@ts-ignore
      if (types[object] !== obj)
        newState = { ...newState, [object]: filterStates[object] };
      else newState = { ...newState, [object]: false };
    }
    const ftrs = activeFilters.filter(function (item: any) {
      //@ts-ignore
      return types[item] !== obj;
    });
    setActiveFilters.current = ftrs;
    setFilterState.current = newState;
    onChecked();
    stateCallback && stateCallback([obj, false]);
  }

  function renderActiveFilters() {
    const elements = [];
    for (const object in stateName) {
      stateName[object].length !== 0
        ? elements.push(
            <div className="activeFilters">
              {stateName[object].length > 1 ? (
                <label className="allActiveFilterText">
                  {`${object}: `}
                  <label className="Count">
                    {`${stateName[object].length}`}
                  </label>
                </label>
              ) : (
                <label className="allActiveFilterText">{`${object}: ${stateName[object][0]}`}</label>
              )}
              <div
                onClick={() => {
                  clearTypes(object);
                }}
              >
                <img
                  src={TimesIcon}
                  alt=""
                  width="16px"
                  height="16px"
                  className="filterRemove cursorImg"
                />
              </div>
            </div>
          )
        : null;
    }
    return elements;
  }

  return (
    <>
      <div
        className="filterSliderOpaque"
        style={{ display: backgroundOpaque ? "block" : "none" }}
      />
      <div
        className="filterSliderBackground"
        style={{
          display: backgroundVisibility ? "flex" : "none",
          opacity: opacity,
          cursor: "pointer",
        }}
        onClick={() => {
          sliderleft();
        }}
      />
      <div className="filterSlider" style={{ left: left }}>
        <div className="fliterTextCloseFLex">
          <label className="filterSliderText">{sliderHeader}</label>
          <div
            onClick={() => {
              sliderleft();
            }}
          >
            <img
              src={TimesIcon}
              alt=""
              width="25px"
              height="25px"
              className="cursorImg"
            />
          </div>
        </div>
        {activeFilters.length !== 0 ? (
          <div
            onClick={() => {
              onResetClick();
            }}
            className="resetHolder"
          >
            <img src={ResetIcon} alt="" width="11px" height="11px" />
            <label style={{ cursor: "pointer" }} className="resetText">
              {resetText}
            </label>
          </div>
        ) : null}
        <hr />
        <div className="activeFilterDiv">
          <div
            className="activeFilterDivText"
            onClick={() => {
              displayTypes(`${activeFilterText}${screen}`);
            }}
          >
            <label style={{ cursor: "pointer" }}>{activeFilterText}</label>
            <i
              style={{ cursor: "pointer" }}
              className={`fa fa-caret-down ${activeFilterText}${screen}caret`}
            ></i>
          </div>
          <div
            className={`${activeFilterText}${screen}`}
            style={{ display: "block" }}
          >
            {activeFilters.length === 0 ? (
              <div className="activeFilters">
                <label className="allActiveFilterText">No Active Filters</label>
              </div>
            ) : (
              renderActiveFilters()
            )}
          </div>
        </div>
        <hr />
        <div>
          {typesHeader.map((data) => {
            return (
              <div>
                <div
                  onClick={() => {
                    displayTypes(`${data}${screen}`);
                  }}
                  className="activeFilterDivText"
                >
                  <label style={{ cursor: "pointer" }}>{data}</label>
                  <i
                    style={{ cursor: "pointer" }}
                    className={`fa fa-caret-down ${data}${screen}caret`}
                  ></i>
                </div>
                <div
                  className={`anime ${data}${screen}`}
                  style={{ display: "block" }}
                >
                  {
                    //@ts-ignore
                    typesList[data].map((row: any) => {
                      return (
                        <div
                          className="inputTypeFlex"
                          onClick={() => {
                            onUncheck(row);
                          }}
                        >
                          <div className="checkBoxUxIcon">
                            {filterStates[row] ? (
                              <i className="fa fa-check-square"></i>
                            ) : (
                              <i className="fa fa-square"></i>
                            )}
                          </div>
                          <label className="typeLabel">{row}</label>
                        </div>
                      );
                    })
                  }
                </div>
                <hr />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
