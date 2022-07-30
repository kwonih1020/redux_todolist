import React from 'react';
import { ListBoxTodo, ListContainer } from './style.js';
import { useSelector } from "react-redux";

const List = () => {
  const { inputs } = useSelector((state) => state.inputs);
  return (
    <ListContainer>
      <h1 className='list-title'>Working!</h1>
      <ListBoxTodo>
        {inputs.map((input) => (
          <div key={input.id}>{input.title} {input.body}</div>
        ))}
      </ListBoxTodo>
    </ListContainer>
  );
};

export default List;
