import React from 'react';
import PropTypes from 'prop-types';
import Delete from '../delete';

import './style.css';

const coordsRow = props => {
  const {id, item, name, label, onChange, onDelete} = props;
  const [x, y] = item;
  return (
    <div className="coords-row">
      <label htmlFor={`${id}-${name}`}>{label ? label : name}</label>
      <div className="fieldset" id={`${id}-${name}`}>
        <input
          name={x}
          type="number"
          step="0.5"
          value={x}
          onChange={e => {
            const arr = [parseFloat(e.target.value, 10), y];
            onChange(id, arr);
          }}
        />
        <input
          name={y}
          type="number"
          step="0.5"
          value={y}
          onChange={e => {
            const arr = [x, parseFloat(e.target.value, 10)];
            onChange(id, arr);
          }}
        />
        <Delete id={id} onClick={onDelete} />
      </div>
    </div>
  );
};

coordsRow.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string,
  item: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default coordsRow;
