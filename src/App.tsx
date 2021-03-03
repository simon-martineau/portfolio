import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./Theme";
import { GlobalStyle } from "./GlobalStyle";

import LandingPage from "./components/LandingPage";
import ProjectsSection from "./components/ProjectSection";
import { ImageViewContextProvider } from "./ImageViewContext";
import ImageViewer from "./components/ImageViewer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ImageViewContextProvider>
        <ImageViewer />
        <GlobalStyle />
        <LandingPage />
        <ProjectsSection />
      </ImageViewContextProvider>
    </ThemeProvider>
  );
}

export default App;
