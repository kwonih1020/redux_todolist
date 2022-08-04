import React from "react";
import {
  ListBoxDone,
  ListBoxTodo,
  ListContainer,
  TodoContainer,
  ButtonBox,
  Button,
} from "./style.js";
import { useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "../../redux/modules/todo.js";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const List = () => {
  const lists = useSelector((state) => state.todos.todos);
  // console.log(lists);

  const dispatch = useDispatch();

  // 삭제
  const deleteHandler = (e, id) => {
    e.stopPropagation();
    dispatch(deleteTodo(id));
  };

  // 완료하기
  const updateHandler = (e, id) => {
    e.stopPropagation();
    dispatch(updateTodo(id));
    // console.log(lists);
  };

  return (
    <ListContainer>
      <h1 className="list-title">Working!</h1>
      <ListBoxTodo>
        {lists.map((todo) =>
          !todo.isDone ? (
            <TodoContainer key={todo.id}>
              <Link
                to={`/detail/${todo.id}`}
                style={{ textDecoration: "none", color: "red" }}>
                상세페이지
              </Link>
              <div>
                <h4>{todo.title}</h4>
                <h4>{todo.body}</h4>
                <ButtonBox>
                  <Button onClick={(e) => deleteHandler(e, todo.id)}>
                    삭제하기
                  </Button>
                  <Button onClick={(e) => updateHandler(e, todo.id)}>
                    완료하기
                  </Button>
                </ButtonBox>
              </div>
            </TodoContainer>
          ) : null
        )}
      </ListBoxTodo>
      <h1 className="list-title">Done!</h1>
      <ListBoxDone>
        {lists.map((todo) =>
          todo.isDone ? (
            <TodoContainer key={todo.id}>
              <Link
                to={`/detail/${todo.id}`}
                style={{ textDecoration: "none", color: "red" }}>
                상세페이지
              </Link>
              <div>
                <h4>{todo.title}</h4>
                <h4>{todo.body}</h4>
                <ButtonBox>
                  <Button onClick={(e) => deleteHandler(e, todo.id)}>
                    삭제하기
                  </Button>
                  <Button onClick={(e) => updateHandler(e, todo.id)}>
                    {todo.isDone ? "취소하기" : "완료하기"}
                  </Button>
                </ButtonBox>
              </div>
            </TodoContainer>
          ) : null
        )}
      </ListBoxDone>
    </ListContainer>
  );
};

export default List;
