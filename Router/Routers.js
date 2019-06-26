import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history';
import Login from '../Container/Login';

class Routers extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
       <Route exact path="/" component={Login} />
      </Router>
    );
  }
}

export default Routers


