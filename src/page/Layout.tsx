import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../componets/layout/Header';
import Footer from '../componets/layout/Footer';
import * as St from '../styled-component/layout/Stlayout';

const Layout = () => {
   return (
      <St.Container>
         <Header />

         <Outlet />

         <Footer />
      </St.Container>
   );
};

export default Layout;
