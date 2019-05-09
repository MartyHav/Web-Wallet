import styled from "styled-components";
import media from "../../constants/media.js";
import { foreground } from "../../constants/colors.js";

export const Container = styled.div`
  height: 100vh;
  margin-top: 64px;
  background: ${foreground};
  width: auto;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 20px;
  margin-left: 30%;

  ${media.tablet`
    width: 100%;
    height: 100vh;
    margin-left: 0;
    justify-content: flex-start;
    padding-bottom: 80px
 `};
`;

export const Row = styled.div`
  height 50px;
  width: auto;
  background: ${props => props.theme.dark.body_foreground};;
  margin: 20px;
  color: #8A8D90;
  display: flex;
  align-items: center;
  justify-content: center;
`;
