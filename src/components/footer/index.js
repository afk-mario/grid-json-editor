import React from 'react';
import {version} from '../../../package.json';
import './style.css';

let Footer = () => {
  return (
    <footer id="footer">
      <div className="version-number">V:{version}</div>
    </footer>
  );
};

export default Footer;
