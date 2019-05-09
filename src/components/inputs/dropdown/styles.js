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

export const Select = styled.div`
  position: relative;
  display: inline-block;
  background: #2b2e32;
  border: 1px solid #4a4d52;
  border-radius: 4px;
  grid-column: 1 / 3;

  transition: 500ms;

  &:focus {
    transition: 500ms;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const Wrapper = styled.ul`
  list-style-type: none;
  margin: 0;
  top: 62px;
  right: 0px;
  max-height: 200px;
  left: 0px;
  width: auto;
  position: absolute;
  grid-column: 1 / 3;
  border-radius: 4px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  background: #2b2e32;
  border: 1px solid #4a4d52;
  overflow: scroll;
`;

export const Labels = styled.div`
  height: auto;
  width: auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const Item = styled.li`
  padding: 16px;
  margin-left: -40px;
  width: calc(100% + 8px);
  border-bottom: 1px solid #343639;
  font-family: Inter-Regular;
  font-size: 16px;
  line-height: 26px;
  color: #ffffff;
  font-weight: regular;
  cursor: pointer;

  &:hover {
    cursor: pointer;
    background: #27292d;
  }

  &:last-child {
    border-bottom: none;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
`;

export const Ticker = styled.div`
  color: #8a8d90;
  margin-left: 12px;
`;

export const Name = styled.div`
  color: #ffffff;
`;

export const Button = styled.button`
    width: 100%;
    height: auto;
    background: #2b2e32;
    outline: none;
    grid-column: 1 / 3;
    padding: 20px;
    border-radius: 3px;
    font-size: 16px;
    color: white;
    display: flex;
    align-items: flex-start;
    border: none;
    cursor: pointer;



&:before{
    content:"";
    position: absolute;
    width: 0px;
    height: 0px;
    border: 7px solid;
    border-color: #5c5f63 transparent transparent transparent;
    right: 16px;
    top: 24px;
`;
