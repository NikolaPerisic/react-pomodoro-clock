import React from "react";
import classes from "./ClockComponent.module.css";
import Aux from "../../hoc/Aux";
import { IoMdSkipForward } from "react-icons/io";
import { IoMdRepeat } from "react-icons/io";

const clockComponent = props => {
	return (
		<Aux>
			<div className={classes.Circle}>
				<div className={classes.Clock}>
					<p>{props.displayTime}</p>
				</div>
			</div>
			<div>
				<button onClick={props.startTimer}>
					<IoMdSkipForward />
				</button>
				<button onClick={props.reset}>
					<IoMdRepeat />
				</button>
			</div>
		</Aux>
	);
};

export default clockComponent;
