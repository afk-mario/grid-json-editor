import {connect} from 'react-redux';
import List from '../../components/list';
import {deleteElementType} from './actions';
import {withRouter} from 'react-router';
import {getRandomMessage} from '../../lib/messages';

const mapStateToProps = state => {
  const {elementTypes} = state || [];
  const items = elementTypes.map(item => ({
    id: item.pk,
    text: `${item.name}`,
  }));
  return {
    items,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: pk => {
      window.alert(getRandomMessage());
      // console.log(pk);
      // props.history.push(`/types/edit/${pk}`);
    },
    onDelete: pk => {
      dispatch(deleteElementType(pk));
    },
  };
};

const ElementTypesList = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(List),
);

export default ElementTypesList;
