import React, { Component } from 'react';
import LTVRDCMPT from '../components/LongTermVerbalRecallDisplayCMPT';

class LTVRD extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timeToDisplay: 0,
			testStarted: false,
			testDone: false,
		};
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
			timeToDisplay: 50000,
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
				instructions={this.props.section.instructions}
				sectionName={this.props.section.section_display_name}
				/>
			</div>
		)
	}
}

export default LTVRD;
