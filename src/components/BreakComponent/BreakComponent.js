import React from "react";
import classes from "./BreakComponent.module.css";

const breakComponent = props => {
	return (
		<div className={classes.Wrapper}>
			<div className={classes.MainDiv}>
				<p>Break Time</p>
				<div className={classes.Break}>
					<button onClick={() => props.clicked("less", "break")}>Less</button>
					<p>{props.breakTime}</p>
					<button onClick={() => props.clicked("more", "break")}>More</button>
				</div>
			</div>
		</div>
	);
};

export default breakComponent;
