import {ADD_ELEMENT, CLEAR_ELEMENTS} from './actions';

function elements(state = [], action) {
  switch (action.type) {
    case ADD_ELEMENT:
      return [
        ...state,
        {
          ...action.element,
          data: {
            ...action.element.data,
          },
        },
      ];
    case CLEAR_ELEMENTS:
      return [];
    default:
      return state;
  }
}

export default elements;
