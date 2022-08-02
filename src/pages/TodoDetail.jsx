import React from 'react';
import { useSelector } from "react-redux";
import { Link, useParams } from 'react-router-dom'


const TodoDetail = () => {
  const lists = useSelector((state) => state.todos.todos); 
  // const param = useParams(lists.id);
  return (
    <div>
      <Link to={'/'}>이전으로</Link>
      <div>
        <h4>{lists.title}</h4>
        <h4>{lists.body}</h4>
      </div>
    </div>
  );
};

export default TodoDetail;
