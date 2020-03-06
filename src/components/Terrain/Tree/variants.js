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
    // images: [
    //   {
    //     tree: './img/0.png',
    //     stump: '',
    //   },
    //   {
    //     tree: './img/0.png',
    //     stump: '',
    //   }
    // ],
    growth: {
      rate: 325, // ms
      regrows: true
    },
    points: 1
  },
  {
    id: 2,
    name: 'Oak',
    img: {
      src: variantTwo,
      alt: 'An oak tree.',
    },
    growth: {
      rate: 700, //ms
      regrows: true
    },
    points: 2
  }
];