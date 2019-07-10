import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import LongTermVerbalRecallDisplayCMPT from '../components/LongTermVerbalRecallDisplayCMPT.jsx';
import LongTermVerbalRecallResponseCMPT from '../components/LongTermVerbalRecallResponseCMPT.jsx'
import VisualProcessingSpeed from '../components/VisualProcessingSpeedCMPT.jsx';
import WorkingMemory from '../components/WorkingMemoryCMPT.jsx';
import ImageRecognition from '../components/ImageRecognitionCMPT.jsx';
import Questionnaires from '../components/QuestionnairesCMPT.jsx';
import SectionEndScreen from '../components/SectionEndScreen.jsx';



const mapStateToProps = store => ({
//test
  test: store.test.test,
  currentSection: store.test.currentSection,
  currentSlide: store.test.currentSlide,
//question
//answer
//input
//currentSlide
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
  changeSlide: () => dispatch(actions.changeSlide()),
  fetchTest: () => dispatch(actions.fetchTest()),

//fetch tests except LTVR
//next
//submit
//update input
//post section
});

class MainTestDisplay extends Component {
  constructor(props){
    super(props)
    this.changeSection = this.props.changeSection.bind(this);
  }


  render () {
    console.log(this.props.test)
    const compArray = [<LongTermVerbalRecallDisplayCMPT changeSection={this.changeSection}/>, <VisualProcessingSpeed />, <WorkingMemory />,
       <ImageRecognition IR={this.props.test[3]} currentSlide={this.props.currentSlide} changeSlide={this.props.changeSlide} />, <LongTermVerbalRecallResponseCMPT />]
    // if(this.props.test[0]) dummyStandIn = this.props.test[0];
    // console.log('rendering Main Test')
    console.log(this.props.currentSection, 'currentSection');
    return (
      <div>
        {this.props.test.length > 0 && compArray[this.props.currentSection]}
      </div>
    );
  }
}
// export default MainTestDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);
