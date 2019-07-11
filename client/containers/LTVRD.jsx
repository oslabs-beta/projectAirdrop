import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';
import LTVRDCMPT from '../components/LongTermVerbalRecallDisplayCMPT';

class LTVRD extends Component {
	constructor(props){
		super(props)
			this.state = {
				timeToDisplay: 0,
				testStarted: false,
				testDone: false,
		}
		this.displayWords = this.displayWords.bind(this);
		this.endSection = this.endSection.bind(this);
		this.startTimer = this.startTimer.bind(this);
	}
	componentDidMount(){
    console.log('hi?', this.props)
    this.props.buildVPSAnswers();
  }
	displayWords(){
		this.setState({
			timeToDisplay: 450,
			testStarted: true,
		}, this.startTimer)
	}
	startTimer(){
		this.timer = setTimeout(this.endSection, this.state.timeToDisplay)
	}
	endSection(){
		this.setState({
			testDone: true
		})
	}
	render () {
		console.log(this.props.section)
		return (
			<div>
				<LTVRDCMPT 
				testStarted={this.state.testStarted} 
				testDone={this.state.testDone} 
				changeSection={this.props.changeSection}
				words={this.props.section.words}
				displayWords={this.displayWords}
				/>
			</div>
		)
	}
}

export default LTVRD;