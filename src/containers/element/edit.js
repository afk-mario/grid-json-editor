import {connect} from 'react-redux';
import {editElement} from './actions';
import Form from './form';
import {withRouter} from 'react-router';

const mapStateToProps = (state, props) => {
  const {pk} = props.match.params;
  const {elements, elementTypes} = state || [];
  const element = elements.filter(item => item.pk === pk)[0] || undefined;
  if (!element) {
    props.history.push('/components/');
  }
  return {
    items: elementTypes,
    item: element,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSubmit: element => {
      dispatch(editElement(element));
      props.history.push('/components/');
    },
  };
};

const AddElement = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Form),
);

export default AddElement;
