import styled from "styled-components";
import media from "../../../constants/media.js";
import { NavLink } from "react-router-dom";
import { background, border } from "../../../constants/colors.js";

const activeClassName = "selected";

export const Container = styled.div`
  background: ${background};
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-right: 1px solid ${border};

  ${media.laptop`
    order: 3;
    height: 58px;
    width: 100%;
    padding-top: 0px;
    flex-direction: row;
    bottom: 0;
    position: fixed;
  `}
`;

export const Balance = styled.div`
  height: 240px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #3e4147;
  font-size: 32px;
  font-family: Inter-Bold;
  color: #ffffff;
  letter-spacing: 0;
  line-height: 30px;
  margin-top: 68px;

  ${media.laptop`
    display: none;
  `};
`;

export const Item = styled(NavLink).attrs({
  activeClassName
})`
  height: auto;
  color: #8a8d90;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 20px 20px;
  border-bottom: 1px solid ${border};
  text-decoration: none;
  font-size: 16px;

  &:hover {
    color: white;
  }

  &.${activeClassName} {
    border-left: 2px solid white;
    color: #fff;
  }

  ${media.laptop`
    width: 25%;
    height: auto;
    font-size: 13px;
    padding: 20px 8px;
    display: flex;
    background: none;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${border};
    border-right: 1px solid ${border};


    &.${activeClassName} {
      border-bottom: 1px solid white;
      color: #fff;
      border-left: none;
      font-weight: 600;
    }

  `}
`;
