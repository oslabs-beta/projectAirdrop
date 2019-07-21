import React, {Component} from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './../components/Header.jsx';
import Authentication from './../components/Authentication.jsx';
import MainDisplay from "./MainDisplay.jsx"
import UserDemographics from "./UserDemographics.jsx"
import Login from './Login.jsx';

const mapStateToProps = store => ({
  login: store.userData.login
});

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
            <Authentication>
              <Route path='/main' component={MainDisplay}/> 
            </Authentication>
        </Switch>
     </div>
    )
  }
}

//export default App;
export default connect(mapStateToProps)(App);
