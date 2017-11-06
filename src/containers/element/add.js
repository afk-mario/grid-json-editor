import {connect} from 'react-redux';
import {addElement} from './actions';
import Form from './form';
import spec from './spec';

const mapStateToProps = state => {
  const {elementTypes} = state || [];
  let item = Object.assign(
    {},
    ...spec.map(({name, value}) => ({[name]: value})),
  );

  item = {
    ...item,
    data: {},
    elementType: {fields: []},
  };

  return {
    item,
    items: elementTypes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: element => {
      dispatch(addElement(element));
    },
  };
};

const AddElement = connect(mapStateToProps, mapDispatchToProps)(Form);

export default AddElement;
