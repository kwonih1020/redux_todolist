import React from 'react';
import { ListBoxDone, ListBoxTodo, ListContainer, TodoContainer, ButtonBox, Button } from './style.js';
import { useSelector } from "react-redux";
import { deleteTodo } from '../../redux/modules/todo.js';
import { useDispatch } from 'react-redux';

const List = () => {
  const lists = useSelector((state) => state.todos.todos);
  console.log(lists);
  
  const dispatch = useDispatch();

  // 삭제
  const deleteHandler = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo(id))
  }

  return (
    <ListContainer>
      <h1 className='list-title'>Working!</h1>
      <ListBoxTodo>
        {lists.map((todo, i) => (
          <TodoContainer key={i}>
            <div>
              <h4>{todo.title}</h4>
              <h4>{todo.body}</h4>
              <ButtonBox>
                <Button onClick={(e)=> deleteHandler(e, todo.id)}>삭제하기</Button>
                <Button>완료하기</Button>
              </ButtonBox>
            </div>
          </TodoContainer>
        ))}
      </ListBoxTodo>
      <h1 className='list-title'>Done!</h1>
      <ListBoxDone>
        {/* {lists.map((todo, i) => (
          <TodoContainer key={i}>
            <div>
              <h4>{todo.title}</h4>
              <h4>{todo.body}</h4>
              <ButtonBox>
                <Button onClick={(e)=> deleteCard(e, todo.id)}>삭제하기</Button>
                <Button>완료하기</Button>
              </ButtonBox>
            </div>
          </TodoContainer>
        ))} */}
      </ListBoxDone>
    </ListContainer>
  );
};

export default List;
