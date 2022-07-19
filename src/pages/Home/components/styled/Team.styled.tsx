import styled from "styled-components";

const StyledTeam = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledBanner = styled.div``;

const StyledImage = styled.img`
  box-sizing: border-box;
  width: 100%;
`;

const StyledOffset = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -15%;

  @media only screen and (max-width: 768px) {
    top: -10%;
  }

  @media only screen and (max-width: 480px) {
    top: 0;
  }
`;

const StyledGrid = styled.div`
  z-index: 2;
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3em;
  row-gap: 3em;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const StyledSection = styled.section`
  position: relative;
  max-width: 100vw;

  #left-ghost {
    top: 40vh;
    left: -40vw;
  }

  #right-ghost {
    top: 40vh;
    left: 40vw;
  }
`;

const StyledGhost = styled.div`
  z-index: 1;
  width: 100%;
  position: absolute;

  display: flex;
  justify-content: center;

  img {
    width: 20vw;
  }
`;

export {
  StyledOffset,
  StyledGrid,
  StyledImage,
  StyledBanner,
  StyledSection,
  StyledTeam,
  StyledGhost,
};
