import styled from "styled-components";
import { background } from "../../../constants/colors.js";

export const Container = styled.div`
  height: 220px;
  width: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Wrapper = styled.div`
  height: 90%;
  width: 100%;
  border: 1px dashed ${background};
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: grey;
  margin-bottom: 12px;
`;
export const Image = styled.img`
  height: 90%;
`;
