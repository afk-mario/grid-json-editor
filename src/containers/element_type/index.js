import React from 'react';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import Tasks from './tasks';
import List from './list';

export default ({routes}) => (
  <section className="type">
    <section className="type-child">
      {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    </section>
    <section className="type-static">
      <Tasks />
      <List />
    </section>
  </section>
);
