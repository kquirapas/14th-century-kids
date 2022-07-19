import { createGlobalStyle } from "styled-components";

const Colors = {
  WHITE: "#FFFFFF",
  BLACK: "#211715",
  DIM: "rgba(0, 0, 0, 0.7)",
  LIGHTGREEN: "#5ed19d",
  DARKGREEN: "#4da189",
  BLUEGREEN: "#126b75",
  LIGHTBLUE: "#2cb8db",
  DARKBLUE: "#1386b0",
};

// Usual breakpoints
// 480px
// 768px
// 896px
// 1200px

// @media only screen and (max-width: 1200px) {
// }
// @media only screen and (max-width: 896px) {
// }
//
// @media only screen and (max-width: 768px) {
// }
//
// @media only screen and (max-width: 480px) {
// }

const GlobalStyle = createGlobalStyle`
  * {
    cursor: url("assets/cursor/32x32 FROG CURSOR.png"), auto;
    margin: 0;
    padding: 0;
  }

  html, body {
    max-width: 100vw;
    overflow-x: hidden;
    min-height: 100vh;
    background: rgb(77,161,137);
    background: linear-gradient(0deg, rgba(77,161,137,1) 0%, rgba(94,209,157,1) 68%); 
    
    // base font-size
    font-size: 16px;
  }

  .header-text-size {
    font-size: 6em;

    @media only screen and (max-width: 896px) {
      text-wrap: break-word;
      font-size: 4em;
    }
  }

  .subheader-text-size {
    font-size: 2em;

    @media only screen and (max-width: 896px) {
      text-wrap: break-word;
      font-size: 1em;
    }
  }

  .nav-text-size {
    font-size: 1.2em;
  }

  .section-text-size {
    font-size: 2em;
  }

  .body-text-size {
    font-size: 1.3em;

    @media only screen and (max-width: 896px) {
      font-size: 1em;
    }
  }

  .secondary-text-size {
    font-size: 0.8em;
  }
`;

export { Colors, GlobalStyle };
