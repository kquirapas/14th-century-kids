import { FC } from "react";
import styled from "styled-components";
// constants
import { Colors } from "../../../constants";

// domain
import Navbar from "./Navbar";

const DesignHeader: FC = () => (
  <StyledDesignHeader>
    <Navbar />
    <StyledBackground src="/assets/materials/WBSITE MENU no bgb.png" />
    <StyledHeader>
      <span></span>
      <aside>
        <h1 className="header-text-size">ARE YOU READY?</h1>
        <h2 className="subheader-text-size">ADVENTURE AWAITS YOU</h2>
        <p className="body-text-size">
          14th Century Kids does not only aim to tell a story through art, but
          also help less fortunate children in the Philippines and United States
          by feeding programs and conducting various activities to help them in
          the long run.
        </p>
      </aside>
    </StyledHeader>
  </StyledDesignHeader>
);

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

export default DesignHeader;
