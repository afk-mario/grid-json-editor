import React from 'react';

import {Link} from 'react-router-dom';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import Tasks from './tasks';
import List from './list';

export default ({routes}) => (
  <div>
    <Link to="/types/add">Create</Link>
    <List />
    {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
    <Tasks />
  </div>
);
