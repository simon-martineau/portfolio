import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  main: "#ffc700",
  mainBg: "#635341",
  textColor: "#eee",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
