import baseStyled, { ThemedStyledInterface } from "styled-components";

export const theme = {
  main: "#2eafc0",
  mainBg: "#06101b",
  textColor: "#ddd",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
