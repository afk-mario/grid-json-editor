import React from 'react';
import {NavLink} from 'react-router-dom';

import routes from '../../routes';
import './style.css';

const Header = () => (
  <header id="header">
    <nav className="wrapper">
      <ul>
        {routes.map((route, i) => {
          if (!route.name) return '';
          return (
            <li key={i}>
              <NavLink to={route.path} exact={route.exact}>
                {route.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  </header>
);

export default Header;
