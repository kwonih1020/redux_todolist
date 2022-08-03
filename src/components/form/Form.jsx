// eslint-disable-next-line

import React from 'react';
import { Button, FormStyled, Label, Input } from './style.js';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../redux/modules/todo.js';
import { useState } from 'react';
import nextId from "react-id-generator";

const Form = () => {
  const dispatch = useDispatch();
  const id = nextId("ID");

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });

  const { title, body } = todo;

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo({...todo, [name]: value});
  };

  const onSubmitHandlerForm = (e) => {
    e.preventDefault();
    if (todo.title === "" || todo.body === "") return;

    dispatch(createTodo({...todo, id}));
    setTodo({
      title: "",
      body: "",
    });
  };

  return (
    <FormStyled type="submit" onSubmit={onSubmitHandlerForm}>
      <Label>제목을 입력하세요</Label>
      <Input
        type="text"
        value={title}
        name="title"
        onChange={onChangeHandler} />
      <Label>내용을 입력하세요</Label>
      <Input
        type="text"
        value={body}
        name="body"
        onChange={onChangeHandler} />
      <Button>추가하기</Button>
    </FormStyled>
  );
};

export default Form;
