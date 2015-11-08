'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Hello from './components/hello.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      name: 'Ahmet'
    }
  }

  render() {
    return (<Hello name={this.state.name}/>)
  }
}

module.exports = App;
