import React from 'react';
import Form from '../components/form/Form';
import Layout from '../components/layout/Layout';
import List from '../components/list/List';
import Header from '../components/header/Header';

const TodoList = () => {
  return (
    <>
      <Layout>
        <Header />
        <Form />
        <List />
      </Layout>
    </>
      
  );
};

export default TodoList;
