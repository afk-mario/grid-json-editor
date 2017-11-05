import {v4} from 'uuid';
export const ADD_ELEMENT = 'ADD_ELEMENT';

export function addElement(element) {
  console.log(element);
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
