import React, {Component} from 'react';
import { render } from "react-dom";
import { connect } from 'react-redux';

import Header from './../components/Header.jsx';
import Authentication from './../components/Authentication.jsx';
import MainTestDisplay from "./MainTestDisplay.jsx"
import UserDemographics from "./UserDemographics.jsx"
import Login from './Login.jsx';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

        <Header />
        {/*<h1> Hello World (react) </h1>*/}
        {/* <MainTestDisplay /> */}

        <Switch>
          <Route path='/login' component={Login} />
            <AuthenticatedComponent>
              <Route path='/main' component={MainTestDisplay}/> 
            </AuthenticatedComponent>
        </Switch>
     </div>
    )
  }
}

export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
