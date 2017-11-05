import {combineReducers} from 'redux';
import elements from './containers/element/reducers';
import elementTypes from './containers/element_type/reducers';

const app = combineReducers({
  elements,
  elementTypes,
});

export default app;
