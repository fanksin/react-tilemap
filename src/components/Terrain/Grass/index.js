import React, { Component } from 'react';
import getRandomInt from '../../../helpers/getRandomInt';
import variantOne from './img/0.png';
import variantTwo from './img/1.png';
import variantThree from './img/2.png';
import variantFour from './img/3.png';
import './index.scss';

export default class Grass extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.variants = [
      {
        src: variantOne,
        alt: 'Some blades of grass.'
      },
      {
        src: variantTwo,
        alt: 'Some blades of grass.'
      },
      {
        src: variantThree,
        alt: 'Some blades of grass.'
      },
      {
        src: variantFour,
        alt: 'Some blades of grass.'
      }
    ];
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