import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import VisualProcessingSpeedCMPT from '../components/VisualProcessingSpeedCMPT.jsx';
import Button from "@material-ui/core/Button";
import LTVRDCMPT from "../components/LongTermVerbalRecallDisplayCMPT";


const mapStateToProps = store => ({
	aid: store.answers.aid,
	answerKey: store.test.answerKey,
});


const mapDispatchToProps = dispatch => ({
	postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
	postVPS: (data) => dispatch(actions.vpsResponses(data)),
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
			submitted: false,
			// radioSubmitStatus: []
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
				'aid': this.props.aid,
				'seriesIndex': i + 1,
				'userChoice': b.answer,
				'timeTaken': b.timeToRespond
			};
			console.log('testing response', response);
			a.push(response);
			return a
		}, []);
		console.log('VPS assesment ', vpsAnswers);
		console.log('VPS SECTIONID ', this.state.sectionId);


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
			timeToNext: 2000,
			timerRunning: true,
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
				console.log(this.state.answerArray, "before")
			}
			if(this.state.currentElementIndex === this.props.vpsAnswers[0][this.state.currentSeriesIndex].length){
				clearInterval(this.seriesTicker);
				if(this.state.displayingAnswers){
					if(!this.state.answerArray[this.state.currentSeriesIndex - 1] && this.state.practiceDone){
						this.setState({
							answerArray: [...this.state.answerArray, {
								answer: this.state.currentChoice,
								timeToRespond: this.state.timeRun
							}]
						})
					}
					if(!this.state.practiceDone) {
						this.setState({
							practiceDone: true
						})
					}
					this.setState({
						displayingAnswers: false,
						swappedColumns: false,
						currentElementIndex: 0,
						currentSeriesIndex: this.state.currentSeriesIndex += 1,
						timerRunning: false,
						timeRun: 0,
						submitted: false,
						currentChoice: null
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
		if(this.state.practiceDone){
			this.setState({
				answerArray: [...this.state.answerArray, {
					answer: answerChoice,
					timeToRespond: this.state.timeRun,
				}],
				// currentChoice: null,
				submitted: true
				// timeRun: this.state.timeToNext
			});
		}
		console.log(this.state.answerArray)
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
				answerKey={this.props.answerKey}
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
				submitted={this.state.submitted}
				radioSubmitStatus={this.state.radioSubmitStatus}
				/>
			</div>
		)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(VPS)
