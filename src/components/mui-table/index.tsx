import React from "react";
import { Table, TableBody, TableCell, withStyles, Checkbox, Paper, TableRow, TableHead, TableContainer, Select, MenuItem } from '@material-ui/core';
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from '@material-ui/core/styles';
import "./mui-table.scss";
import KebabIcon from "../../assets/icons/icon_kebab.svg";
import WarningIcon from "../../assets/icons/icon-warning-light.svg";

interface IMUITable {
    columnNames: string[],
    rowMapper: any,
    rowData: any,
    showColumnCheckbox: boolean,
    showKebabMenu?: boolean,
    MUITableClassName: string,
    emptyTableText?: string,
    checkboxRef: string,
    id?: any,
    status?: any,
    kebabAction?: (x: any, y: number) => void;
    handleStatus?: (x: number, y: boolean, z: number) => void;
    viewChild?: (x: any) => void;
    selected: any,
    setSelected: any,
    showNWEAFlag?: boolean,
    showNameKebabMenu?: boolean,
    showStatusText?: boolean,
    childDepth?: string,
    customKebabMenu?: boolean,
    showCustomKebabMenu?: boolean,
    showCustomKebabMenuText?: boolean,
    customKebabMenuData?: any,
    KebabMenuOption?: any,
    showSortList?: boolean[],
    sortListMapper?: any,
    showToolTip?: boolean,
    mtableHeight?: number,
    showCustomStatusText?: boolean,
    customStatusMapper?: string,
    errorsCallback?: any,
    customErrorOptionCallback?: any
}

export default function UxMUITable(props: IMUITable) {
    const { columnNames, rowMapper, rowData, showColumnCheckbox, showKebabMenu,
        MUITableClassName, emptyTableText, checkboxRef, id, status, handleStatus,
        viewChild, selected, setSelected, showNameKebabMenu, showStatusText, mtableHeight,
        customKebabMenu, showCustomKebabMenu, showCustomKebabMenuText, showToolTip, customKebabMenuData,
        KebabMenuOption, kebabAction, showNWEAFlag, showSortList, sortListMapper, showCustomStatusText,
        customStatusMapper, errorsCallback, customErrorOptionCallback } = props;

    const LightTooltip = withStyles((theme) => ({
        tooltip: {
            backgroundColor: theme.palette.common.white,
            color: "rgba(0, 0, 0, 0.87)",
            boxShadow: theme.shadows[1],
            fontSize: 11
        }
    }))(Tooltip);

    const useStyles = makeStyles({
        root: {
            width: '100%',
        },
        container: {
            maxHeight: mtableHeight,
            marginTop: '0px !important',
        },
    });
    const classes = useStyles();
    function isSelected(name: string) {
        return selected.indexOf(name) !== -1;
    };

    function handleSelectAllClick(event: any) {
        if (event.target.checked) {
            const newSelecteds = rowData.map((n: any) => n[checkboxRef]);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (name: string) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected: string[] = [];
        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };
    return (
        <div className={`bg-white ${MUITableClassName} p-3 bg-white`}>
            <TableContainer component={Paper} className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow role="checkbox">
                            {columnNames.map((data: any, index: number) => {
                                return index === 0 ? (
                                    <TableCell className="textBold" align="left">
                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "left" }}>
                                            {showColumnCheckbox ? (
                                                <Checkbox
                                                    indeterminate={selected.length > 0 && selected.length < rowData.length}
                                                    checked={rowData.length > 0 && selected.length === rowData.length}
                                                    onChange={handleSelectAllClick}
                                                    inputProps={{ "aria-label": "select all names" }}
                                                    size="small"
                                                />
                                            ) : null}
                                            <div
                                                style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center" }}
                                            >
                                                <label style={{ marginTop: "10px" }}>{data}</label>
                                                {rowData.length > 0 && showSortList ? (
                                                    showSortList[index] ? (
                                                        sortListMapper && sortListMapper[data][0] === null ? (
                                                            <i
                                                                onClick={() => {
                                                                    sortListMapper[data][1](true);
                                                                    sortListMapper[data][2](data);
                                                                }}
                                                                className="fa fa-sort sortIconDefault"
                                                            ></i>

                                                        ) : sortListMapper && sortListMapper[data][0] ? (
                                                            <i
                                                                onClick={() => {
                                                                    sortListMapper[data][1](!sortListMapper[data][0]);
                                                                    sortListMapper[data][2](data);
                                                                }}
                                                                className="fa  fa-sort-asc sortIconUp"
                                                            ></i>
                                                        ) : (
                                                                    <i
                                                                        onClick={() => {
                                                                            sortListMapper[data][1](!sortListMapper[data][0]);
                                                                            sortListMapper[data][2](data);
                                                                        }}
                                                                        className="fa fa-sort-desc sortIconDown"
                                                                    />
                                                                )
                                                    ) : null
                                                ) : null}
                                            </div>
                                        </div>
                                    </TableCell>
                                ) : (
                                        <TableCell className="textBold" align="left">
                                            <div
                                                style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "center" }}
                                            >
                                                <label style={{ marginTop: "10px" }}>{data}</label>
                                                {rowData.length > 0 && showSortList ? (
                                                    showSortList[index] ? (
                                                        sortListMapper && sortListMapper[data][0] === null ? (
                                                            <i
                                                                onClick={() => {
                                                                    sortListMapper[data][1](true);
                                                                    sortListMapper[data][2](data);
                                                                }}
                                                                className="fa fa-sort sortIconDefault"
                                                            ></i>
                                                        ) : sortListMapper && sortListMapper[data][0] ? (
                                                            <i
                                                                onClick={() => {
                                                                    sortListMapper[data][1](!sortListMapper[data][0]);
                                                                    sortListMapper[data][2](data);
                                                                }}
                                                                className="fa  fa-sort-asc sortIconUp"
                                                            ></i>
                                                        ) : (


                                                                    <i
                                                                        onClick={() => {
                                                                            sortListMapper[data][1](!sortListMapper[data][0]);
                                                                            sortListMapper[data][2](data);
                                                                        }}
                                                                        className="fa fa-sort-desc sortIconDown"
                                                                    ></i>

                                                                )
                                                    ) : null
                                                ) : null}
                                            </div>
                                        </TableCell>
                                    );
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rowData.length > 0 ?
                            rowData.map((row: any, getIndex: number) => {
                                const isItemSelected = isSelected(row[checkboxRef]);
                                const labelId = `enhanced-table-checkbox-${getIndex}`;
                                return (
                                    <TableRow key={row.name}>
                                        {rowMapper.map((keys: any, index: number) => {
                                            return (
                                                (index === 0 && showNWEAFlag) ?
                                                    <TableCell width="20px" component="th" scope="row">
                                                        <div>
                                                            <label onClick={viewChild ? () => { viewChild(row) } : () => { }} style={{ marginTop: "10px" }} id={labelId}>
                                                                {(showNWEAFlag && (row[rowMapper[0]] === "" || row[rowMapper[0]] === null || row[rowMapper[0]] === undefined) && (row.renaissanceID === "" || row.renaissanceID === null || row.renaissanceID === undefined)) ? (
                                                                    <LightTooltip placement="bottom-start" title="No assessment ID is saved for this student. Click the  ellipsis menu and select Edit Profile to enter the student’s assessment ID." enterDelay={500} leaveDelay={200}>
                                                                        <img alt=" " src={WarningIcon} className="warningImg" />
                                                                    </LightTooltip>
                                                                ) : null}</label>
                                                        </div>
                                                    </TableCell> :
                                                    (index === 1 && showNWEAFlag) ?
                                                        <TableCell className="rowText" component="th" scope="row">
                                                            <div className="rowText" style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "left" }}>
                                                                {showColumnCheckbox ? <Checkbox
                                                                    checked={isItemSelected}
                                                                    inputProps={{ 'aria-labelledby': labelId }}
                                                                    onClick={() => { handleClick(row[checkboxRef]) }}
                                                                    size="small"
                                                                /> : null}
                                                                <label onClick={viewChild ? () => { viewChild(row) } : () => { }} className="rowText ellipsis tBlueHover" style={{ marginTop: "10px" }} id={labelId}>
                                                                    {rowMapper[index].length > 1 ?
                                                                        rowMapper[index].map((data: any, i: any) => {
                                                                            if (i === 0)
                                                                                return `${row[rowMapper[index][i]]}, `
                                                                            else
                                                                                return `${row[rowMapper[index][i]]}`
                                                                        }) :
                                                                        row[rowMapper[index][0]]
                                                                    }</label>
                                                            </div>
                                                        </TableCell> :
                                                        (index === 0 && showToolTip) ?
                                                            <TableCell className="rowText" component="th" scope="row">
                                                                <div className="rowText" style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "left" }}>
                                                                    {showColumnCheckbox ? <Checkbox
                                                                        checked={isItemSelected}
                                                                        inputProps={{ 'aria-labelledby': labelId }}
                                                                        onClick={() => { handleClick(row[checkboxRef]) }}
                                                                        size="small"
                                                                    /> : null}
                                                                    <LightTooltip placement="bottom-start" title={row[rowMapper[index][1]]} enterDelay={10} leaveDelay={10}>
                                                                        <label onClick={viewChild ? () => { viewChild(row) } : () => { }} className="rowText ellipsis tBlueHover" style={{ marginTop: "10px" }} id={labelId}>

                                                                            {row[rowMapper[index][0]]}
                                                                        </label></LightTooltip>
                                                                </div>
                                                            </TableCell> :
                                                            (index === 0 && !showNameKebabMenu) ?
                                                                <TableCell className="rowText" component="th" scope="row">
                                                                    <div className="rowText" style={{ display: "flex", flexDirection: "row", justifyContent: "left", alignItems: "left" }}>
                                                                        {showColumnCheckbox ? <Checkbox
                                                                            checked={isItemSelected}
                                                                            inputProps={{ 'aria-labelledby': labelId }}
                                                                            onClick={() => { handleClick(row[checkboxRef]) }}
                                                                            size="small"
                                                                        /> : null}
                                                                        <label onClick={viewChild ? () => { viewChild(row) } : () => { }} className="rowText ellipsis tBlueHover" style={{ marginTop: "10px" }} id={labelId}>
                                                                            {rowMapper[index].length > 1 ?
                                                                                rowMapper[index].map((data: any, i: any) => {
                                                                                    if (i === 0)
                                                                                        return `${row[rowMapper[index][i]]}, `
                                                                                    else
                                                                                        return `${row[rowMapper[index][i]]}`
                                                                                }) :
                                                                                row[rowMapper[index][0]]
                                                                            }</label>
                                                                    </div>
                                                                </TableCell> :
                                                                !showNameKebabMenu && index > 0 && index < rowMapper.length - 1 ?
                                                                    <TableCell align="left">
                                                                        {rowMapper[index] !== "___" && row[rowMapper[index]] !== "" && row[rowMapper[index]] !== " " && row[rowMapper[index]] !== undefined && row[rowMapper[index]] !== null ?
                                                                            <>
                                                                                <label className="rowText" style={{ display: "flex" }}>{typeof row[rowMapper[index]] === "object" && row[rowMapper[index]].length > 0 ?
                                                                                    <>
                                                                                        <label className="rowTextNoEllipsis" style={{ marginTop: "10px" }} id={labelId}>
                                                                                            {row[rowMapper[index]][0]}
                                                                                        </label>
                                                                                        {row[rowMapper[index]].length - 1 > 0 ?
                                                                                            <label style={{ marginTop: "10px", marginLeft: "10px" }}>
                                                                                                {` +${row[rowMapper[index]].length - 1}`}
                                                                                            </label> :
                                                                                            null
                                                                                        }
                                                                                    </> :
                                                                                    //@ts-ignore
                                                                                    rowMapper[index] === customStatusMapper ?
                                                                                        row[rowMapper[index]] > 0 ?
                                                                                            <label onClick={() => { errorsCallback(row) }} className="rowText customTableCell" style={{ marginTop: "15px" }} id={labelId}>
                                                                                                {row[rowMapper[index]]}
                                                                                            </label> :
                                                                                            <label className="rowText ellipsis noCursor" style={{ marginTop: "15px" }} id={labelId}>
                                                                                                {row[rowMapper[index]]}
                                                                                            </label> :
                                                                                        <label className="rowText ellipsis noCursor" style={{ marginTop: "15px" }} id={labelId}>
                                                                                            {row[rowMapper[index]]}
                                                                                        </label>
                                                                                }
                                                                                </label>
                                                                            </> :
                                                                            "__"}
                                                                    </TableCell>
                                                                    : showNameKebabMenu && index === 0 ?
                                                                        <TableCell className="rowText noCursor" align="left">
                                                                            <div className="d-flex">
                                                                                <div className="status">
                                                                                    <span className="name-text" onClick={viewChild ? () => { viewChild(row) } : () => { }}>{row[rowMapper[index]]}</span>
                                                                                </div>
                                                                                {showNameKebabMenu ? <div className="dropper">
                                                                                    <Select
                                                                                        value={""}
                                                                                        onChange={handleStatus ? () => { handleStatus(row[id], row[status], getIndex) } : () => { }}
                                                                                        onMouseOver={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0.2)") }}
                                                                                        onMouseOut={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                        onBlur={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                        IconComponent={() => (<img className={`MuiSvgIcon-root MuiSelect-icon icon${MUITableClassName}${getIndex}`} src={KebabIcon} alt="" width="30px" height="30px" />)}
                                                                                        className="noUnderLine"
                                                                                    >
                                                                                        <MenuItem className="tableStatusMenu">{row[rowMapper[index]] ? "Deactivate" : "Activate"}</MenuItem>
                                                                                    </Select>
                                                                                </div> : null}
                                                                            </div>
                                                                        </TableCell> :
                                                                        customKebabMenu ?
                                                                            <TableCell className="rowText noCursor" align="left">
                                                                                <div className="d-flex">
                                                                                    <div className="status">
                                                                                        {showCustomKebabMenuText ? <span className="name-text">{row[rowMapper[index]]}</span> : null}
                                                                                    </div>
                                                                                    {showCustomKebabMenu ?
                                                                                        <div className="dropper">
                                                                                            <Select
                                                                                                value={""}
                                                                                                onMouseOver={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0.2)") }}
                                                                                                onMouseOut={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                onBlur={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                IconComponent={() => (<img className={`MuiSvgIcon-root MuiSelect-icon icon${MUITableClassName}${getIndex}`} src={KebabIcon} alt="" width="30px" height="30px" />)}
                                                                                                className="noUnderLine"
                                                                                            >
                                                                                                {row.placementGrades.studentPlacementId > 0 && row.placementGrades.isILPActivated === true ?
                                                                                                    customKebabMenuData.map((customData: any) => {
                                                                                                        return (
                                                                                                            <MenuItem className="tableStatusMenu" onClick={() => { customData.callback(row) }}>
                                                                                                                {customData.key === "placement" ?
                                                                                                                    row.placementGrades.studentPlacementId === 0 ?
                                                                                                                        customData.data.undefined :
                                                                                                                        customData.data.hasValue
                                                                                                                    :
                                                                                                                    customData.key === "deactivate" ?
                                                                                                                        row.placementGrades.isILPActivated === true ?
                                                                                                                            customData.data.hasValue :
                                                                                                                            customData.data.undefined
                                                                                                                        : null
                                                                                                                }
                                                                                                            </MenuItem>
                                                                                                        )
                                                                                                    }) :
                                                                                                    row.placementGrades.studentPlacementId > 0 && row.placementGrades.isILPActivated === false ?
                                                                                                        customKebabMenuData.map((customData: any) => {
                                                                                                            return (
                                                                                                                customData.key === "deactivate" &&
                                                                                                                <MenuItem className="tableStatusMenu" onClick={() => { customData.callback(row) }}>
                                                                                                                    {row.placementGrades.isILPActivated === true ?
                                                                                                                        customData.data.hasValue :
                                                                                                                        customData.data.undefined
                                                                                                                    }
                                                                                                                </MenuItem>
                                                                                                            )
                                                                                                        })
                                                                                                        :
                                                                                                        customKebabMenuData.map((customData: any) => {
                                                                                                            return (
                                                                                                                customData.key === "placement" &&
                                                                                                                <MenuItem className="tableStatusMenu" onClick={() => { customData.callback(row) }}>
                                                                                                                    {row.placementGrades.studentPlacementId === 0 ?
                                                                                                                        customData.data.undefined :
                                                                                                                        customData.data.hasValue
                                                                                                                    }
                                                                                                                </MenuItem>
                                                                                                            )
                                                                                                        })
                                                                                                }
                                                                                                {(row[rowMapper[0]] === "" || row[rowMapper[0]] === null || row[rowMapper[0]] === undefined) && (row.renaissanceID === "" || row.renaissanceID === null || row.renaissanceID === undefined) ? (
                                                                                                    <MenuItem className="tableStatusMenu" onClick={() => { customKebabMenuData[0].callback(row) }}>
                                                                                                        {customKebabMenuData[0].data.hasValue}
                                                                                                    </MenuItem>
                                                                                                ) : null}
                                                                                            </Select>
                                                                                        </div> :
                                                                                        null
                                                                                    }
                                                                                </div>
                                                                            </TableCell> :
                                                                            <TableCell className="rowText" align="left">
                                                                                <div className="d-flex">
                                                                                    <div className="status">
                                                                                        {showStatusText === false ?
                                                                                            null :
                                                                                            <span className="name-text noCursor">{row[rowMapper[index]] === true ? "Active" : "Inactive"}</span>
                                                                                        }
                                                                                        {(showStatusText === false && showToolTip === true) ? <span className="name-text noCursor">{row[rowMapper[index]]}</span> : null}
                                                                                        {showCustomStatusText ?
                                                                                            <span className="name-text noCursor">
                                                                                                {
                                                                                                    //@ts-ignore
                                                                                                    row[customStatusMapper] === null ?
                                                                                                        <i>Processing</i> :
                                                                                                        //@ts-ignore
                                                                                                        row[customStatusMapper] === 0 ?
                                                                                                            row.statusId === 5 ?
                                                                                                            "Failed" :
                                                                                                            "Completed" :
                                                                                                            "Completed w/Errors"
                                                                                                }
                                                                                            </span> : null
                                                                                        }
                                                                                    </div>
                                                                                    {showKebabMenu ? <div className="dropper">
                                                                                        <Select
                                                                                            value={""}
                                                                                            onChange={kebabAction ? () => { kebabAction(row, getIndex) } : () => { }}
                                                                                            onMouseOver={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0.2)") }}
                                                                                            onMouseOut={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                            onBlur={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                            IconComponent={() => (<img className={`MuiSvgIcon-root MuiSelect-icon icon${MUITableClassName}${getIndex}`} src={KebabIcon} alt="" width="30px" height="30px" />)}
                                                                                            className="noUnderLine"
                                                                                        >
                                                                                            <MenuItem className="tableStatusMenu">
                                                                                                {row[rowMapper[index]] ? KebabMenuOption[0] : KebabMenuOption[1]}
                                                                                            </MenuItem>
                                                                                        </Select>
                                                                                    </div> :
                                                                                        showCustomStatusText ?
                                                                                            //@ts-ignore
                                                                                            row[customStatusMapper] === null ?
                                                                                                null :
                                                                                                //@ts-ignore
                                                                                                row[customStatusMapper] === 0 ?
                                                                                                    <div className="dropper">
                                                                                                        <Select
                                                                                                            value={""}
                                                                                                            onChange={() => { }}
                                                                                                            onMouseOver={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0.2)") }}
                                                                                                            onMouseOut={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                            onBlur={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                            IconComponent={() => (<img className={`MuiSvgIcon-root MuiSelect-icon icon${MUITableClassName}${getIndex}`} src={KebabIcon} alt="" width="30px" height="30px" />)}
                                                                                                            className="noUnderLine"
                                                                                                        >
                                                                                                            {row.successCount !== 0 ? (
                                                                                                                <MenuItem className="tableStatusMenu" onClick={() => customErrorOptionCallback({ data: row, type: "Download Completed File" })}>
                                                                                                                    Download Completed File
                                                                                                                </MenuItem>
                                                                                                            ) : null}
                                                                                                            
                                                                                                            <MenuItem className="tableStatusMenu" onClick={() => customErrorOptionCallback({ data: row, type: "File Details" })}>
                                                                                                                File Details
                                                                                                            </MenuItem>
                                                                                                        </Select>
                                                                                                    </div> :
                                                                                                    <div className="dropper">
                                                                                                        <Select
                                                                                                            value={""}
                                                                                                            onChange={() => { }}
                                                                                                            onMouseOver={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0.2)") }}
                                                                                                            onMouseOut={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                            onBlur={() => { document.getElementsByClassName(`icon${MUITableClassName}${getIndex}`)[0].setAttribute("style", "background: rgba(71, 165, 201, 0)") }}
                                                                                                            IconComponent={() => (<img className={`MuiSvgIcon-root MuiSelect-icon icon${MUITableClassName}${getIndex}`} src={KebabIcon} alt="" width="30px" height="30px" />)}
                                                                                                            className="noUnderLine"
                                                                                                        >
                                                                                                            <MenuItem className="tableStatusMenu" onClick={() => customErrorOptionCallback({ data: row, type: "Download & Fix Errors" })}>
                                                                                                                Download & Fix Errors
                                                                                                            </MenuItem>
                                                                                                            {row.successCount !== 0 ? (
                                                                                                                <MenuItem className="tableStatusMenu" onClick={() => customErrorOptionCallback({ data: row, type: "Download Completed File" })}>
                                                                                                                    Download Completed File
                                                                                                                </MenuItem>
                                                                                                            ) : null}
                                                                                                            
                                                                                                            <MenuItem className="tableStatusMenu" onClick={() => customErrorOptionCallback({ data: row, type: "File Details" })}>
                                                                                                                File Details
                                                                                                            </MenuItem>
                                                                                                        </Select>
                                                                                                    </div> :
                                                                                            null
                                                                                    }
                                                                                </div>
                                                                            </TableCell>
                                            )
                                        })
                                        }
                                    </TableRow>
                                )
                            }) : null
                        }
                    </TableBody>
                </Table>
                {emptyTableText && rowData.length === 0 ? <label className="emptyTableFullText"><i>{emptyTableText}</i></label> : null}
            </TableContainer>
        </div>
    )
}