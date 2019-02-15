import React from "react";

const focusComponent = props => {
	return (
		<div>
			<p>Focus Time</p>
			<div>
				<button onClick={() => props.clicked("less", "focus")}>Less</button>
				<p>{props.focusTime}</p>
				<button onClick={() => props.clicked("more", "focus")}>More</button>
			</div>
		</div>
	);
};

export default focusComponent;
