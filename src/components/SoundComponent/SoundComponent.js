import React from "react";
import sound from "../../assets/sounds/alarm-clock.mp3";

const soundComponent = props => {
	const myRef = React.createRef();

	if (props.alarm) {
		return <audio ref={myRef} src={sound} autoPlay />;
	} else {
		return null;
	}
};

export default soundComponent;
