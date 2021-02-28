import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

interface IGlobalStyleProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: IGlobalStyleProps) => props.theme.mainBg}
  }
`;
