import styled from "styled-components";

// constants, utils
import { Colors } from "../../../../constants";

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledCloud = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 50vh;
  }
`;

const StyledWelcome = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBanner = styled.div``;

const StyledImage = styled.img`
  box-sizing: border-box;
  padding: 2em;
  width: 100%;
`;

const StyledOffset = styled.div`
  position: relative;
  top: -10%;
`;

const StyledGrid = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 2em;

  img {
    border-radius: 1em;
    width: 100%;
    max-width: 30%;
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
