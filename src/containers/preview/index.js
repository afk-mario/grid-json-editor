import {connect} from 'react-redux';
import Canvas from '../../components/canvas';
import {withRouter} from 'react-router';

const mapStateToProps = (state, props) => {
  const {elements} = state || [];
  const {rows, columns} = state.settings || {columns: 32, rows: 9};
  return {
    items: elements,
    columns,
    rows,
    margin: 0,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: pk => {
      props.history.push(`/components/edit/${pk}`);
    },
  };
};

const Preview = withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Canvas),
);

export default Preview;
