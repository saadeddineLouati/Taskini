import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;

    * {
      box-sizing: inherit;
    }
  }

  body {
    background: linear-gradient(45deg, #8A2387, #E94057,#F27121);
    font-family: sans-serif;
    height:100vh
    margin: 0;
  }

  button {
    appearance: none;
    background: none;
    border: 0;
    cursor: pointer;
    font-size: 1rem;
    padding: 0;
  }
`;
