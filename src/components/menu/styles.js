import styled from "styled-components";
import media from "../../constants/media.js";
import { NavLink } from "react-router-dom";

const activeClassName = "selected";

export const Container = styled.div`
  height: 100%;
  background: #2b2e32;
  width: 30%;
  color: white;
  display: flex;
  justify-content: flex-start;
  position: fixed;
  flex-direction: column;
  border-right: 1px solid #3e4147;

  ${media.tablet`
    height: 50px;
    width: 100%;
    border-top: 1px solid #3E4147;
    bottom: 0;
 `};

  ${media.mobile`
    height: 50px;
    width: 100%;
 `};
`;

export const MenuColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;

  ${media.tablet`
    flex-direction: row;
  `}
`;

export const Item = styled(NavLink).attrs({
  activeClassName
})`
  height: 50px;
  color: #8a8d90;
  width: auto;
  background: clear;
  display: flex;
  align-items: center;
  padding-left: 20px;
  padding-top: 2px;
  padding-bottom: 2px;

  border-bottom: 1px solid #3e4147;
  text-decoration: none;

  &.${activeClassName} {
    border-left: 2px solid white;
    color: #fff;
  }

  ${media.tablet`
    width: 25%;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 0px;

    &.${activeClassName} {
      border-top: 2px solid white;
      color: #fff;
      border-left: none;
    }

  `}
`;

export const Balance = styled.div`
  height: 240px;
  display: flex;
  margin-top: 64px;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #3e4147;

  ${media.laptop`
    height: 200px;
  `};

  ${media.tablet`
    display: none;
  `};
`;
