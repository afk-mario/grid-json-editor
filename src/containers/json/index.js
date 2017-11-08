import React from 'react';
import {connect} from 'react-redux';
import JSONPretty from 'react-json-pretty';

import './style.css';

const mapStateToProps = state => {
  const {elements} = state || [];

  const obj = {
    components: elements,
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
      space="2"
    />
  </div>
);

JsonPretty = connect(mapStateToProps, null)(JsonPretty);

export default JsonPretty;
