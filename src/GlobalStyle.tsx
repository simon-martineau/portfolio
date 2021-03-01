import { createGlobalStyle } from "styled-components";
import { Theme } from "./Theme";

interface IGlobalStyleProps {
  theme: Theme;
}

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props: IGlobalStyleProps) => props.theme.mainBg};
    font-family: "Overlock", "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    margin: 0;
  }
`;
