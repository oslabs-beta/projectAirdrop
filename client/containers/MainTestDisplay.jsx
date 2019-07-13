import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographics from './UserDemographics.jsx';
import LongTermVerbalRecallDisplayCMPT from './LTVRD';
import LongTermVerbalRecallResponseCMPT from '../components/LongTermVerbalRecallResponseCMPT.jsx'
import VisualProcessingSpeed from './VisualProcessingSpeed.jsx';
import WorkingMemory from './WorkingMemory.jsx';
import ImageRecognition from './ImageRecognition.jsx';
import Questionnaires from '../components/QuestionnairesCMPT.jsx';
import SectionEndScreen from '../components/SectionEndScreen.jsx';
import LTVRD from './LTVRD';
import QuestionnaireCont from './../containers/QuestionnaireCont.jsx';

const mapStateToProps = store => ({
//test
  test: store.test.test,
  currentSection: store.test.currentSection,
  currentSlide: store.test.currentSlide,
  vpsAnswers: store.test.vpsAnswers,
//question
//answer
//input
//currentSlide
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  changeSlide: () => dispatch(actions.changeSlide()),
  buildVPSAnswers: () => dispatch(actions.buildVPSAnswers()),
  fetchTest: () => dispatch(actions.fetchTest()),
  setDate: () => dispatch(actions.setDate()),
//fetch tests except LTVR
//next
//submit
//update input
//post section
});

class MainTestDisplay extends Component {
  constructor(props){
    super(props);
    this.changeSection = this.props.changeSection.bind(this);
    this.buildVPSAnswers = this.props.buildVPSAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchTest();
  }

  render () {
    console.log(this.props.test[1]);
    const compArray = [<UserDemographics changeSection={this.changeSection}/>,
      <LTVRD changeSection={this.changeSection} buildVPSAnswers={this.buildVPSAnswers} section={this.props.test[0]}/>,
      <VisualProcessingSpeed changeSection={this.changeSection} vpsAnswers={this.props.vpsAnswers} section={this.props.test[1]}/>,
      <WorkingMemory WM={this.props.test[5]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <ImageRecognition IR={this.props.test[6]} changeSlide={this.props.changeSlide} currentSlide={this.props.currentSlide} changeSection={this.changeSection}/>,
      <QuestionnaireCont test={this.props.test}/>];

    //      <LongTermVerbalRecallResponseCMPT changeSection={this.changeSection}/>,

    for(let i = 0; i < compArray.length; i++){
      if(i%2 === 1) compArray.splice(i, 0, <SectionEndScreen changeSection={this.changeSection}/>)
    }

    // if(this.props.test[0]) dummyStandIn = this.props.test[0];
    // console.log('rendering Main Test')
    // console.log('test', this.props.test);

    return (
      <div>
        {this.props.test.length > 0 && compArray[this.props.currentSection]}
      </div>
    );
  }
}
// export default MainTestDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);
