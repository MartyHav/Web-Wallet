import styled from "styled-components";

export const Container = styled.div`
  height: auto;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 4px;
  padding: 16px;
`;

export const Title = styled.div`
  font-family: Inter-SemiBold;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 28px;
`;

export const Description = styled.div`
  font-family: Inter-Regular;
  font-size: 14px;
  color: #8a8d90;
`;
