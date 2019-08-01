import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom'

import Authentication from './../components/Authentication.jsx';
import Main from "./Main.jsx"
import Login from './Login.jsx';
import AppBar from '../components/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";
import Container from '@material-ui/core/Container';

const theme = createMuiTheme({
  typography: {
    fontSize: 20
  },
  palette: {
    primary: {
      light: '#ffffff',
      main: '#fafafa',
      dark: '#c7c7c7',
      background: '#ffffff',
    }
  },
  status: {
    danger: 'orange',
  },
});

const mapStateToProps = store => ({
  login: store.userData.login,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userStatus: 'Logging In',
    };
    this.createAccount = this.createAccount.bind(this);
    this.loggingIn = this.loggingIn.bind(this);
    this.loggedIn = this.loggedIn.bind(this);
    this.loggedOut = this.loggedOut.bind(this);
  }

  createAccount() {
    this.setState({
      userStatus: 'Create Account'
    })
  }

  loggingIn() {
    this.setState({
      userStatus: 'Logging In'
    })
  }

  loggedIn() {
    this.setState({
      userStatus: 'Logged In'
    })
  }

  loggedOut() {
    this.setState({
      userStatus: 'Logging In'
    })
  }

  render() {

    return (

     <React.Fragment>
        <MuiThemeProvider theme={theme}>
         <CssBaseline>
            <AppBar
              userStatus={this.state.userStatus}
              createAccount={this.createAccount}
              loggingIn={this.loggingIn}
            />
           <Container maxWidth={'md'}>
             <Switch>
               <Route
                 path='/login'
                 render={(props) => <Login {...props} userStatus={this.state.userStatus}/>}
               />
               <Authentication>
                 <Route
                   path='/main'
                   render={(props) => <Main {...props} loggedOut={this.loggedOut} loggedIn={this.loggedIn}/>}
                   />
               </Authentication>
             </Switch>
           </Container>
          </CssBaseline>
        </MuiThemeProvider>
      </React.Fragment>
    )
  }
}

export default connect(mapStateToProps)(App);
