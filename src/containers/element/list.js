import {connect} from 'react-redux';
import List from '../../components/list';

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

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      console.log(`click ${id}`);
    },
  };
};

const ElementsList = connect(mapStateToProps, mapDispatchToProps)(List);

export default ElementsList;
