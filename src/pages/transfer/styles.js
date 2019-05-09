import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  overflow: scroll;
  background: pink;
`;

export const Content = styled.div`
  height: auto;
  width: auto;
`;

export const FormContainer = styled.div`
  width: auto;
  height: auto;
  margin-top: 16px;
  margin-left: 8px;
  margin-right: 8px;
  background: clear;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 16px;
  grid-row-gap: 8px;
`;

export const Information = styled.div`
  width: auto;
  height: auto;
  padding-left: 12px;
  padding-right: 12px;
  font-family: Inter-Regular;
  font-size: 13px;
  color: #8a8d90;
  line-height: 24px;
`;
