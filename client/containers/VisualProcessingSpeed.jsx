import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import VisualProcessingSpeedCMPT from '../components/VisualProcessingSpeedCMPT.jsx';


class VisualProcessingSpeed extends Component {
	constructor(props){
    super(props);
    this.state = {
			timeToNext: 0,
			timeRun: 0,
			currentElementIndex: 0,
			currentSeriesIndex: 0,
			timerRunning: false,
			practiceDone: false,
			testStarted: false,
			displayingAnswers: false,
			answerArray: [],
		};
		this.submitAnswer = this.submitAnswer.bind(this);
		this.startNewSeries = this.startNewSeries.bind(this);
		this.startPractice = this.startPractice.bind(this);
		this.seriesIncrementer = this.seriesIncrementer.bind(this);

	}
	startNewSeries() {
		this.setState({
			timeToNext: 4500 - (this.state.currentSeriesIndex*500),
			timerRunning: true,
		}, this.setAndNameInterval)
	}
	startPractice(){
		this.setState({
			timeToNext: 2000,
			timerRunning: true,
			practiceDone: true,
			testStarted: true,
		}, this.setAndNameInterval)
	}
	setAndNameInterval(){
		console.log(this.state);
		this.seriesTicker = setInterval(this.seriesIncrementer, 100);
	}
	seriesIncrementer() {
		if(this.state.timeToNext === this.state.timeRun){
			if(!this.state.displayingAnswers){
				this.setState({
					currentElementIndex: ++this.state.currentElementIndex,		
					timeRun: 0
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
							timeRun: 0
						})
					}
					if(this.state.timerRunning){
						this.setState({
							displayingAnswers: true,
							timeToNext: 10000,
						}, this.setAndNameInterval)
					}
			}
		} else {
			this.setState({
				timeRun: this.state.timeRun += 100
			})
		}
	}
	submitAnswer(answerChoice){
		console.log(this.state.answerArray)
		this.setState({
			answerArray: [...this.state.answerArray, {
				answer: answerChoice,
				timeToRespond: this.state.timeRun
			}],
		});
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
				submitAnswer={this.submitAnswer}
				/>
			</div>
		)
	}
}
export default VisualProcessingSpeed;
