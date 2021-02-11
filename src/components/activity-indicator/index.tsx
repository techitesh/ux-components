import React from "react";
import "./activity-indicator.scss";
import LoaderIcon from "../../assets/icons/icon_loader.svg";

export default function Loader(props: any) {

    return (
        <div className={props.type === "nouser" ? "flex1" : "flex"} style={{position: props.position ? props.position: "fixed !important", backgroundColor: props.opacity ? `rgba(5, 4, 33, ${props.opacity})` : "rgba(5, 4, 33, 0.49)"}}>
            <div className="loader">
                <img src={LoaderIcon} alt="" width="46px" height="46px" />
                <label className="loaderText">Loading</label>
            </div>
        </div>
    );
}