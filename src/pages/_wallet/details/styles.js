import styled from "styled-components";
import media from "../../../constants/media.js";

export const Container = styled.div`
  grid-column: 1 / 3;
  margin-top: -20px;
`;

export const Chart = styled.div`
  grid-column: 1 / 3;
  height: 400px;
  width: 100%;
  border-radius: 4px;
  background: #2b2e32;
`;

export const History = styled.div`
  grid-column: 1 / 3;
  height: auto;
  width: 100%;
`;

export const Row = styled.div`
  display: grid;
  grid-column: 1 / 3;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr;
  height: auto;

  ${media.tablet`
    grid-template-columns: 1fr;
  `}
`;
