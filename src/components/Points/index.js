import { Component } from 'react';
import { connect } from 'react-redux';

class Points extends Component {
  constructor() {
    super();
  }
  
  render() {
    return(
      this.props.points
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