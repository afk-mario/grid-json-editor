import React from 'react';

import './style.css';

export default ({items}) => {
  return (
    <ul className="tasks">
      {items.map((item, i) => (
        <li key={i} {...item}>
          {item.name}
        </li>
      ))}
    </ul>
  );
};
