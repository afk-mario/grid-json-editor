import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = props => {
  const {name, label, type, value} = props;
  const className = classNames({[`input-${type}`]: true});
  if (type === 'checkbox') {
    return (
      <div className={className}>
        <label htmlFor={name}>
          <span>{label ? label : name}</span>
          {value ? (
            <i className="material-icons">check_box</i>
          ) : (
            <i className="material-icons">check_box_outline_blank</i>
          )}
        </label>
        <input id={name} name={name} checked={props.value} {...props} />
      </div>
    );
  }
  return (
    <div className={className}>
      <label htmlFor={name}>{label ? label : name}</label>
      <input id={name} name={name} {...props} />
    </div>
  );
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
};

export default Input;
