import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const theme = {
  font: `"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
  color: {
    text: "#f5f5f5",
    background: "#111111",
    border: "#ffffff1a",
  },
};

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    color: ${({ theme }) => theme.color.text};
    background-color: ${({ theme }) => theme.color.background};
    font-family: ${({ theme }) => theme.font};
    font-weight: 300;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-moz-selection {
    color: ${({ theme }) => theme.color.background};
    background: ${({ theme }) => theme.color.text};
  }
  ::selection {
    color: ${({ theme }) => theme.color.background};
    background: ${({ theme }) => theme.color.text};
  }
  img {
    max-width: 100%;
    height: auto;
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
`;
