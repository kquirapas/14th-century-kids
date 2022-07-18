import { createGlobalStyle } from "styled-components";

const Colors = {
  LightGreen: "#5ed19d",
  DarkGreen: "#4da189",
};

const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
`;

export { Colors, GlobalStyle };
