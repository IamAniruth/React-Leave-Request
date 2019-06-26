import React, { Component } from 'react';
import {Router, Route} from 'react-router';
import { createBrowserHistory } from 'history';
import Login from '../Container/Login';
import AdminDashboard from '../Container/Admin/Dashboard'
import UserDashboard from '../Container/User/Dashboard'

class Routers extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Router history={createBrowserHistory()}>
       <Route exact path="/" component={Login} />
        <Route exact path="/AdminDashboard" component={AdminDashboard} />
         <Route exact path="/UserDashboard" component={UserDashboard} />
      </Router>
    );
  }
}

export default Routers


