import React from "react";
import classes from "./InfoComponent.module.css";

const info = props => {
    let [stateRunning, breakStatus] = [props.stateRunning, props.breakStatus];
    let info = "Please click start button";
    stateRunning
        ? breakStatus
            ? (info = "Break Session")
            : (info = "Focus Session")
        : (info = "Click play/pause to start/continue your session");
    return (
        <div className={classes.Info}>
            <p>{info}</p>
        </div>
    );
};

export default info;
