import React from "react";
import classes from "./ClockComponent.module.css";

const clockComponent = props => {
	return (
		<div className={classes.Circle}>
			<div className={classes.Clock}>
				<p>{props.displayTime}</p>
			</div>
			<div>
				<button onClick={props.startTimer}>Start/Stop</button>
				<button onClick={props.reset}>Reset</button>
			</div>
		</div>
	);
};

export default clockComponent;
