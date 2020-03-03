import React, { Component } from 'react';
import { Terrain, TERRAIN_COMPONENTS } from '../Terrain';
import getRandomInt from '../../helpers/getRandomInt';
import './index.scss';

export default class Tile extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.className = 'tile';
    this.blankTileChance = 70; // percentage out of 100
    this.state = {
      terrain: this.getRandomTerrain()
    };
  }

  getRandomTerrain() {
    const keys = Object.keys(TERRAIN_COMPONENTS);
    const component = keys[keys.length * Math.random() << 0];
    return component;
  }

  getTileMarkup(children = null) {
    return (
      <div className={this.className} style={{zIndex: this.props.zIndex}}>
        {children}
      </div>
    );
  }

  render() {
    const isBlankTile = getRandomInt(100) > this.blankTileChance ? true : false;
    const terrain = this.getRandomTerrain();
    const tileMarkup = isBlankTile ? 
      this.getTileMarkup(<Terrain type={terrain} />) :
      this.getTileMarkup();
    
    return tileMarkup;
  }
}