import {connect} from 'react-redux';
import List from '../../components/list';

const mapStateToProps = state => {
  const {elementTypes} = state || [];
  const items = elementTypes.map(item => ({
    id: item.id,
    text: `${item.name}`,
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

const ElementTypesList = connect(mapStateToProps, mapDispatchToProps)(List);

export default ElementTypesList;
