import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../page/Home';
import Layout from '../page/Layout';
const Router = () => {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Layout />}>
               <Route path='/' element={<Home />} />
               <Route path='/' element={<></>}></Route>
            </Route>
         </Routes>
      </BrowserRouter>
   );
};

export default Router;
