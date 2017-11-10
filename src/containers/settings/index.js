import {connect} from 'react-redux';
import {setNumberOfColumns, setNumberOfRows} from './actions';
import {loadElements} from '../element/actions';
import {loadElementTypes} from '../element_type/actions';
import Form from './form';
import './style.css';

const mapStateToProps = state => {
  const {settings} = state || {columns: 0, rows: 0};

  return {
    columns: settings.columns,
    rows: settings.rows,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeColumns: e => {
      dispatch(setNumberOfColumns(e.target.value));
    },
    changeRows: e => {
      dispatch(setNumberOfRows(e.target.value));
    },
    loadElements: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          try {
            const elements = JSON.parse(fileAsBinaryString);
            dispatch(loadElements(elements.elements));
          } catch (err) {
            console.log(fileAsBinaryString);
            console.log(err);
          }
        };

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.readAsBinaryString(file);
      });
    },
    loadTypes: files => {
      files.forEach(file => {
        const reader = new FileReader();

        reader.onload = () => {
          const fileAsBinaryString = reader.result;
          try {
            const elements = JSON.parse(fileAsBinaryString);
            dispatch(loadElementTypes(elements.elementTypes));
          } catch (err) {
            console.log(fileAsBinaryString);
            console.log(err);
          }
        };

        reader.onabort = () => console.log('file reading was aborted');
        reader.onerror = () => console.log('file reading has failed');
        reader.readAsBinaryString(file);
      });
    },
  };
};

const Settings = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Settings;
