import React from 'react';
import { render } from "react-dom";
import App from './containers/App'
import { Provider } from 'react-redux';
import store from './store';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

render (
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route path='/' component={App}/>
    </Switch>  
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)