import styled from "styled-components";
import { Error as ErrorLabel } from "../../../constants/type.js";

export const Error = styled(ErrorLabel)``;

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
`;

export const Field = styled.textarea.attrs({
  type: "password",
  rows: 4
})`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  background: #2b2e32;
  border: 1px solid #4a4d52;
  border-radius: 4px;
  padding: 16px;
  font-family: Inter-Regular;
  font-size: 16px;
  color: #ffffff;
  line-height: 26px;
  resize: none;
  outline: none;
  transition: 500ms;

  &:focus {
    border: 1px solid #5c5f63;
    transition: 500ms;
  }

  &::placeholder {
    font-family: Inter-Regular;
    font-size: 16px;
    color: #8a8d90;
    line-height: 26px;
  }
`;

export const Labels = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;
