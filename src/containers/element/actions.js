import {v4} from 'uuid';
export const ADD_ELEMENT = 'ADD_ELEMENT';

export function addElement(element) {
  return {
    type: ADD_ELEMENT,
    element: {
      pk: v4(),
      ...element,
    },
  };
}

export const CLEAR_ELEMENTS = 'CLEAR_ELEMENTS';
export function clearElements() {
  return {
    type: CLEAR_ELEMENTS,
  };
}

export const EDIT_ELEMENT = 'EDIT_ELEMENT';
export function editElement(element) {
  return {
    type: EDIT_ELEMENT,
    element,
  };
}

export const DELETE_ELEMENT = 'DELETE_ELEMENT';
export function deleteElement(pk) {
  return {
    type: DELETE_ELEMENT,
    pk,
  };
}

export const LOAD_ELEMENTS = '';
export function loadElements(items) {
  return {
    type: LOAD_ELEMENTS,
    items,
  };
}
