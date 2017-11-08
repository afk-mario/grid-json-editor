import {connect} from 'react-redux';
import {setNumberOfColumns, setNumberOfRows} from './actions';
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
    loadElements: files =>{
      console.log(files);
    },
    loadTypes: files =>{
      console.log(files);
    },
  };
};

const Settings = connect(mapStateToProps, mapDispatchToProps)(Form);

export default Settings;
