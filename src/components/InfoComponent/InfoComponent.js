import React from "react";
import classes from "./InfoComponent.module.css";

const info = props => {
	let [stateRunning, breakStatus] = [props.stateRunning, props.breakStatus];
	let info = "Please click start button";
	stateRunning
		? breakStatus
			? (info = "Break Session has begun!")
			: (info = "Focus Session has begun!")
		: (info = "Click on the start/stop button to start/continue your session");
	return (
		<div className={classes.Info}>
			<p>{info}</p>
		</div>
	);
};

export default info;
