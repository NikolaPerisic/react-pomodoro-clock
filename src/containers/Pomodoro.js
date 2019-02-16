import React, { Component } from "react";
import classes from "./Pomodoro.module.css";
import BreakComponent from "../components/BreakComponent/BreakComponent";
import FocusComponent from "../components/FocusComponent/FocusComponent";
import ClockComponent from "../components/ClockComponent/ClockComponent";

class Pomodoro extends Component {
	state = {
		focusTime: 25,
		breakTime: 15,
		displayTime: "24:59",
		timer: null,
		counter: 0,
		isRunning: false,
		isBreakTime: false
	};
	updateBreakAndFocusTime = (btn, type) => {
		let value;
		if (type === "break") {
			value = this.state.breakTime;
			if (btn === "less" && value > 1) {
				value--;
			} else if (btn === "more" && value < 25) {
				value++;
			}
			this.setState({ breakTime: value });
		}
		if (type === "focus") {
			value = this.state.focusTime;
			if (btn === "less" && value > 1) {
				value--;
			} else if (btn === "more" && value < 30) {
				value++;
			}
			this.setState({ focusTime: value });
		}
	};
	updateClock = () => {
		const timeNow = this.state.displayTime;
		const min = parseInt(timeNow.slice(0, 2));
		const sec = parseInt(timeNow.slice(3));
		let totalSec = min * 60 + sec;
		console.log(totalSec);
		totalSec--;
		let newMin = Math.floor(totalSec / 60);
		let newSec = totalSec % 60;
		let newTime = `${newMin}:${newSec}`;
		console.log(newTime);
		this.setState({
			displayTime: newTime
		});
	};
	runningTimer = () => {
		return setInterval(() => this.updateClock(), 1000);
	};

	render() {
		return (
			<div className={classes.Pomodoro}>
				<header className={classes.Header}>Pomodoro Clock</header>
				<BreakComponent
					clicked={this.updateBreakAndFocusTime}
					breakTime={this.state.breakTime}
				/>
				<FocusComponent
					clicked={this.updateBreakAndFocusTime}
					focusTime={this.state.focusTime}
				/>
				<ClockComponent
					startTimer={this.runningTimer}
					displayTime={this.state.displayTime}
				/>
			</div>
		);
	}
}

export default Pomodoro;
