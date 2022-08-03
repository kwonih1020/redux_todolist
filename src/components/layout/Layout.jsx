// eslint-disable-next-line 

import React from 'react';
import LayoutContainer from './style.js';
import Header from '../header/Header.jsx';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
    </LayoutContainer>
  );
};

export default Layout;
