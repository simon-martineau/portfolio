import baseStyled, { ThemedStyledInterface } from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    main: string;
    mainBg: string;
    textColor: string;
  }
}

export const theme = {
  main: "#2eafc0",
  mainBg: "#06101b",
  textColor: "#ddd",
};

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
