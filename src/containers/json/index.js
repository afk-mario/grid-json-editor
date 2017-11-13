import React from 'react';
import {connect} from 'react-redux';
import JSONPretty from 'react-json-pretty';
import {clone} from '../../lib/utils';

import './style.css';

const mapStateToProps = state => {
  const {elements} = state || [];

  const json = clone([], elements).map(item => {
    delete item.pk;
    delete item.elementType;
    Object.keys(item).forEach(key => {
      if (item[key] == null || item[key] === '') {
        delete item[key];
      } else if (key === 'linePoints') {
        if (item[key].length < 1) delete item[key];
      }
    });
    return item;
  });

  const obj = {
    components: json,
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
        if (key === 'ok') {
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
