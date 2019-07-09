import React, {Component} from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';


import Header from './../components/Header.jsx';
import MainTestDisplay from "./MainTestDisplay.jsx"
import UserDemographics from "./UserDemographics.jsx"
import Login from './Login.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div>
     
        <Header />
        <h1> Hello World (react) </h1>
        <UserDemographics />
     </div>
    )
  }

}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);