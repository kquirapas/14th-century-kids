import { createGlobalStyle } from "styled-components";

const Colors = {
  WHITE: "#FFFFFF",
  BLACK: "#211715",
  DIM: "rgba(0, 0, 0, 0.2)",
  LIGHTGREEN: "#5ed19d",
  DARKGREEN: "#4da189",
  BLUEGREEN: "#126b75",
  LIGHTBLUE: "#2cb8db",
  DARKBLUE: "#1386b0",
};

const GlobalStyle = createGlobalStyle`
  * {
    cursor: url("assets/cursor/FROG CURSOR.png"), auto;
    margin: 0;
    padding: 0;
  }

  html, body {
    min-height: 100vh;
    background: rgb(77,161,137);
    background: linear-gradient(0deg, rgba(77,161,137,1) 0%, rgba(94,209,157,1) 68%); 
    
    // base font-size
    font-size: 16px;
  }

  .header-text-size {
    font-size: 6em;

    @media only screen and (max-width: 768px) {
      text-wrap: break-word;
      font-size: 4em;
    }
  }

  .subheader-text-size {
    font-size: 2em;

    @media only screen and (max-width: 768px) {
      text-wrap: break-word;
      font-size: 4em;
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
  }

  .secondary-text-size {
    font-size: 0.8em;
  }
`;

export { Colors, GlobalStyle };
