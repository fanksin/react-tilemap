import initialize2dArray from '../../helpers/initialize2dArray';

export const resetBoard = (state) => {
  return {
    board: {
      ...state.board,
      tileMap: initialize2dArray(state.board.rows, state.board.columns)
    },
  };
};

export const updateBoardSize = (state, action) => {
  return {
    board: {
      rows: action.rows,
      columns: action.columns,
      tileMap: initialize2dArray(action.rows, action.columns),
    }
  };
};