import config from './config';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Board from './components/Board';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    document.title = config.title;
  }

  incrementPoints() {
    // this.setState({
    //   points: this.state.points + 1
    // });
    // console.log(this.state.points);
  }

  render() {
    return(
      <Board height={ 8 } width={ 12 } />
    );
  }
}

ReactDOM.render(<App />, document.querySelector('body'));