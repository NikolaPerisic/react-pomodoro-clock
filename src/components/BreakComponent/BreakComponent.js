import React from "react";
import classes from "./BreakComponent.module.css";
import { IoIosFastforward } from "react-icons/io";
import { IoIosRewind } from "react-icons/io";

const breakComponent = props => {
    return (
        <div className={classes.Wrapper}>
            <div className={classes.MainDiv}>
                <p>Break Time</p>
                <div className={classes.Break}>
                    <button onClick={() => props.clicked("less", "break")}>
                        <IoIosRewind />
                    </button>
                    <p>{props.breakTime}</p>
                    <button onClick={() => props.clicked("more", "break")}>
                        <IoIosFastforward />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default breakComponent;
