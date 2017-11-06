import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router';
import {clearElementTypes} from '../../containers/element_type/actions';
import {exportState} from '../../lib/export';
import Tasks from '../../components/tasks';

function mapStateToProps(state) {
  const {elementTypes} = state;
  return {items: elementTypes};
}

let ElementTasks = ({items, dispatch, history}) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/types/add');
      },
    },
    {
      name: 'Load',
      onClick: () => {
        console.log('Load');
      },
    },
    {
      name: 'Export',
      onClick: () => {
        exportState({items, name: 'component_types'});
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearElementTypes());
      },
    },
  ];
  return <Tasks items={tasks} />;
};

ElementTasks = withRouter(connect(mapStateToProps)(ElementTasks));
export default ElementTasks;
