import React from 'react';
import {connect} from 'react-redux';
import JSONPretty from 'react-json-pretty';

import './style.css';

const mapStateToProps = state => {
  const {elements} = state || [];

  const obj = {
    elements,
  };

  const items = JSON.stringify(obj);

  return {
    json: items,
  };
};

let JsonPretty = ({json}) => (
  <div className="json">
    <JSONPretty
      json={json}
      replacer={(key, value) => {
        if (key === 'cccc') {
          value += '~~~abc';
        }
        if (key === 'gggg') {
          value *= 10;
        }
        return value;
      }}
      space="2"
    />
  </div>
);

JsonPretty = connect(mapStateToProps, null)(JsonPretty);

export default JsonPretty;
