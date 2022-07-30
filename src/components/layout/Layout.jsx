import React from 'react';
import LayoutContainer from './style.js';

const Layout = (props) => {
  return (
    <LayoutContainer>
      {props.children}
    </LayoutContainer>
  );
};

export default Layout;
