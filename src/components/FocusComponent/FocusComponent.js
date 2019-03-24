import React from "react";
import classes from "../BreakComponent/BreakComponent.module.css";
import { IoIosFastforward } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";

const focusComponent = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.MainDiv}>
                <p>Focus Time</p>
                <div className={classes.Break}>
                    <button onClick={() => props.clicked("less", "focus")}>
                        <IoIosRewind />
                    </button>
                    <p>{props.focusTime}</p>
                    <button onClick={() => props.clicked("more", "focus")}>
                        <IoIosFastforward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default focusComponent;
