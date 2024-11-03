import * as React from "react";
import { theme } from "../assets/theme";
import { GlobalStyle } from "../assets/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";

export const MainTemplate = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Navigation />
        {children}
        <Footer />
      </ThemeProvider>
    </>
  );
};
