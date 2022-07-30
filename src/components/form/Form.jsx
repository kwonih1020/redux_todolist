// eslint-disable-next-line

import React from 'react';
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
      <form onSubmit={onSubmitHandler}>
        <label>제목을 입력하세요</label>
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          type="text"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <button>추가하기</button>
      </form>
    </div>
  );
};

export default Form;
