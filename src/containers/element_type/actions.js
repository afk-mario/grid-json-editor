import {v4} from 'uuid';
export const ADD_ELEMENT_TYPE = 'ADD_ELEMENT_TYPE';

export function addElementType(elementType) {
  return {
    type: ADD_ELEMENT_TYPE,
    id: v4(),
    ...elementType,
  };
}

export const CLEAR_ELEMENT_TYPES = 'CLEAR_ELEMENT_TYPES';

export function clearElementTypes() {
  return {
    type: CLEAR_ELEMENT_TYPES,
  };
}
