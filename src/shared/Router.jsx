// eslint-disable-next-line 

import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TodoList from '../pages/TodoList';
import TodoDetail from '../pages/TodoDetail';
import Layout from '../components/layout/Layout';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/redux_todolist" element={<TodoList />} />
          <Route path="/redux_todolist/detail/:id" element={<TodoDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
