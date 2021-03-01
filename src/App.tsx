import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyle } from "./GlobalStyle";

import LandingPage from "./components/LandingPage";
import ProjectsSection from "./components/ProjectSection";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LandingPage />
      <ProjectsSection />
    </ThemeProvider>
  );
}

export default App;
