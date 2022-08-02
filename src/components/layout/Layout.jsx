import React from 'react';
import LayoutContainer from './style.js';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      {children}
    </LayoutContainer>
  );
};

export default Layout;
