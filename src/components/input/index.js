import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  const {name, label} = props;
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Input;
