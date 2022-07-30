import styled from "styled-components";

const ListContainer = styled.div `
  padding: 0 24px;
`
const ListBoxTodo = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

const ListBoxDone = styled.div `
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`

export {
  ListContainer,
  ListBoxTodo,
  ListBoxDone
};
