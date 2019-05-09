import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  border,
  foreground,
  background,
  button,
  foreground_hover
} from "../../constants/colors.js";

export const Container = styled.div`
  height: auto;
  width: 624px;
  flex-direction: column;
  margin: 20px;
  border: 1px solid ${border};
  border-radius: 4px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.05);
`;

export const Main = styled.div`
  background: ${foreground};
  border-radius: 2px 2px 0px 0px;
  height: auto;
  padding: 10px;
`;

export const Header = styled.div`
  height: auto;
  width: auto;
  padding: 20px;
  background: ${foreground};
  border-bottom: 1px solid ${border};
`;

export const Progress = styled.div`
  display: grid;
  background: ${background};
  height: 4px;
  width: 100%;
  margin-bottom: 16px;
`;

export const Step = styled.div`
  width: ${props =>
    (props.width === 1 ? "25%" : null) ||
    (props.width === 2 ? "50%" : null) ||
    (props.width === 3 ? "75%" : null) ||
    (props.width === 4 ? "100%" : null)};
  background: ${button};
  height: auto;
  border-radius: 4px;
`;

export const Body = styled.div`
  height: 266px;
  width: auto;
  margin: 10px;
`;

export const Buttons = styled.div`
  height: auto;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Submit = styled.button`
  background: #7289da;
  border-radius: 4px;
  font-family: Inter-Regular;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
  width: 106px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 500ms;
  border: none;

  &:hover {
    cursor: pointer;
    transition: 500ms;
    background: #5b6eae;
  }
`;

export const Back = styled.div`
  background: ${foreground};
  border-radius: 4px;
  font-family: Inter-Regular;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
  width: 106px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a4048;
  text-decoration: none;
  transition: 500ms;

  &:hover {
    cursor: pointer;
    background: ${foreground_hover};
    transition: 500ms;
  }
`;

export const Cancel = styled(Link)`
  background: ${foreground};
  border-radius: 4px;
  font-family: Inter-Regular;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 24px;
  width: 106px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #3a4048;
  text-decoration: none;
  transition: 500ms;

  &:hover {
    cursor: pointer;
    background: ${foreground_hover};
    transition: 500ms;
  }
`;

export const Footer = styled.div`
  height: 60px;
  border-top: 1px solid ${border};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: ${foreground};
  border-radius: 0px 0px 4px 4px;
`;

export const Route = styled(Link)`
  font-family: Inter-SemiBold;
  font-size: 14px;
  color: #fff;
  text-decoration: none;
  margin-left: 8px;
`;

export const Label = styled.div`
  font-family: Inter-Regular;
  font-size: 14px;
  color: #8a8d90;
  text-decoration: none;
`;
