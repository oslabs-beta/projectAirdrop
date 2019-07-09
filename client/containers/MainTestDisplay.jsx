import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import LongTermVerbalRecall from '../components/LongTermVerbalRecallCMPT.jsx';
import VisualProcessingSpeed from '../components/VisualProcessingSpeedCMPT.jsx';
import WorkingMemory from '../components/WorkingMemoryCMPT.jsx';
import ImageRecognition from '../components/ImageRecognitionCMPT.jsx';
import Questionnaires from '../components/QuestionnairesCMPT.jsx';



const mapStateToProps = store => ({
//test 
//question
//answer
//input
});

const mapDispatchToProps = dispatch => ({
//fetch tests except LTVR
//next
//submit
//post test
});

class MainTestDisplay extends Component {

  render () {
    return (
      <div>

      </div>
    );
  }
}
export default MainTestDisplay;
// export default connect(mapStateToProps, mapDispatchToProps)(MainTestDisplay);