import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import Routers from './Router/Routers'

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
       
        <p>
         <Routers />
        </p>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
