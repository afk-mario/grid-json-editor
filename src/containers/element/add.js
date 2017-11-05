import {connect} from 'react-redux';
import {addElement} from './actions';
import Form from './form';

const mapStateToProps = state => {
  const {elementTypes} = state || [];
  return {
    items: elementTypes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: (element) => {
      dispatch(addElement(element));
    },
  };
};

const AddElement = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddElement;
