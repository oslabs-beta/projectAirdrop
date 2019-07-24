import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import LTVRRCMPT from '../components/LongTermVerbalRecallResponseCMPT';
import SectionHeader from "../components/SectionHeader";

const mapStateToProps = (store) => ({
  words: store.test.test[6].words,
  aid: store.answers.aid,
});

const mapDispatchToProps = dispatch => ({
  postAnswers: (sectionId, assessment) => dispatch(actions.postAnswers(sectionId, assessment)),
  postLTVRR: data => dispatch(actions.ltvrResponses(data)),
});

class LTVRR extends Component {
	constructor(props){
    super(props);
    this.state = {
      timeLeft: 10000,
      testStarted: false,
      testDone: false,
      answerArray: [],
      currentAnswer: '',
      sectionId: 'LTVR',
      answerTimeArray: []
    };

		this.startTimer = this.startTimer.bind(this);
        this.tick = this.tick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.submitAnswer = this.submitAnswer.bind(this);
        this.earlyFinish = this.earlyFinish.bind(this);
	}

	componentWillUnmount() {

	  const wordArr = this.props.words.map(wordObject => wordObject['word']);

	  const realTimeTaken = [];
	  let currentTime = 120000;
	  for (let i = 0; i < this.state.answerTimeArray.length; i += 1) {
	    const timeTaken = currentTime - this.state.answerTimeArray[i];
	    realTimeTaken.push(timeTaken);
      currentTime -= timeTaken
    }

	  const respArr = [];
	  for (let i = 0; i < realTimeTaken.length; i += 1) {
	    respArr.push({
        word: this.state.answerArray[i],
        timeTaken: realTimeTaken[i]
      })
    }

    const assessment = {
      'aid': this.props.aid,
      'wordArr': wordArr,
      'respArr': respArr,
    };
    console.log('ltvrr', assessment)

    this.props.postAnswers(this.state.sectionId, assessment);
    // const ltvrrAnswers = this.state.answerArray
    this.props.postLTVRR(this.state.answerArray);
  };

	startTimer() {
		this.setState({
			testStarted: true,
		}, () => {
            // console.log(this.state);
		    this.timer = setInterval(this.tick, 100);
        })
    }

    submitAnswer () {
        this.setState({
          answerArray: [...this.state.answerArray, this.state.currentAnswer],
          answerTimeArray: [...this.state.answerTimeArray, this.state.timeLeft]
        })
    }

    handleChange (e) {
        this.setState({
            currentAnswer: e.target.value
        })
    }

	tick() {
		this.setState({
            timeLeft: this.state.timeLeft - 100
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
	  console.log('LTVRR ANSWER TIME ARRAY', this.state.answerTimeArray);
		return (
			<div>
        <SectionHeader sectionName={this.props.section.section_display_name}/>
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
