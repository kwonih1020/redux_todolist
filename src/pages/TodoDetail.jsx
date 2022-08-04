// eslint-disable-next-line

import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { getPageId } from "../redux/modules/todo";
import styled from "styled-components";

const TodoDetail = () => {
  const todoList = useSelector((state) => state.todos.todos);
  // console.log(todoList);

  // const dispatch = useDispatch();

  const params = useParams();

  // useEffect(() => {
  //   dispatch(getPageId(id));
  // }, [dispatch, id]);

  const todo = todoList.find((todo) => String(todo.id) === params.id);

  return (
    <DetailContainer>
      <DetailBox>
        <LinkButton>
          <Link to={"/"} style={{ textDecoration: "none", color: "red" }}>
            이전으로
          </Link>
        </LinkButton>
        <DetailText>
          <div>ID: {todo.id}</div>
          <h4>제목: {todo.title}</h4>
          <h4>내용: {todo.body}</h4>
        </DetailText>
      </DetailBox>
    </DetailContainer>
  );
};

export default TodoDetail;

const DetailContainer = styled.div`
  border: 2px solid #eee;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const DetailBox = styled.div`
  width: 600px;
  height: auto;
  border: 1px solid #eee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const DetailText = styled.div`
  padding: 0 24px;
  align-items: center;
`;

const LinkButton = styled.div`
  cursor: pointer;
  text-align: right;
`;
