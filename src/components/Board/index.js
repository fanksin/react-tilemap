import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Tile from '../Tile';
import Points from '../Points';
import './index.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.width = this.props.width;
    this.height = this.props.height;
    this.ref = React.createRef();
    this.reset = this.reset.bind(this);
  }

  /**
   * Set the document node for the Board to 100% opacity when loaded
   */
  componentDidMount() {
    const element = this.ref.current;
    element.style.opacity = 1;
  }

  /**
   * Loop through the tile map two dimensional array and render one Tile component per entry
   */
  generateTileMarkup() {
    const tileMap = this.props.tileMap;
    const tileMarkup = tileMap.map((row, rowIndex) => {
      return (
        <div key={rowIndex} className={'tiles'}>
          {
            row.map((column, columnIndex) => {
              return (
                <Tile 
                  key={ columnIndex } 
                  zIndex={ row.length - columnIndex }
                />
              );
            })
          }
        </div>
      );
    });

    return tileMarkup;
  }

  /**
   * Reset the entire board & points
   */
  reset() {
    this.props.dispatch({type: 'RESET_POINTS'});
    this.props.dispatch({type: 'REFRESH_BOARD'});
  }

  render() {
    return (
      <Fragment>
        <div className='board' ref={this.ref}>
          { this.generateTileMarkup() }
        </div>
        <div className='debug-menu'>
          <h2>Debug Menu</h2>
          <div><strong>Points</strong>: <Points /></div>
          <button onClick={ this.reset }>Reset</button>
        </div>
      </Fragment>
    );
  }
}

/**
 * Redux state to props
 * @param {Object} state 
 */
const mapStateToProps = (state) => {
  return {
    tileMap: state.tileMap,
  };
};

export default connect(mapStateToProps)(Board);