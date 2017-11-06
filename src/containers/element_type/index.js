import React from 'react';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import Tasks from './tasks';
import List from './list';

import './style.css';

export default ({routes}) => (
  <section className="type">
    <section className="type-static">
      <List />
      <Tasks />
    </section>
    <section className="type-child">
      <div className="container">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </div>
    </section>
  </section>
);
