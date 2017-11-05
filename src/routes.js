import React from 'react';
import Loading from './components/loading';

import Elements from './containers/element';
import AddElement from './containers/element/add';
import AddElementType from './containers/element_type/add';

import ElementTypes from './containers/element_type';
import {Redirect} from 'react-router-dom';

const routes = [
  {
    path: '/',
    component: () => <Redirect from="/" to="/components" />,
    exact: true,
  },
  {
    path: '/components',
    name: 'Components',
    component: Elements,
    routes: [
      {
        path: '/components/add',
        component: AddElement,
        exact: true,
      },
      {
        path: '/components/delete',
        component: Loading,
        exact: true,
      },
    ],
  },
  {
    path: '/types',
    name: 'Types',
    component: ElementTypes,
    routes: [
      {
        path: '/types/add',
        component: AddElementType,
        exact: true,
      },
      {
        path: '/types/delete',
        component: Loading,
        exact: true,
      },
    ],
  },
  {
    path: '/json',
    name: 'Json',
    exact: true,
    component: () => <div className="json" />,
  },
];

export default routes;
