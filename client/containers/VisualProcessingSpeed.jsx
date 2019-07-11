import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import VisualProcessingSpeedCMPT from '../components/VisualProcessingSpeedCMPT.jsx';


class VisualProcessingSpeed extends Component {
	constructor(props){
    super(props)
    this.state = {
			timeToNext: 0,
			currentElementIndex: 0,
			currentSeriesIndex: 0,
			timerRunning: false,
			seriesOver: false,
			practiceRun: true,
		}
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
			practiceRun: true,
		}, this.intervalSetter)
	}
	intervalSetter(){
		this.seriesTicker = setInterval(this.seriesIncrementer, this.state.timeToNext);
	}
	seriesIncrementer() {
		this.setState({
			currentElementIndex: ++this.state.currentElementIndex,
		})
		if(this.state.currentElementIndex === this.props.vpsAnswers[0][this.state.currentSeriesIndex].length){
			clearInterval(this.seriesTicker);
			if(this.state.practiceRun){
				this.setState({
					practiceRun: false,
					timerRunning: false,
					currentSeriesIndex: 1,
					currentElementIndex: 0,
				})
			} else { 
					this.setState({
					currentSeriesIndex: ++this.state.currentSeriesIndex,
					currentElementIndex: 0,
					seriesOver: true,
					timerRunning: false
				})
			}
		} 
	}
	render () {
		return (
			<div> 
				<VisualProcessingSpeedCMPT 
				timerRunning={this.state.timerRunning} 
				seriesOver={this.state.seriesOver} 
				startNewSeries={this.startNewSeries} 
				startPractice={this.startPractice}
				currentElementIndex={this.state.currentElementIndex}
				currentSeriesIndex={this.state.currentSeriesIndex} 
				vpsAnswers={this.props.vpsAnswers}
				practiceRun={this.state.practiceRun}
				/>
			</div>
		)
	}
}
export default VisualProcessingSpeed;