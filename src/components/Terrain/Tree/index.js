import React, { Component } from 'react';
import getRandomInt from '../../../helpers/getRandomInt';
import variants from './variants';
import './index.scss';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.ref = React.createRef();

    // Tree variants object data
    this.variants = variants;

    // Default state
    this.state = { 
      grown: true,
      growing: false,
      variant: this.getRandomVariant()
    };

    // Bindings
    this.chop = this.chop.bind(this);
  }

  getRandomVariant() {
    const variantCount = this.variants.length - 1;
    const randomVariantIndex = getRandomInt(variantCount);
    return this.variants[randomVariantIndex]; 
  }

  disable() {
    const element = this.ref.current;
    element.classList.add('disabled');
    this.setState({grown:false});
  }

  enable() {
    const element = this.ref.current;
    element.classList.remove('disabled');
    this.setState({grown:true,growing:false});
  }

  chop() {
    this.incrementPoints();
    if(!this.state.growing) {
      this.disable();
      this.regrow();
    }
  }

  regrow() {
    const variant = this.state.variant;
    if(variant.growth.regrows) {
      this.setState({growing:true});
      setTimeout(() => this.enable(), variant.growth.rate );
    }
  }

  incrementPoints() {
    
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