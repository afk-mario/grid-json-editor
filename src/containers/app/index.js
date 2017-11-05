import React from 'react';
import {BrowserRouter as Router, Switch} from 'react-router-dom';
import routes from '../../routes';

import Header from '../../components/header';
import Footer from '../../components/footer';
import RouteWithSubRoutes from '../../components/RouteWithSubRoutes';

import './style.css';
import './button.css';
import './form.css';

export default () => (
  <Router>
    <div>
      <Header />
      <div className="page-child">
        <Switch>
          {routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
        </Switch>
      </div>
      <Footer />
    </div>
  </Router>
);
