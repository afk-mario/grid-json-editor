import React from 'react';
import './style.css';

let Delete = ({onClick, id}) => {
  return (
    <div
      className="delete"
      onClick={(e) => {
        onClick(id);
      }}>
      x
    </div>
  );
};

export default Delete;
