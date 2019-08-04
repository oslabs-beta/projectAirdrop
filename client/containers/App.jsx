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
    fontSize: 16,
  },
  palette: {
    primary: {
      main: '#00acc1',
      contrastText: '#fafafa',
    },
    secondary: {
      main: '#ff7043',
      contrastText: '#fafafa',
    },
  },
  status: {
    danger: 'red',
  },
});

const mapStateToProps = store => ({
  login: store.userData.login,
});

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

     <React.Fragment>
        <MuiThemeProvider theme={theme}>
         <CssBaseline>
            <AppBar/>
           <Container maxWidth={'md'}>
             <Switch>
               <Route
                 path='/login'
                 component={Login}
               />
               <Authentication>
                 <Route
                   path='/main'
                   component={Main}
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
