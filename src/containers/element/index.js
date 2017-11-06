import React from 'react';

import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import List from './list';
import Tasks from './tasks';
import Preview from '../preview';
import './style.css';

export default ({routes}) => (
  <section className="element">
    <div className="element-preview">
      <Preview />
    </div>
    <section className="element-bottom">
      <section className="element-static">
        <List />
        <Tasks />
      </section>
      <section className="element-child">
        {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
      </section>
    </section>
  </section>
);
