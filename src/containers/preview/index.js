import {connect} from 'react-redux';
import Canvas from '../../components/canvas';

const mapStateToProps = state => {
  const {elements} = state || [];
  return {
    items: elements,
    columns: 32,
    rows: 9,
    margin: 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: id => {
      console.log(`click ${id}`);
    },
  };
};

const Preview = connect(mapStateToProps, mapDispatchToProps)(Canvas);

export default Preview;
