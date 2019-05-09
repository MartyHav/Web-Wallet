import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: skyblue;
  display: grid;
  grid-template-columns: 380px 1fr;
  align-content: flex-start;

  ${media.laptop`
    grid-template-columns: 100%;
  `}
`;

export const Sidebar = styled.div`
  background: lavender;
  height: 100%;
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  ${media.laptop`
    order: 3;
    height: 58px;
  `}
`;

export const Content = styled.div`
  background: palegreen;
  margin-top: 64px;
  padding-bottom: 20px;
  overflow: scroll;
  display: grid;
  grid-gap: 20px;
  padding: 20px;
  grid-template-columns: 1fr 1fr;

  ${media.laptop`
    order: 1;
    height: auto;

    grid-template-columns: 1fr;
  `};
`;

export const Header = styled.div`
  height: 80px;
  width: 100%;
  background: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;
  grid-column: 1 / 3;

  ${media.laptop`
     grid-column: 1 / 2;
  `};
`;

export const Card = styled.div`
  height: 320px;
  width: 100%;
  background: yellow;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Status = styled.div`
  height: 30px;
  width: 100vw;
  background: palevioletred;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  bottom: 0;
  position: fixed;

  ${media.laptop`
    order: 2;
    bottom: 0;
    position: relative;
  `}
`;
