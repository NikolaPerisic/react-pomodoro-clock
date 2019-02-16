import React from "react";
import classes from "../BreakComponent/BreakComponent.module.css";

const focusComponent = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.MainDiv}>
				<p>Focus Time</p>
				<div className={classes.Break}>
					<button onClick={() => props.clicked("less", "focus")}>Less</button>
					<p>{props.focusTime}</p>
					<button onClick={() => props.clicked("more", "focus")}>More</button>
				</div>
			</div>
		</div>
	);
};

export default focusComponent;
