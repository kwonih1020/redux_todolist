import React from 'react';
import { ListBoxDone, ListBoxTodo, ListContainer, TodoContainer, ButtonBox, Button } from './style.js';
import { useSelector } from "react-redux";
import { deleteTodo } from '../../redux/modules/todo.js';
import { useDispatch } from 'react-redux';

const List = () => {
  const lists = useSelector((state) => state.todos.todos);
  console.log(lists);
  
  const dispatch = useDispatch();

  const deleteCard = (e, id) => {
    e.preventDefault();
    dispatch(deleteTodo(id))
  }

  return (
    <ListContainer>
      <h1 className='list-title'>Working!</h1>
      <ListBoxTodo>
        {lists.map((todo, i) => (
          <TodoContainer>
            <div key={lists[i].id}>
              <h4>{lists[i].title}</h4>
              <h4>{lists[i].body}</h4>
              <ButtonBox>
                <Button onClick={(e)=> deleteCard(e,lists[i].id)}>삭제하기</Button>
                <Button>완료하기</Button>
              </ButtonBox>
            </div>
          </TodoContainer>
        ))}
      </ListBoxTodo>
      <h1 className='list-title'>Done!</h1>
      <ListBoxDone>
        {/* {lists.map((todo, i) => (
          <TodoContainer>
            <div key={i}>
              <h4>{lists[i].title}</h4>
              <h4>{lists[i].body}</h4>
              <ButtonBox>
                <Button>삭제하기</Button>
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
