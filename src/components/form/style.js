import styled from "styled-components";

const FormStyled = styled.form `
  background-color: #eee;
  border-radius: 12px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  gap: 20px;
`

const Label = styled.div `
  font-size: 16px;
  font-weight: 700;
`

const Button = styled.button `
  border: none;
  height: 40px;
  border-radius: 10px;
  background-color: teal;
  width: 140px;
  color: #fff;
  font-weight: 700;
`

const Input = styled.input `
  border: none;
  border-radius: 12px;
  height: 40px;
  padding: 0 12px;
  width: 240px;
  background-color: white;
`
export {
  FormStyled, 
  Label,
  Button,
  Input
};
