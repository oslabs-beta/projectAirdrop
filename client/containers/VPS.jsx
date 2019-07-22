import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import VisualProcessingSpeedCMPT from '../components/VisualProcessingSpeedCMPT.jsx';
import Button from "@material-ui/core/Button";
import LTVRDCMPT from "../components/LongTermVerbalRecallDisplayCMPT";

const mapDispatchToProps = dispatch => ({
	postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
	postVPS: data => dispatch(actions.vpsResponses(data)),
});

class VPS extends Component {
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
			swappedColumns: false,
			answerArray: [],
			currentChoice: null,
			sectionId: 'VPS',
		};
		this.submitAnswer = this.submitAnswer.bind(this);
		this.startNewSeries = this.startNewSeries.bind(this);
		this.startPractice = this.startPractice.bind(this);
		this.seriesIncrementer = this.seriesIncrementer.bind(this);
		this.updateChoice = this.updateChoice.bind(this);
		this.recognizeSwap = this.recognizeSwap.bind(this);
	}

	componentWillUnmount() {
		console.log('VPS UNMOUNT ANSWER ARRAY ', this.state.answerArray);
		const vpsAnswers = this.state.answerArray.reduce((a, b, i) => {
			const response = {
				'aid': 1,
				'seriesIndex': i + 1,
				'userChoice': b.answer,
				'timeTaken': b.timeToRespond
			};
			console.log(response);
			a.push(response);
			return a
		}, []);
		this.props.postAnswers(this.state.sectionId, vpsAnswers);
		const vpsResponses = this.state.answerArray.reduce((a,b,c,d) => {
			a.push(b.answer);
			return a;
		},[])
		this.props.postVPS(vpsResponses)
	}

	startNewSeries() {
		this.setState({
			timeToNext: 4500 - (this.state.currentSeriesIndex*500),
			timerRunning: true,
		}, this.setAndNameInterval)
	}
	startPractice(){
		this.setState({
			timeToNext: 200,
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
					timeRun: 0,
				})
			}
			if(this.state.currentElementIndex === this.props.vpsAnswers[0][this.state.currentSeriesIndex].length){
				clearInterval(this.seriesTicker);
				if(this.state.displayingAnswers){
					console.log('clear answers')
					this.setState({
						displayingAnswers: false,
						swappedColumns: false,
						currentElementIndex: 0,
						currentSeriesIndex: this.state.currentSeriesIndex += 6,
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
				timeToRespond: this.state.timeRun,
			}],
			currentChoice: null,
			// timeRun: this.state.timeToNext
		});
	}
	updateChoice(e){
		// console.log('does this work?')
		this.setState({
			currentChoice: e.target.value
		}, () => console.log(this.state.currentChoice))
	}
	recognizeSwap(){
		this.setState({
			swappedColumns: true
		})
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
				swappedColumns={this.state.swappedColumns}
				recognizeSwap={this.recognizeSwap}
				changeSection={this.props.changeSection}
				instructions={this.props.section.instructions}
				submitAnswer={this.submitAnswer}
				currentChoice={this.state.currentChoice}
				updateChoice={this.updateChoice}
				sectionName={this.props.section.section_display_name}
				/>
			</div>
		)
	}
}
export default connect(null, mapDispatchToProps)(VPS)
