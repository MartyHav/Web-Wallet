import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1px 1fr;
  border: 1px solid #4a4d52;
  height: auto;
  border-radius: 4px;
  align-items: center;
`;

export const Item = styled.div`
  height: auto;
  width: auto;
  font-family: Inter-Regular;
  font-size: 14px;
  color: ${props => (props.active ? "#fff" : "#8a8d90")};
  letter-spacing: 0;
  text-align: center;
  line-height: 24px;
  padding: 12px;
  border-bottom: 2px solid ${props => (props.active ? "#7289da" : "none")};

  &:hover {
    cursor: pointer;
  }
`;

export const Separator = styled.div`
  height: 60%;
  background: #4a4d52;
`;
