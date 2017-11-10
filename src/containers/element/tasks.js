import React from 'react';
import {connect} from 'react-redux';
import {clearElements} from './actions';
import {exportState} from '../../lib/export';
import Tasks from '../../components/tasks';
import {withRouter} from 'react-router';
import {getRandomMessage} from '../../lib/messages';

function mapStateToProps(state) {
  const {elements} = state;
  return {items: elements};
}

let ElementTasks = ({items, dispatch, history}) => {
  const tasks = [
    {
      name: 'Create',
      onClick: () => {
        history.push('/components/add');
      },
    },
    {
      name: 'Export',
      onClick: () => {
        exportState({items, name: 'elements'});
      },
    },
    {
      name: 'Load',
      onClick: () => {
        window.alert(getRandomMessage());
      },
    },
    {
      name: 'Clear',
      onClick: () => {
        dispatch(clearElements());
      },
    },
  ];
  return <Tasks items={tasks} />;
};

ElementTasks = withRouter(connect(mapStateToProps)(ElementTasks));
export default ElementTasks;
