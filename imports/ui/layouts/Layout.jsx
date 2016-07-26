import React from 'react';
import Nav from './Navigation/Nav.jsx';

const Layout = ({content}) => (
  <div>
    <Nav />

    {content()}
  </div>
);

export default Layout;
