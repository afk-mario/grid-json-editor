import {
  ADD_ELEMENT_TYPE,
  CLEAR_ELEMENT_TYPES,
  EDIT_ELEMENT_TYPE,
  DELETE_ELEMENT_TYPE,
  LOAD_ELEMENT_TYPES,
} from './actions';

function elementTypes(state = [], action) {
  switch (action.type) {
    case ADD_ELEMENT_TYPE:
      return [
        ...state,
        {
          ...action,
        },
      ];
    case EDIT_ELEMENT_TYPE:
      return state.map(
        elementType =>
          elementType.pk === action.elementType.pk
            ? {...action.elementType}
            : elementType,
      );
    case DELETE_ELEMENT_TYPE:
      return state.filter(item => item.pk !== action.pk);
    case CLEAR_ELEMENT_TYPES:
      return [];
    case LOAD_ELEMENT_TYPES:
      return action.items;
    default:
      return state;
  }
}

export default elementTypes;
