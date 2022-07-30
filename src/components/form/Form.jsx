// eslint-disable-next-line

import React from 'react';
import { Button, FormStyled, Label, Input } from './style.js';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { addTodo } from '../../redux/modules/todo';

const Form = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const inputs = useSelector((state) => state.inputs.inputs); // 추가해주세요.
  console.log(inputs); // 스토어를 조회해볼까요?

  const dispatch = useDispatch();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (title === "" && body === "") return;

    dispatch(
      addTodo({
        id: inputs.length,
        title,
        body
      })
    )
  }

  return (
    <div>
      <FormStyled onSubmit={onSubmitHandler}>
        <Label>제목을 입력하세요</Label>
        <Input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <Label>내용을 입력하세요</Label>
        <Input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <Button>추가하기</Button>
      </FormStyled>
    </div>
  );
};

export default Form;
