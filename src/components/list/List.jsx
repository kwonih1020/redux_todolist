import React from 'react';
import { useSelector } from "react-redux";

const List = () => {
  const { inputs } = useSelector((state) => state.inputs);
  return (
    <div>
      {inputs.map((input) => (
        <div key={input.id}>{input.title} {input.body}</div>
      ))}
    </div>
  );
};

export default List;
