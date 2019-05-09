import styled from "styled-components";
import media from "../../../constants/media.js";
import { foreground } from "../../../constants/colors.js";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${foreground};
  display: grid;
  grid-template-columns: 360px 1fr;
  position: fixed;
  align-items: center;
  justify-content: center;

  ${media.laptop`
    grid-template-columns: 100%;
  `}
`;
