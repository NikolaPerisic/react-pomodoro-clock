import React from "react";
import classes from "./ClockComponent.module.css";
import classesBreak from "./ClockComponentBreak.module.css";
import Aux from "../../hoc/Aux";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdRepeat } from "react-icons/io";

const clockComponent = props => {
    let styles = props.breakTime ? classesBreak : classes;
    return (
        <Aux>
            <div className={styles.Circle}>
                <div className={styles.Clock}>
                    <p>{props.displayTime}</p>
                </div>
            </div>
            <div className={styles.BtnWrapper}>
                <button onClick={props.startTimer} className={styles.btn}>
                    <IoMdSkipForward />
                </button>
                <button onClick={props.reset} className={styles.btn}>
                    <IoMdRepeat />
                </button>
            </div>
        </Aux>
    );
};

export default clockComponent;
