import React, { Component } from 'react';
import getRandomInt from '../../../helpers/getRandomInt';
import variants from './variants';
import './index.scss';
export default class Grass extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.variants = variants;
  }

  getRandomVariant() {
    const variantCount = this.variants.length - 1;
    const randomVariantIndex = getRandomInt(variantCount);
    return this.variants[randomVariantIndex]; 
  }
  
  render() {
    const variant = this.getRandomVariant();
    
    return (
      <div className='grass'>
        <img src={variant.src} alt={variant.alt} />
      </div>
    );
  }
}