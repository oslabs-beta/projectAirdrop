import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographics from './UserDemographics.jsx';
import VisualProcessingSpeed from './VisualProcessingSpeed.jsx';
import WorkingMemory from './WorkingMemory.jsx';
import ImageRecognition from './ImageRecognition.jsx';
import LTVRD from './LTVRD';
import QuestionnaireCont from './QuestionnaireCont.jsx';
import LTVRR from './LTVRR';
import Instructions from '../components/Instructions.jsx';

const mapStateToProps = store => ({
  test: store.test.test,
  currentSection: store.test.currentSection,
  currentSlide: store.test.currentSlide,
  vpsAnswers: store.test.vpsAnswers,
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  changeSlide: () => dispatch(actions.changeSlide()),
  buildVPSAnswers: () => dispatch(actions.buildVPSAnswers()),
  fetchTest: () => dispatch(actions.fetchTest()),
  setDate: () => dispatch(actions.setDate()),
});

class MainTestDisplay extends Component {
  constructor(props){
    super(props);
    this.changeSection = this.props.changeSection.bind(this);
    this.buildVPSAnswers = this.props.buildVPSAnswers.bind(this);
  }

  componentDidMount() {
    console.log('USER TEST DISPLAY COMPONENT DID MOUNT');
    this.props.fetchTest();
  }

  render () {
    console.log('THIS PROPS TEST 0', this.props.test[0]);
    const compArray = [<UserDemographics changeSection={this.changeSection}/>,
      <LTVRD changeSection={this.changeSection} buildVPSAnswers={this.buildVPSAnswers} section={this.props.test[1]}/>,
      <VisualProcessingSpeed changeSection={this.changeSection} vpsAnswers={this.props.vpsAnswers} section={this.props.test[6]}/>,
      <WorkingMemory WM={this.props.test[2]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <ImageRecognition IR={this.props.test[0]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <LTVRR changeSection={this.props.changeSection} section={this.props.test[1]} />,
      <QuestionnaireCont changeSection={this.changeSection} test={this.props.test}/>,
      <Instructions />];

    // for (let i = 0; i < compArray.length; i++) {
    //   if (i % 2 === 1) compArray.splice(i, 0, <SectionEndScreen changeSection={this.changeSection}/>)
    // }

    return (
      <div>
         {this.props.test.length > 0 && compArray[this.props.currentSection]}
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);
