import React from "react";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./slider-action.scss";
import FilterIcon from "../../assets/icons/icon_filter.svg";
import TimesIcon from "../../assets/icons/icon_times.svg";

interface ISliderAction {
  filterText: string;
  activeFilters: Array<any>;
  filterStates: any;
  setFilterState: any;
  setActiveFilters: any;
  minCount: number;
  multiFilterDropDown: boolean;
  setMultiFilterDropDown: any;
  setSliderLeft: any;
  left: string;
  setBackgroundVisibility: any;
  setOpacity: any;
  types: Object;
  onChecked: any;
  textMessage: any;
  setStateName: any;
  stateName: any;
  stateCallback?: any;
}

export default function UxSliderAction(props: ISliderAction) {
  const {
    filterText,
    activeFilters,
    setActiveFilters,
    filterStates,
    setFilterState,
    minCount,
    multiFilterDropDown,
    setMultiFilterDropDown,
    setSliderLeft,
    left,
    setBackgroundVisibility,
    setOpacity,
    types,
    onChecked,
    textMessage,
    setStateName,
    stateName,
    stateCallback
  } = props;

  function sliderleft() {
    if (left !== "-330px") {
      setSliderLeft("-330px");
      setTimeout(() => {
        setBackgroundVisibility(false);
      }, 800);
      setOpacity(0);
    } else {
      setBackgroundVisibility(true);
      setTimeout(() => {
        setOpacity(1);
      }, 10);
      setSliderLeft("90px");
    }
  }

  function sliceFilter(data: string) {
    const ftrs = activeFilters.filter(function (item) {
      return item !== data;
    });
    //@ts-ignore
    const names = stateName[types[data]].filter(function (item: any) {
      return item !== data;
    });
    setActiveFilters.current = ftrs;
    //@ts-ignore
    setStateName({ ...stateName, [types[data]]: names });
  }

  function onUncheck(row: string) {
    if (filterStates[row] === false) {
      setActiveFilters.current = [...activeFilters, row];
      setFilterState.current = { ...filterStates, [row]: true };
      //@ts-ignore
      stateName[types[row]] === undefined
        ? //@ts-ignore
          setStateName({ ...stateName, [types[row]]: [row] })
        : //@ts-ignore
          setStateName({ ...stateName, [types[row]]: [...stateName[types[row]], row] });
      setFilterState.current = { ...filterStates, [row]: true };
      onChecked();
    } else {
      sliceFilter(row);
      setFilterState.current = { ...filterStates, [row]: false };
      onChecked();
    }
    stateCallback && stateCallback([row, !filterStates[row]])
  }

  return (
    <div>
      <div className={activeFilters.length >= minCount ? "multiFilterActive" : "multiFilter"} >
        <div className={activeFilters.length >= minCount ? "iconTextActive" : "iconText"} onClick={() => {
          sliderleft();
        }}>
          <img src={FilterIcon} alt="" width="16px" height="17px" />
          <label
            className={activeFilters.length >= minCount ? "multiFilterTextActive" : "multiFilterText"}
          >
            {filterText}
          </label>
        </div>
        {activeFilters.length >= minCount ? (
          <div className={activeFilters.length >= minCount ? "countHolderActive" : "counterHolderActive"}>
            <label
              className="filterCount"
              onMouseOver={() => {
                setMultiFilterDropDown(true);
                setTimeout(() => {
                  setMultiFilterDropDown(false);
                }, 5000);
              }}
            >
              {activeFilters.length}
            </label>
          </div>
        ) : null}
      </div>
      {multiFilterDropDown ? (
        <div className="listAbsolute">
          {activeFilters.map((row) => {
            return (
              <NavDropdown.Item className="multifilterdropdownText">
                {
                  //@ts-ignore
                  `${types[row]}: ${row}`
                }{" "}
                <div
                  onClick={() => {
                    onUncheck(row);
                    setMultiFilterDropDown(!multiFilterDropDown);
                    textMessage.current = "UxFilterSlider";
                  }}
                >
                <img src={TimesIcon} alt="" width="16px" height="16px" className="cursorImg" />
                </div>
              </NavDropdown.Item>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
