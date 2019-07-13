import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import LTVRRCMPT from '../components/LongTermVerbalRecallResponseCMPT';


class LTVRR extends Component {
	constructor(props){
    super(props);
    this.state = {
            timeLeft: 120000,
            testStarted: false,
            testDone: false,
            answerArray: [],
            currentAnswer: '',
		};

		this.startTimer = this.startTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.earlyFinish = this.earlyFinish.bind(this);
	}
	startTimer() {
		this.setState({
			testStarted: true,
		}, () => {
            // console.log(this.state);
		    this.timer = setInterval(this.tick, 1000);
        })
    }
    submitAnswer () {
        this.setState({
            answerArray: [...this.state.answerArray, this.state.currentAnswer]
        })
    }
    handleChange (e) {
        this.setState({
            currentAnswer: e.target.value
        })
    }
	tick() {
		this.setState({
            timeLeft: this.state.timeLeft - 1000
        }, () => {
            if(this.state.timeLeft === 0){
                clearInterval(this.timer);
                this.setState({
                    testDone: true
                })
            }
        })
    }

    earlyFinish() {
        clearInterval(this.timer);
        this.setState({
            testDone: true,
        });
    }

	render () {
		return (
			<div>
				<LTVRRCMPT
                timeLeft={this.state.timeLeft}
                testStarted={this.state.testStarted}
                testDone={this.state.testDone}
                startTimer={this.startTimer}
                changeSection={this.props.changeSection}
                instructions={this.props.section.instructions}
                answerArray={this.state.answerArray}
                handleChange={this.handleChange}
                submitAnswer={this.submitAnswer}
                earlyFinish={this.earlyFinish}
				/>
			</div>
		)
	}
}
export default LTVRR;
