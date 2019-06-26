import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Routers from './Router/Routers';
import {Provider} from 'react-redux';
import {store} from './Store/Store'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Provider store={store}>
         <Routers />
      </Provider>
       
    );
  }
}

render(<App />, document.getElementById('root'));
