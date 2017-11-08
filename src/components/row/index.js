import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const Row = ({onClick, text, children, id}) => (
  <li className="row">
    <span onClick={onClick}>{text}</span>
    {children}
  </li>
);

Row.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
};

export default Row;
