import React from "react";
import classes from "./ClockComponent.module.css";
import Aux from "../../hoc/Aux";

const clockComponent = props => {
	return (
		<Aux>
			<div className={classes.Circle}>
				<div className={classes.Clock}>
					<p>{props.displayTime}</p>
				</div>
			</div>
			<div>
				<button onClick={props.startTimer}>Start/Stop</button>
				<button onClick={props.reset}>Reset</button>
			</div>
		</Aux>
	);
};

export default clockComponent;
