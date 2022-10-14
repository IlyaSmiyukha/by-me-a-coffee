import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    background: '#e6e6e6',
    text: '#0d0d0d',
    containerBackground: '#ececec'
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme
