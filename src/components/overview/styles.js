import styled from "styled-components";
import media from "../../constants/media.js";

export const Container = styled.div`
  height: auto;
  width: auto;
  background: #2b2e32;
  border: 1px solid #3a4048;
  border-radius: 4px;
  display: none;
  padding: 20px;

  ${media.laptop`
    display: inline;
    grid-column: 1 / 3;
    height: 260px;
  `}
`;

export const Amount = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 36px;
  color: white;
  font-weight: 800;
`;
