import styled from "styled-components";
import media from "../../../constants/media.js";

export const Container = styled.div`
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  padding-bottom: 12px;
  grid-column: ${props => (props.width ? "1 / 3" : null)};

  ${media.mobile`
    grid-column: 1 / 3;
  `};
`;

export const Field = styled.input`
  background: #2b2e32;
  border: 1px solid #4a4d52;
  border-radius: 4px;
  padding-top: 16px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  font-family: Inter-Regular;
  font-size: 16px;
  color: #ffffff;
  line-height: 26px;
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
