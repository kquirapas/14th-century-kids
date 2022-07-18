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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBackground = styled.img`
  z-index: 0;
  width: 100%;
  min-width: 1080px;
`;

const StyledHeader = styled.header`
  height: 100vh;
  position: absolute;
  top: 0;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;

  aside {
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
    }

    p {
      font-family: Futura;
      color: white;
    }
  }
`;

export { StyledHeader, StyledBackground, StyledDesignHeader, StyledLoading };
