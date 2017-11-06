import {connect} from 'react-redux';
import List from '../../components/list';
import {deleteElement} from './actions';
import {withRouter} from 'react-router';

const mapStateToProps = state => {
  const {elements} = state || [];
  const items = elements.map(item => ({
    id: item.pk,
    text: `${item.name} - ${item.id}`,
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: pk => {
      props.history.push(`/components/edit/${pk}`);
    },
    onDelete: pk => {
      dispatch(deleteElement(pk));
    },
  };
};

const ElementsList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(List),
);

export default ElementsList;
