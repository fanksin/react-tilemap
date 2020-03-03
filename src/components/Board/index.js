import React, { Component, Fragment } from 'react';
import Tile from '../Tile';
import './index.scss';

export default class Board extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.width = this.props.width;
    this.height = this.props.height;
    this.ref = React.createRef();
    this.state = {
      tileMap: this.initializeTileMap(this.height, this.width)
    };
  }

  componentDidMount() {
    const element = this.ref.current;
    element.style.opacity = 1;
  }

  initializeTileMap(height = 10, width = 10) {
    let map = new Array(height);
    for(let i = 0; i < map.length; i++) {
      map[i] = new Array(width).fill(0);
    }

    return map;
  }

  generateTileMarkup() {
    const tileMap = this.state.tileMap;
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

  refreshBoard() {
    this.setState({
      tileMap: this.initializeTileMap(this.height, this.width)
    });
  }

  render() {
    return (
      <Fragment>
        <div className='board' ref={this.ref}>
          { this.generateTileMarkup() }
        </div>
        <div className='debug-menu'>
          <h2>Debug Menu</h2>
          <button onClick={ this.refreshBoard.bind(this) }>Reset Board</button>
        </div>
      </Fragment>
    );
  }
}