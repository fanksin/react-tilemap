import config from './config';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board';

class App extends Component {
  constructor() {
    super();
    this.width = 12;
    this.height = 8;
  }

  componentDidMount() {
    document.title = config.title;
  }

  render() {
    return(
      <Board height={ this.height } width={ this.width } />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('body'));