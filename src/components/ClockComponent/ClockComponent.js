import React from "react";
import classes from "./ClockComponent.module.css";

const clockComponent = props => {
	return (
		<div className={classes.Clock}>
			<div>{props.displayTime}</div>
		</div>
	);
};

export default clockComponent;
