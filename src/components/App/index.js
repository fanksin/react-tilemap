import React, { Component } from 'react';
import config from '../../config';
import Board from '../Board';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  componentDidMount() {
    document.title = config.title;
  }

  render() {
    return(
      <Board height={ 8 } width={ 12 } />
    );
  }
}