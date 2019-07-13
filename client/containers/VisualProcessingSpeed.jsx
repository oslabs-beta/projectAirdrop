import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import VisualProcessingSpeedCMPT from '../components/VisualProcessingSpeedCMPT.jsx';


class VisualProcessingSpeed extends Component {
	constructor(props){
    super(props);
    this.state = {
			timeToNext: 0,
			currentElementIndex: 0,
			currentSeriesIndex: 0,
			timerRunning: false,
			practiceDone: false,
			testStarted: false,
			displayingAnswers: false,
		};

		this.startNewSeries = this.startNewSeries.bind(this);
		this.startPractice = this.startPractice.bind(this);
		this.seriesIncrementer = this.seriesIncrementer.bind(this);

	}
	startNewSeries() {
		this.setState({
			timeToNext: 4500 - (this.state.currentSeriesIndex*500),
			timerRunning: true,
		}, this.intervalSetter)
	}
	startPractice(){
		this.setState({
			timeToNext: 2000,
			timerRunning: true,
			practiceDone: true,
			testStarted: true,
		}, this.intervalSetter)
	}
	intervalSetter(){
		console.log(this.state);
		this.seriesTicker = setInterval(this.seriesIncrementer, this.state.timeToNext);
	}
	seriesIncrementer() {
		if(!this.state.displayingAnswers){
			this.setState({
				currentElementIndex: ++this.state.currentElementIndex,
			})
		}
		if(this.state.currentElementIndex === this.props.vpsAnswers[0][this.state.currentSeriesIndex].length){
			clearInterval(this.seriesTicker);
				if(this.state.displayingAnswers){
					console.log('clear answers')
					this.setState({
						displayingAnswers: false,
						currentElementIndex: 0,
						currentSeriesIndex: this.state.currentSeriesIndex +=3,
						timerRunning: false,
					})
				}
				if(this.state.timerRunning){
					this.setState({
						displayingAnswers: true,
						timeToNext: 10000,
					}, this.intervalSetter)
				}
		}
	}
	render () {
		return (
			<div>
				<VisualProcessingSpeedCMPT
				timerRunning={this.state.timerRunning}
				startNewSeries={this.startNewSeries}
				startPractice={this.startPractice}
				currentElementIndex={this.state.currentElementIndex}
				currentSeriesIndex={this.state.currentSeriesIndex}
				vpsAnswers={this.props.vpsAnswers}
				practiceDone={this.state.practiceDone}
				testStarted={this.state.testStarted}
				displayingAnswers={this.state.displayingAnswers}
				changeSection={this.props.changeSection}
				instructions={this.props.section.instructions}
				/>
			</div>
		)
	}
}
export default VisualProcessingSpeed;
