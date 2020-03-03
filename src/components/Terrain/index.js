import React, { Component } from 'react';
import Tree from './Tree';
import Grass from './Grass';

const TERRAIN_COMPONENTS = {
  tree: Tree,
  grass: Grass
};

class Terrain extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const TagName = TERRAIN_COMPONENTS[this.props.type];
    return <TagName />;
  }
}

export {
  TERRAIN_COMPONENTS,
  Terrain
};