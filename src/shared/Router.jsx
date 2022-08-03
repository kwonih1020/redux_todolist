// eslint-disable-next-line 

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from '../pages/TodoList';
import TodoDetail from '../pages/TodoDetail';
import Layout from '../components/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<TodoList />} />
          <Route path="/detail/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
