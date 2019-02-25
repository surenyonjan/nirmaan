import { palette } from "../styles/palette";
import styled from "styled-components";
import { fontFamilies } from "../styles/fonts";

export const Input = styled.input`
  border: 1px solid ${palette.GREY_BORDER_LIGHT};
  height: 29px;
  padding: 0 10px;
  font-family: ${fontFamilies.MONOSPACE};
  outline: none;
  width: 500px;
  font-size: 18px;
`;

export const InlineForm = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;
