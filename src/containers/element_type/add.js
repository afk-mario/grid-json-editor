import {connect} from 'react-redux';
import {addElementType} from './actions';
import Form from './form';

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: element => {
      dispatch(addElementType(element));
    },
  };
};

const AddElementType = connect(null, mapDispatchToProps)(Form);

export default AddElementType;
