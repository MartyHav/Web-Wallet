import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  display: flex;
  width: auto;
`;

export const Cards = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 16px;

  ${media.laptop`
    grid-template-columns: 1fr;
  `}
`;

export const Overview = styled.div`

  display: none;

  ${media.desktop`
    display: none;
  `}

  ${media.laptop`
    display: none;
  `}

  ${media.tablet`
    display: inline;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b2e32;
    border: 1px solid #3a4048;
    border-radius: 4px;
    color: white;

  `}

  ${media.mobile`
    display: inline;
    height: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #2b2e32;
    border: 1px solid #3a4048;
    border-radius: 4px;
    color: white;
  `}
`;
