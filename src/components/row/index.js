import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Row = ({onClick, text}) => (
  <li className="row" onClick={onClick}>
    {text}
  </li>
);

Row.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Row;
