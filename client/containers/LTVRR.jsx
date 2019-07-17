import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import LTVRRCMPT from '../components/LongTermVerbalRecallResponseCMPT';

const mapStateToProps = (store) => ({
  words: store.test.test[0].words
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment))
});

class LTVRR extends Component {
	constructor(props){
    super(props);
    this.state = {
            timeLeft: 120000,
            testStarted: false,
            testDone: false,
            answerArray: [],
            currentAnswer: '',
            sectionId: 'LTVR'
		};

		this.startTimer = this.startTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.earlyFinish = this.earlyFinish.bind(this);
	}

	componentWillUnmount() {

	  const wordArr = this.props.words.map(wordObject => wordObject['word']);

    const assessment = {
      'aid': 1,
      'wordArr': wordArr,
      'respArr': this.state.answerArray
    };
	  this.props.postAnswers(this.state.sectionId, assessment)
  };

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
export default connect(mapStateToProps, mapDispatchToProps)(LTVRR)
