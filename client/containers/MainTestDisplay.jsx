import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import UserDemographics from './UserDemographics.jsx';
import LongTermVerbalRecallDisplayCMPT from './LTVRD';
import LongTermVerbalRecallResponseCMPT from '../components/LongTermVerbalRecallResponseCMPT.jsx'
import VisualProcessingSpeed from './VisualProcessingSpeed.jsx';
import WorkingMemory from '../components/WorkingMemoryCMPT.jsx';
import ImageRecognition from '../components/ImageRecognitionCMPT.jsx';
// import Questionnaires from '../components/QuestionnairesCMPT.jsx';
import SectionEndScreen from '../components/SectionEndScreen.jsx';
import LTVRD from './LTVRD';
import QuestionnaireCont from './../containers/QuestionnaireCont.jsx';



const mapStateToProps = store => ({
//test
userData: store.userData.userData,
test: store.test.test,
currentSection: store.test.currentSection,
vpsAnswers: store.test.vpsAnswers,
//question
//answer
//input
//currentSlide
});

const mapDispatchToProps = dispatch => ({
  changeSection: () => dispatch(actions.changeSection()),
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
    super(props)
    this.changeSection = this.props.changeSection.bind(this);
    this.buildVPSAnswers = this.props.buildVPSAnswers.bind(this);
  }

  componentDidMount() {
    this.props.fetchTest();
  }
  

  render () {
    console.log(this.props.test)
    const compArray = [<UserDemographics changeSection={this.changeSection}/>, 
    <LTVRD changeSection={this.changeSection} buildVPSAnswers={this.buildVPSAnswers} section={this.props.test[0]}/>, 
    <VisualProcessingSpeed changeSection={this.changeSection} vpsAnswers={this.props.vpsAnswers}/>, 
    <WorkingMemory changeSection={this.changeSection}/>, 
    <ImageRecognition changeSection={this.changeSection}/>, 
    <LongTermVerbalRecallResponseCMPT changeSection={this.changeSection}/>,
    <QuestionnaireCont test={this.props.test}/>]
    for(let i = 0; i < compArray.length; i++){
      if(i%2 === 1) compArray.splice(i, 0, <SectionEndScreen changeSection={this.changeSection}/>)
    }
    // if(this.props.test[0]) dummyStandIn = this.props.test[0];
    // console.log('rendering Main Test')
    // console.log('test', this.props.test);
    return (
      <div>
        {compArray[this.props.currentSection]}
      </div>
    );
  }
}
// export default MainTestDisplay;
export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);