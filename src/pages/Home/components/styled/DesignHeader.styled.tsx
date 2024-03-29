import styled from "styled-components";

// constants
import { Colors } from "../../../../constants";

const StyledLoading = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDesignHeader = styled.div`
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBackground = styled.img`
  width: 100%;
  min-width: 1080px;
`;

const StyledHeader = styled.header`
  height: 100vh;
  position: absolute;
  top: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;

  aside {
    box-sizing: border-box;
    padding: 0 6em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;

    h1 {
      font-family: Deutsch;
      color: ${Colors.LIGHTBLUE};
      text-shadow: 5px 4px 12px rgba(0, 0, 0, 1);
    }

    h2 {
      margin-top: 0.5em;
      margin-bottom: 1.5em;
      font-family: Futura;
      color: white;
      text-shadow: 5px 4px 12px rgba(0, 0, 0, 1);
    }

    p {
      font-family: Futura;
      color: white;
      text-shadow: 5px 4px 12px rgba(0, 0, 0, 1);
    }
  }

  @media only screen and (max-width: 1200px) {
    display: block;
    padding-top: 20vh;
  }

  @media only screen and (max-width: 896px) {
    display: block;
    padding-top: 20vh;
    grid-template-columns: 1fr;

    span {
      display: none;
    }

    aside {
      text-align: center;
      width: 100%;
    }
  }
`;

export { StyledHeader, StyledBackground, StyledDesignHeader, StyledLoading };
