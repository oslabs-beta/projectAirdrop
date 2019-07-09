import React, {Component} from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';

import LongTermVerbalRecall from './Section1-LongTermVerbalRecall.jsx';
import VisualProcessingSpeed from './Section2-VisualProcessingSpeed.jsx';
import WorkingMemory from './Section3-WorkingMemory.jsx';
import ImageRecognition from './Section4-ImageRecognition.jsx';
import Questionnaires from './Section5-Questionnaires.jsx';
import UserDemographics from './UserDemographics.jsx';
import Header from './../components/Header.jsx';
import Login from './Login.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
        <Router> 
          <Route path="/demo" component={UserDemographics}/>
        </Router> 
        <Header />
        <h1> Hello World (react) </h1>
        <UserDemographics />
     </div>
    )
  }

}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);