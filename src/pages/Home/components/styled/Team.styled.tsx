import styled from "styled-components";

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
  display: flex;
  justify-content: center;
  position: relative;
  top: -15%;
`;

const StyledGrid = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 3em;
  row-gap: 3em;
`;

const StyledSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const StyledGhost = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  img {
    height: 50vh;
  }
`;

export {
  StyledOffset,
  StyledGrid,
  StyledImage,
  StyledBanner,
  StyledSection,
  StyledWelcome,
  StyledGhost,
};
