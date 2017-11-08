export const SET_NUMBER_OF_COLUMNS = 'SET_NUMBER_OF_COLUMNS';

export function setNumberOfColumns(columns) {
  return {
    type: SET_NUMBER_OF_COLUMNS,
    columns
  };
}

export const SET_NUMBER_OF_ROWS = 'SET_NUMBER_OF_ROWS';
export function setNumberOfRows(rows) {
  return {
    type: SET_NUMBER_OF_ROWS,
    rows
  };
}
