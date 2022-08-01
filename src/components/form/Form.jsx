// eslint-disable-next-line

import React from 'react';
import { Button, FormStyled, Label, Input } from './style.js';
import { useDispatch} from 'react-redux';
import { createTodo } from '../../redux/modules/todo.js';
import { useState, useRef } from 'react';

const Form = () => {

  const [todo, setTodo] = useState({
    id: 0,
    title: "",
    body: "",
    isDone: false,
  });
  const { title, body } = todo;
  
  const nextId = useRef(2);

  const dispatch = useDispatch();

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setTodo(
      { 
        ...todo, 
        [name]: value 
      }
    );
  };

  const onSubmitHandlerForm = (e) => {
    e.preventDefault();
    if (todo.title === "" || todo.body === "") return;

    dispatch(
      createTodo({
        ...todo,
        id: nextId.current + 1
      })
    );
    nextId.current += 1;
    setTodo({
      id: 0,
      title: "",
      body: "",
      isDone: false,
    });
  };

  return (
    <div>
      <FormStyled onSubmit={onSubmitHandlerForm}>
        <Label>제목을 입력하세요</Label>
        <Input
          type="text"
          value={title}
          name="title"
          onChange={onChangeHandler}
        />
        <Label>내용을 입력하세요</Label>
        <Input
          type="text"
          value={body}
          name="body"
          onChange={onChangeHandler}
        />
        <Button>추가하기</Button>
      </FormStyled>
    </div>
  );
};

export default Form;
