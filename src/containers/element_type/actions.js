import {v4} from 'uuid';
export const ADD_ELEMENT_TYPE = 'ADD_ELEMENT_TYPE';

export function addElementType(elementType) {
  return {
    type: ADD_ELEMENT_TYPE,
    pk: v4(),
    ...elementType,
  };
}

export const CLEAR_ELEMENT_TYPES = 'CLEAR_ELEMENT_TYPES';

export function clearElementTypes() {
  return {
    type: CLEAR_ELEMENT_TYPES,
  };
}

export const EDIT_ELEMENT_TYPE = 'EDIT_ELEMENT_TYPE';
export function editElementType(elementType) {
  return {
    type: EDIT_ELEMENT_TYPE,
    elementType,
  };
}

export const DELETE_ELEMENT_TYPE = 'DELETE_ELEMENT_TYPE';
export function deleteElementType(pk) {
  return {
    type: DELETE_ELEMENT_TYPE,
    pk,
  };
}

export const LOAD_ELEMENT_TYPES = 'LOAD_ELEMENT_TYPES';
export function loadElementTypes(items) {
  return {
    type: LOAD_ELEMENT_TYPES,
    items,
  };
}
