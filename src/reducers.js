import {combineReducers} from 'redux';
import elements from './containers/element/reducers';
import elementTypes from './containers/element_type/reducers';
import settings from './containers/settings/reducers';

const app = combineReducers({
  elements,
  elementTypes,
  settings,
});

export default app;
