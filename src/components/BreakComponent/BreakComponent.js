import React from "react";

const breakComponent = props => {
	return (
		<div>
			<p>Break Time</p>
			<div>
				<button onClick={() => props.clicked("less", "break")}>Less</button>
				<p>{props.breakTime}</p>
				<button onClick={() => props.clicked("more", "break")}>More</button>
			</div>
		</div>
	);
};

export default breakComponent;
