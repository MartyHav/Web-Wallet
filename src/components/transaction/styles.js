import styled from "styled-components";
import { background } from "../../constants/colors.js";

export const Container = styled.a`
  height: auto;
  display: grid;
  width: auto;
  grid-template-columns: 16px 1fr;
  margin-bottom: 20px;
  text-decoration: none;
  border-radius: 4px;
  background: ${background};
`;

export const Row = styled.div`
  height: auto;
  padding: 12px 20px;
  display: flex;
  width: auto;

  padding-left: 20px;
  padding-right: 20px;
`;

export const Cell = styled.div`
  height: auto;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 0px 4px 4px 0x;
  padding: 16px;
  border-right: none;
`;

export const State = styled.div`
  width: auto;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a4048;
  border-radius: 4px 0px 0px 4px;
  border-right: none;
  background: ${props => {
    switch (props.status) {
      case "pending":
        return "palevioletred";
      case "completed":
        return "#34d8ac";
      default:
    }
  }};
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
  font-size: 14px;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 24px;
  text-align: ${props => props.alignment};
`;

export const Label = styled.div`
  font-family: Inter-Regular;
  font-size: 12px;
  color: #8a8d90;
  line-height: 12px;
  text-align: ${props => props.alignment};
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 4px;
`;
