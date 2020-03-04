import variantOne from './img/0.png';
import variantTwo from './img/1.png';

export default [
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
      rate: 3000,
      regrows: true
    }
  }
];