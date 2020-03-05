import initialize2dArray from '../../helpers/initialize2dArray';

export const refreshBoard = () => {
  return {
    tileMap: initialize2dArray(6, 8)
  };
};