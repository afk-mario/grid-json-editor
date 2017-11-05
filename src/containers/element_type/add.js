import React from 'react';
import {connect} from 'react-redux';
import {addElementType} from './actions';

let AddElementType = ({dispatch}) => {
  let input;

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch(addElementType(input.value));
          input.value = '';
        }}>
        <input
          ref={node => {
            input = node;
          }}
        />
        <button type="submit">Add ElementType</button>
      </form>
    </div>
  );
};
AddElementType = connect()(AddElementType);

export default AddElementType;
