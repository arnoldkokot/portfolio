import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";

import { theme, GlobalStyle } from "./theme";
import App from "./App";
import { Background } from "./components";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Background lines drops />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
