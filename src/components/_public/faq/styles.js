import styled from "styled-components";
import { Link } from "react-router-dom";
import media from "../../../constants/media.js";
import { link, link_hover } from "../../../constants/colors.js";

export const Container = styled.div`
  display: grid;
  height: auto;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 80px;
  background: ${props => (props.reverse ? "#2b2e34" : "#36393F")};

  justify-content: center;
  align-items: center;

  ${media.laptop`
    grid-template-columns: 1fr;
    padding: 80px 20px;
  `}
`;

export const Image = styled.div`
  min-height: 600px;
  border: 1px dashed #434446;
  width: auto;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  order: ${props => (props.reverse ? 2 : 1)};

  ${media.laptop`
    order: ${props => props.reverse || 2};
  `}
`;

export const Words = styled.div`
  height: 600px;
  width: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;
  order: ${props => (props.reverse ? 1 : 2)};

  ${media.laptop`
    order: ${props => props.reverse || 1};
    height: auto;
    justify-content: flex-start;
  `}
`;

export const LearnMore = styled(Link)`
  font-family: Inter-Regular;
  font-size: 16px;
  color: ${link};
  letter-spacing: 0;
  line-height: 26px;
  margin-top: 20px;
  transition: 1500ms;
  text-decoration: none;

  &:hover {
    color: ${link_hover};
    cursor: pointer;
    transition: 500ms;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #8a8d90;
  letter-spacing: 0;
  line-height: 26px;
  text-align: left;
  width: 100%;
`;
