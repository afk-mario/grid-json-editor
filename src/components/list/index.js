import React from 'react';
import PropTypes from 'prop-types';
import Row from '../row';
import Delete from '../delete';

import './style.css';

const List = ({items, onClick, onDelete}) => {
  if (items.length < 1)
    return (
      <ul className="list">
        <Row text="-- No Items --" />
      </ul>
    );
  return (
    <ul className="list">
      {items.map((item, index) => (
        <Row key={item.id} {...item} onClick={() => onClick(item.id)}>
          {onDelete && <Delete id={item.id} onClick={onDelete} />}
        </Row>
      ))}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  onDelete: PropTypes.func,
};

export default List;
