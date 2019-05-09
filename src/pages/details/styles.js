import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  height: 100%;
  display: flex;
  overflow: scroll;
`;

export const Chart = styled.div`
  height: 440px;
  width: auto;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ccc;
`;

export const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gaps: 20px;
  grid-row-gaps: 20px;
  margin-left: -8px;
  margin-right: -8px;

  ${media.tablet`
    grid-template-columns: 1fr;
    grid-row-gaps: 20px;
  `};
`;

export const Content = styled.div`
  height: auto;
  width: auto;
`;
