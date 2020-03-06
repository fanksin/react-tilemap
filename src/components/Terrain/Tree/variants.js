import variantOne from './img/tree_birch_NE.png';
import variantOneStump from './img/treeStump_deep_NE.png';
import variantTwo from './img/tree_oak_NE.png';

export default [
  {
    id: 1,
    name: "Birch",
    images: [
      {
        src: {
          tree: variantOne,
          // stump: variantOneStump,
        },
        alt: 'A birch tree.'
      },
    ],
    growth: {
      rate: 325, // ms
      regrows: true
    },
    points: 1
  },
  {
    id: 2,
    name: 'Oak',
    images: [
      {
        src: {
          tree: variantTwo,
          stump: '',
        },
        alt: 'A birch tree.'
      },
    ],
    growth: {
      rate: 700, //ms
      regrows: true
    },
    points: 2
  }
];