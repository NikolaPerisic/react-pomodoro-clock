import React, { Component } from "react";
import classes from "./Pomodoro.module.css";
import BreakComponent from "../components/BreakComponent/BreakComponent";
import FocusComponent from "../components/FocusComponent/FocusComponent";
import ClockComponent from "../components/ClockComponent/ClockComponent";
import SoundComponent from "../components/SoundComponent/SoundComponent";
import InfoComponent from "../components/InfoComponent/InfoComponent";

const INITIAL_STATE = {
	focusTime: 25,
	breakTime: 5,
	displayTime: "25:00",
	timer: null,
	counter: 0,
	isRunning: false,
	isBreakTime: false,
	alarmSound: false
};

class Pomodoro extends Component {
	state = { ...INITIAL_STATE };

	updateBreakAndFocusTime = (btn, type) => {
		if (!this.state.isRunning) {
			let value;
			if (type === "break") {
				value = this.state.breakTime;
				if (btn === "less" && value > 1) {
					value--;
				} else if (btn === "more" && value < 60) {
					value++;
				}
				this.setState({ breakTime: value });
			}
			if (type === "focus") {
				value = this.state.focusTime;
				if (btn === "less" && value > 1) {
					value--;
				} else if (btn === "more" && value < 60) {
					value++;
				}
				let newDisplayTime = this.displayTimeFormatter(value * 60);
				this.setState({ focusTime: value, displayTime: newDisplayTime });
			}
		}
	};
	displayTimeFormatter = num => {
		let newMin = String(Math.floor(num / 60));
		let newSec = String(num % 60);
		if (newMin.length === 1) {
			newMin = "0" + newMin;
		}
		if (newSec.length === 1) {
			newSec = "0" + newSec;
		}
		return `${newMin}:${newSec}`;
	};
	updateClock = () => {
		const timeNow = this.state.displayTime;
		const min = parseInt(timeNow.slice(0, 2));
		const sec = parseInt(timeNow.slice(3));
		let totalSec = min * 60 + sec;
		totalSec--;
		const newTime = this.displayTimeFormatter(totalSec);
		if (this.state.displayTime === "00:00") {
			clearInterval(this.state.timer);
			this.setState({ alarmSound: true });
			this.resetAlarmState();

			if (!this.state.isBreakTime) {
				let breakSwitch = this.displayTimeFormatter(this.state.breakTime * 60);
				this.setState({
					displayTime: breakSwitch,
					isBreakTime: !this.state.isBreakTime,
					isRunning: !this.state.isRunning
				});
				this.runningTimer();
			} else {
				let focusSwitch = this.displayTimeFormatter(this.state.focusTime * 60);
				this.setState({
					displayTime: focusSwitch,
					isBreakTime: !this.state.isBreakTime,
					isRunning: !this.state.isRunning
				});
				this.runningTimer();
			}
		} else {
			this.setState({
				displayTime: newTime
			});
		}
	};
	runningTimer = () => {
		const running = !this.state.isRunning;
		this.setState({ isRunning: running });
		if (running) {
			let timer = setInterval(() => this.updateClock(), 1000);
			this.setState({ timer: timer });
		} else {
			clearInterval(this.state.timer);
		}
	};
	resetTimer = () => {
		clearInterval(this.state.timer);
		this.setState({ ...INITIAL_STATE });
	};
	resetAlarmState = () => {
		if (this.state.alarmSound) {
			setInterval(() => {
				this.setState({ alarmSound: false });
			}, 10000);
		}
	};

	render() {
		return (
			<div
				className={
					this.state.isBreakTime ? classes.PomodoroBreak : classes.Pomodoro
				}
			>
				<header>Pomodoro Clock</header>
				<div>
					<BreakComponent
						clicked={this.updateBreakAndFocusTime}
						breakTime={this.state.breakTime}
						breakStatus={this.state.isBreakTime}
					/>
					<FocusComponent
						clicked={this.updateBreakAndFocusTime}
						focusTime={this.state.focusTime}
					/>
				</div>
				<ClockComponent
					startTimer={this.runningTimer}
					displayTime={this.state.displayTime}
					reset={this.resetTimer}
					breakTime={this.state.isBreakTime}
				/>
				<SoundComponent alarm={this.state.alarmSound} />
				<InfoComponent
					breakStatus={this.state.isBreakTime}
					stateRunning={this.state.isRunning}
				/>
			</div>
		);
	}
}

export default Pomodoro;
