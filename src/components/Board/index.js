import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { RESET_POINTS, RESET_BOARD, UPDATE_BOARD_SIZE } from '../../reducers/actions';
import Tile from '../Tile';
import Points from '../Points';
import './index.scss';

class Board extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.reset = this.reset.bind(this);
    this.updateBoardSize = this.updateBoardSize.bind(this);
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
    this.props.dispatch(RESET_POINTS);
    this.props.dispatch(RESET_BOARD);
  }

  /**
   * Update board size using input values
   */
  updateBoardSize(event) {
    if(event.target.value.length && event.target.value > 0) {
      const rows = event.target.id === 'rows' ? parseInt(event.target.value) : this.props.rows;
      console.log(rows);
      const columns = event.target.id === 'columns' ? parseInt(event.target.value) : this.props.columns;
      this.props.dispatch(RESET_POINTS);
      this.props.dispatch({...UPDATE_BOARD_SIZE, rows: rows, columns: columns});
    }
  }

  render() {
    return (
      <Fragment>
        <div className='board' ref={this.ref}>
          { this.generateTileMarkup() }
        </div>
        <div className='debug-menu'>
          <h2>🌲 Forest Simulator</h2>
          <div><strong>Trees Chopped:</strong> <Points /></div>
          <div>
            <label htmlFor='rows'><strong>Rows:</strong></label>
            <input id='rows' type='number' min='1' max='15' defaultValue={this.props.rows} onChange={this.updateBoardSize} />
          </div>
          <div>
            <label htmlFor='columns'><strong>Columns:</strong></label>
            <input id='columns' type='number' min='1' max='18' defaultValue={this.props.columns} onChange={this.updateBoardSize} />
          </div>
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
    tileMap: state.board.tileMap,
    rows: state.board.rows,
    columns: state.board.columns,
  };
};

export default connect(mapStateToProps)(Board);