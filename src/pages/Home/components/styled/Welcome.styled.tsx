import styled from "styled-components";

// constants, utils
import { Colors } from "../../../../constants";

const StyledSection = styled.section`
  position: relative;
  max-width: 100vw;

  #left-cloud {
    top: 10vh;
    left: -40vw;
  }

  #right-cloud {
    top: 10vh;
    left: 40vw;
  }
`;

const StyledCloud = styled.div`
  width: 100%;
  z-index: 0;
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
  }
`;

const StyledWelcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBanner = styled.div`
  z-index: 1;
`;

const StyledImage = styled.img`
  box-sizing: border-box;
  width: 100%;
`;

const StyledOffset = styled.div`
  position: relative;
  top: -10%;

  @media only screen and (max-width: 480px) {
    top: -10%;
  }

  @media only screen and (max-width: 768px) {
    top: 0;
  }
`;

const StyledGrid = styled.div`
  z-index: 1;
  display: grid;
  column-gap: 1em;
  row-gap: 1em;

  grid-template-columns: 1fr 1fr;

  img {
    z-index: 1;
    border-radius: 1em;
    width: 100%;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledText = styled.p`
  box-sizing: border-box;
  margin: 2em 0;
  padding: 0 10vw;
  text-align: center;
  color: ${Colors.WHITE};
  font-family: Futura;
`;

export {
  StyledGrid,
  StyledSection,
  StyledCloud,
  StyledText,
  StyledImage,
  StyledBanner,
  StyledOffset,
  StyledWelcome,
};
