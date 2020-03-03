import React, { Component } from 'react';
import getRandomInt from '../../../helpers/getRandomInt';
import variantOne from './img/0.png';
import variantTwo from './img/1.png';
import './index.scss';

export default class Tree extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.ref = React.createRef();

    // Tree variants object data
    this.variants = [
      {
        id: 1,
        name: "Birch",
        img: {
          src: variantOne,
          alt: 'A birch tree.',
        },
        growth: {
          rate: 1000, // ms
          regrows: true
        }
      },
      {
        id: 2,
        name: 'Oak',
        img: {
          src: variantTwo,
          alt: 'An oak tree.',
        },
        growth: {
          rate: null,
          regrows: false
        }
      }
    ];

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
    console.log(element.classList);
    this.setState({grown:false});
  }

  enable() {
    const element = this.ref.current;
    element.classList.remove('disabled');
    this.setState({grown:true,growing:false});
  }

  chop() {
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
  
  render() {
    const variant = this.state.variant;
    return (
      <div className={`tree variant-${variant.id} interactive`} onClick={this.chop} ref={this.ref}>
        <img src={variant.img.src} alt={variant.img.alt} />
      </div>
    );
  }
}