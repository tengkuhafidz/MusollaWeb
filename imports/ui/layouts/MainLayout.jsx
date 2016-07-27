import React from 'react';

import MainNav from './MainNav.jsx';
import MainFooter from './MainFooter.jsx';

const MainLayout = ({content}) => (
  <div className="main-wrapper">
    <MainNav />
    {content()}
    <MainFooter />
  </div>
);

export default MainLayout;
