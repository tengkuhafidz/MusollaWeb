import React from 'react';
import MainNav from './Navigation/MainNav.jsx';

const MainLayout = ({content}) => (
  <div className="main-wrapper">
    <MainNav />
    {content()}
  </div>
);

export default MainLayout;
