import {ADD_ELEMENT_TYPE, CLEAR_ELEMENT_TYPES} from './actions';

function elementTypes(state = [], action) {
  switch (action.type) {
    case ADD_ELEMENT_TYPE:
      return [
        ...state,
        {
          ...action
        },
      ];
    case CLEAR_ELEMENT_TYPES:
      return [];
    default:
      return state;
  }
}

export default elementTypes;
