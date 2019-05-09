import styled from "styled-components";
import { primary, secondary, background } from "../../constants/colors.js";
import media from "../../constants/media.js";

export const Container = styled.div`
  height: auto;
  width: auto;
  background: ${background};
  padding: 80px 20px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  ${media.laptop`
      grid-template-columns: 1fr 1fr;
  `}

  ${media.tablet`
      grid-template-columns: 1fr 1fr;
  `}
`;

export const Section = styled.div`
  height: auto;
`;

export const Title = styled.div`
  font-family: Inter-Medium;
  font-size: 18px;
  color: ${primary}
  letter-spacing: 0;
  text-align: center;
  line-height: 30px;
  margin-bottom: 12px;
`;

export const Link = styled.div`
font-family: Inter-Regular;
font-size: 16px;
color: ${secondary}
letter-spacing: 0;
text-align: center;
line-height: 26px;
`;
