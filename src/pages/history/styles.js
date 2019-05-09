import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: pink;
`;

export const Row = styled.div`
  height: auto;
  display: flex;
  width: 100%;
  margin-bottom: 12px;
`;

export const Cell = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 0px 4px 4px 0x;
  padding: 16px;
  border-right: none;
`;

export const State = styled.div`
  width: 16px;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a4048;
  border-radius: 4px 0px 0px 4px;
  border-right: none;
  background: ${props => props.status};
`;

export const Status = styled.div`
  transform: rotate(-90deg);
  font-family: Inter-SemiBold;
  font-size: 10px;
  color: #2b2e32;
  letter-spacing: 0;
  text-align: center;
  line-height: 16px;
  text-transform: uppercase;
`;

export const Value = styled.div`
  font-family: Inter-SemiBold;
  font-size: 16px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  text-align: ${props => props.alignment};
`;

export const Label = styled.div`
  font-family: Inter-Regular;
  font-size: 13px;
  color: #8a8d90;
  line-height: 23px;
  text-align: ${props => props.alignment};
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
