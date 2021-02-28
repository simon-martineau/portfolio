import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import LandingPage from "./components/LandingPage";
import { GlobalStyle } from "./GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
      <div style={{ height: "1000px" }}></div>
    </ThemeProvider>
  );
}

export default App;
