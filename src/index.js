import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {throttle} from 'lodash';

import AppReducer from './reducers';

import App from './containers/app';
import {loadState, saveState} from './lib/localStorage';
import registerServiceWorker from './registerServiceWorker';

import 'react-select/dist/react-select.css';

const persistedState = loadState();
const store = createStore(
  AppReducer,
  persistedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

store.subscribe(
  throttle(() => {
    const {elements, elementTypes, settings} = store.getState();
    saveState({
      elements,
      elementTypes,
      settings,
    });
  }, 1000),
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

registerServiceWorker();
