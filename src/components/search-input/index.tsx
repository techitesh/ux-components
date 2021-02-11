import React from "react";
import InpuTextProps from "./search-input.props";

export default function InputText(props: InpuTextProps) {
    const {
        inputClassName,
        inputID,
        searchButtonClassName,
        clearButtonClassName,
        buttonID,
        name,
        placeHolder,
        value,
        minLength,
        maxLength,
        required,
        readOnly,
        searchButtonContent,
        onChange,
        onSearchClick,
        onClearClick,
        flexClassName,
        onKeyPress,
        clearButtonContent,
        restoreCheckBoxState,
    } = props;

    function renderClear() {
        if(restoreCheckBoxState) {
            onClearClick(event);
            restoreCheckBoxState()
        } else {
            onClearClick(event);
        }
    }
    
    return (
        <div className={`inlineFlex ${flexClassName}`}>
            <input
                className={inputClassName}
                id={inputID}
                name={name}
                placeholder={placeHolder}
                value={value}
                minLength={minLength}
                maxLength={maxLength}
                required={required}
                readOnly={readOnly}
                onChange={() => {onChange(event)}}
                onKeyPress={() => {onKeyPress(event)}}
            />
            <div style={{display: "flex", float: "right"}}>
                <button
                    className={clearButtonClassName}
                    id={buttonID}
                    onClick={() => {renderClear()}}
                >
                {clearButtonContent}
                </button>
                <button
                    className={searchButtonClassName}
                    id={buttonID}
                    onClick={() => {onSearchClick(event)}}
                >
                {searchButtonContent}
                </button>
            </div>
        </div>
    );
}