import {SET_NUMBER_OF_COLUMNS, SET_NUMBER_OF_ROWS} from './actions';

function settings(state = {columns: 32, rows: 9}, action) {
  switch (action.type) {
    case SET_NUMBER_OF_COLUMNS:
      return {
        ...state,
        columns: action.columns,
      };
    case SET_NUMBER_OF_ROWS:
      return {
        ...state,
        rows: action.rows,
      };
    default:
      return state;
  }
}

export default settings;
