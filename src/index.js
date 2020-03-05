import { createStore } from 'redux';
import { reducer } from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Board  from './components/Board';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Board />
  </Provider>, 
  document.querySelector('#root')
);