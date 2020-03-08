import React, { Component } from 'react';
import { connect } from 'react-redux';
import { INCREMENT_POINTS } from '../../../reducers/actions';
import getRandomInt from '../../../helpers/getRandomInt';
import variants from './variants';
import './index.scss';

class Tree extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = { 
      grown: true,
      growing: false,
      variant: this.getRandomVariant()
    };
    this.variantImage = this.getRandomImageFromVariant(this.state.variant);
    this.ref = React.createRef(); // Document node reference
    this.chop = this.chop.bind(this); // Bindings
  }

  /**
   * Get a random tree variant
   */
  getRandomVariant() {
    const variantCount = variants.length - 1;
    const randomVariantIndex = getRandomInt(variantCount);
    return variants[randomVariantIndex]; 
  }

  /**
   * Return random image object from variant object's array of images
   * @param {Object} variant Tree variant object
   * @return {Object} Image object with sources and alt text
   */
  getRandomImageFromVariant(variant) {
    const length = variant.images.length - 1;
    return variant.images[getRandomInt(length)];
  }

  /**
   * Disable the tree and set it's growth state
   */
  disable() {
    const element = this.ref.current;
    element.classList.add('disabled');
    this.setState({grown:false});
  }

  /**
   * Enable the tree and reset it's growth & growing state
   */
  enable() {
    const element = this.ref.current;
    element.classList.remove('disabled');
    this.setState({grown:true,growing:false});
  }

  /**
   * Chop down the tree! 
   * Add a point to the score, disable it and let it regrow as nature intended :)
   * @param {Number} pointsValue the number of points the tree is worth
   */
  chop(pointsValue) {
    if(!this.state.growing) {
      this.incrementPoints(pointsValue);
      this.disable();
      this.regrow();
    }
  }

  /**
   * If it can regrow, start a timeout counter using it's growth rate
   */
  regrow() {
    const variant = this.state.variant;
    if(variant.growth.regrows) {
      this.setState({growing:true});
      setTimeout(() => this.enable(), variant.growth.rate );
    }
  }
  
  /**
   * Incremement points by N amount
   * @param {Number} N number of points to increment
   */
  incrementPoints(N) {
    this.props.dispatch({...INCREMENT_POINTS, pointsToIncrement: N });
  }

  isDisabled() {
    return !this.state.grown;
  }

  isStump() {
    return this.isDisabled() && this.variantImage.src.stump;
  }

  componentDidMount() {
    // Preload stump image to avoid pop-in
    const image = new Image;
    image.src = this.variantImage.src.stump;
  }
  
  render() {
    const variant = this.state.variant;
    const image = this.variantImage;
    const classes = `${this.isStump() ? 'tree stump' : 'tree'} variant-${variant.id} interactive${this.isDisabled() ? ' disabled' : ''}`;
    const src = this.isStump() ? image.src.stump : image.src.tree;
    return (
      <div className={classes} onClick={() => this.chop(variant.points)} ref={this.ref}>
        <img src={src} alt={image.alt} />
      </div>
    );
  }
}

export default connect()(Tree);