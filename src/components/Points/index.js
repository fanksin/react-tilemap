import React, { Component } from 'react';
import { connect } from 'react-redux';

class Points extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      <span className='points'>{this.props.points}</span>
    );
  }
}

/**
 * Redux state to props
 * @param {Object} state 
 */
const mapStateToProps = (state) => {
  return {
    points: state.points,
  };
};

export default connect(mapStateToProps)(Points);