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
   */
  chop() {
    if(!this.state.growing) {
      this.incrementPoints();
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
  
  incrementPoints() {
    this.props.dispatch({type: INCREMENT_POINTS});
  }
  
  render() {
    const variant = this.state.variant;
    return (
      <div className={`tree variant-${variant.id} interactive`} onClick={this.chop} ref={this.ref}>
        <img src={variant.img.src} alt={variant.img.alt} />
      </div>
    );
  }
}

export default connect()(Tree);