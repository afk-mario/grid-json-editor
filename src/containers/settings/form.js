import React from 'react';
import {version} from '../../../package.json';
import './style.css';
import Input from '../../components/input';
import Dropzone from 'react-dropzone';

let SettingsForm = ({
  rows,
  columns,
  changeColumns,
  changeRows,
  loadElements,
  loadTypes,
}) => {
  return (
    <div className="container settings">
      <section className="dark-container" onSubmit={this.handleSubmit}>
        <Input
          label="Grid Columns"
          name="columns"
          type="number"
          value={columns}
          onChange={changeColumns}
        />
        <Input
          label="Grid Rows"
          name="rows"
          type="number"
          value={rows}
          onChange={changeRows}
        />
        <section className="load">
          <Dropzone
            name="elements"
            className="drop"
            activeClassName="active-drop"
            acceptClassName="accept-drop"
            rejectClassName="reject-drop"
            disabledClassName="disabled-drop"
            onDrop={loadElements}>
            LOAD <br /> COMPONENTS
          </Dropzone>
        </section>
        <section className="load">
          <Dropzone
            name="types"
            className="drop"
            activeClassName="active-drop"
            acceptClassName="accept-drop"
            rejectClassName="reject-drop"
            disabledClassName="disabled-drop"
            onDrop={loadTypes}>
            LOAD <br /> TYPES
          </Dropzone>
        </section>
        <div className="version-number">V:{version}</div>
      </section>
    </div>
  );
};

export default SettingsForm;
