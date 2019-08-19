import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";
import VisualProcessingSpeedCMPT from "../components/VisualProcessingSpeedCMPT.jsx";
import Button from "@material-ui/core/Button";
import LTVRDCMPT from "../components/LongTermVerbalRecallDisplayCMPT";
import WorkingMemoryCMPT from "../components/WorkingMemoryCMPT";

const mapStateToProps = store => ({
  aid: store.answers.aid,
  answerKey: store.test.answerKey
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) =>
    dispatch(actions.postAnswers(sectionId, assessment)),
  postVPS: data => dispatch(actions.vpsResponses(data))
});

class VPS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeToNext: 0,
      timeRun: 0,
      currentElementIndex: 0,
      currentSeriesIndex: 0,
      timerRunning: false,
      practiceDone: false,
      testStarted: false,
      middleStop: false,
      seenPracticeAnswers: false,
      displayingAnswers: false,
      answerArray: [],
      currentChoice: null,
      sectionId: "VPS",
      submitted: false,
      isChecked: false,
      submitError: "",
      disabled: false
    };
    this.submitAnswer = this.submitAnswer.bind(this);
    this.startNewSeries = this.startNewSeries.bind(this);
    this.startPractice = this.startPractice.bind(this);
    this.seriesIncrementer = this.seriesIncrementer.bind(this);
    this.updateChoice = this.updateChoice.bind(this);
    this.displayAnswers = this.displayAnswers.bind(this);
  }

  componentWillUnmount() {
    const vpsAnswers = this.state.answerArray.reduce((a, b, i) => {
      const response = {
        aid: this.props.aid,
        seriesIndex: i + 1,
        userChoice: b.answer,
        timeTaken: b.timeToRespond,
        correctAnswer: this.props.answerKey[i]
      };
      a.push(response);
      return a;
    }, []);

    this.props.postAnswers(this.state.sectionId, vpsAnswers);

		this.props.postAnswers(this.state.sectionId, vpsAnswers);


		const vpsResponses = this.state.answerArray.reduce((a,b,c,d) => {
			// const vpsResponses = this.state.answerArray.reduce((a,b,i) => {
			// 	const response = {
			// 		'seriesIndex': i + 1,
			// 		'userChoice': b.answer,
			// 		'timeTaken': b.timeToRespond,
			// 		'correctAnswer': this.props.answerKey[i],
			// 	}
			// 	a.push(response);
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
			// Checks if we are at the end of the current set of elements to be displayed
			if(this.state.currentElementIndex === this.props.vpsAnswers[0][this.state.currentSeriesIndex].length){
				clearInterval(this.seriesTicker);
				if(this.state.displayingAnswers){
					//Auto-submit feature. 1st condition checks that the user hasn't done a manual submit. 2nd condition makes sure it isn't auto-submitting the practice question
					if(!this.state.answerArray[this.state.currentSeriesIndex - 1] && this.state.practiceDone){
						this.setState({
							answerArray: [...this.state.answerArray, {
								answer: this.state.currentChoice,
								timeToRespond: this.state.timeRun,
							}]
						})
					}
					//Sets practiceDone to true after the practice series finishes
					if(!this.state.practiceDone) {
						this.setState({
							practiceDone: true
						})
					}
					//Resets state for the next series
					// if(this.state.seenPracticeAnswers){
						this.setState({
							displayingAnswers: false,
							middleStop: false,
							currentElementIndex: 0,
							currentSeriesIndex: this.state.currentSeriesIndex += 1,
							timerRunning: false,
							timeRun: 0,
							submitted: false,
							currentChoice: null,
							isChecked: false,
							submitError: '',
							disabled: false
						})
					// } else {
					// 	this.setState({
					// 		seenPracticeAnswers: true
					// 	}, () => setTimeout)
					// }
				}
				//Controls when we display answers
				if(this.state.timerRunning){
					this.setState({
						middleStop: true,
						timeToNext: 0,
					})
				}
			}
		} else {
			this.setState({
				timeRun: this.state.timeRun += 100
			})
		}
	}
	submitAnswer(answerChoice){
		if(this.state.practiceDone && this.state.isChecked){
			this.setState({
				answerArray: [...this.state.answerArray, {
					answer: answerChoice,
					timeToRespond: this.state.timeRun,
				}],
				// currentChoice: null,
				submitted: true,
				submitError: '',
				disabled: true
				// timeRun: this.state.timeToNext
			});
		}
		if (!this.state.practiceDone && this.state.isChecked) {
			this.setState({
				submitted: true,
				submitError: '',
				disabled: true
			});
		}
		if (!this.state.isChecked) {
			this.setState({
				submitError: 'Please select an answer before submitting.'
			})
		}
	}
	updateChoice(e){
		this.setState({
			currentChoice: e.target.value,
			isChecked: true
		})
	}
	displayAnswers(){
		this.setState({
			timeToNext: 10000,
			timerRunning: true,
			middleStop: false,
			displayingAnswers: true,
		}, this.setAndNameInterval)
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
				changeSection={this.props.changeSection}
				instructions={this.props.section.instructions}
				submitAnswer={this.submitAnswer}
				currentChoice={this.state.currentChoice}
				updateChoice={this.updateChoice}
				displayAnswers={this.displayAnswers}
				middleStop={this.state.middleStop}
				sectionName={this.props.section.section_display_name}
				submitted={this.state.submitted}
				radioSubmitStatus={this.state.radioSubmitStatus}
				submitError={this.state.submitError}
				disabled={this.state.disabled}
				/>
			</div>
		)
	}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VPS);
