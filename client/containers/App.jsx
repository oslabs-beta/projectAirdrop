import React, {Component} from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './../components/Header.jsx';
import Authentication from './../components/Authentication.jsx';
import Main from "./Main.jsx"
import UserDemographics from "./Demographics.jsx"
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
              <Route path='/main' component={Main}/> 
            </Authentication>
        </Switch>
     </div>
    )
  }
}

//export default App;
export default connect(mapStateToProps)(App);
