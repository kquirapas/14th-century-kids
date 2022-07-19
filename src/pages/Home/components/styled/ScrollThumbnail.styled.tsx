import styled from "styled-components";

// constants
import { Colors } from "../../../../constants";

const StyledHolder = styled.div`
  .overlay-open {
    z-index: 8;
    opacity: 1;
  }

  .scroll-open {
    z-index: 8;
    height: 100vh;
    opacity: 1;
  }
`;

const StyledOverlay = styled.main`
  z-index: 1;
  height: 100vh;
  opacity: 0;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.DIM};
  width: 100vw;
`;

const StyledScroll = styled.div`
  height: 0;
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  max-width: 900px;

  overflow: hidden;
  transition: all 0.3s ease-in-out;
  opacity: 0;

  img {
    height: 100%;
  }

  @media only screen and (max-width: 768px) {
    img {
      height: 80%;
    }
  }
`;

const StyledImg = styled.img`
  position: relative;
  z-index: 2;
  border-radius: 100%;
  width: 100%;

  transition: transform 0.1s linear;

  &:hover {
    transform: scale(1.1);
    cursor: url("assets/cursor/32x32 FROG CURSOR b.png"), auto;
    box-shadow: 2px -1px 94px -24px rgba(0, 0, 0, 1);
  }
`;

const StyledContent = styled.div`
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  top: 20%;
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 5vh;
    font-family: Deutsch;
    color: ${Colors.BLUEGREEN};
  }

  img {
    border-radius: 100%;
    height: 25vh;
  }

  h2 {
    margin-top: 1em;
    font-size: 3vh;
    font-family: Deutsch;
    color: ${Colors.BLUEGREEN};
  }

  p {
    font-size: 2vh;
    margin: 1em 0;
    text-align: center;
    font-family: Futura;
    color: ${Colors.BLUEGREEN};
  }

  @media only screen and (max-width: 768px) {
    width: 50%;
    top: 15%;

    img {
      border-radius: 100%;
      height: 15vh;
    }
  }

  @media only screen and (max-width: 480px) {
    width: 60%;
  }
`;

const StyledClose = styled.span`
  border-radius: 1em;
  background-color: ${Colors.BLUEGREEN};
  color: ${Colors.WHITE};
  font-family: Futura;
  padding: 1em;
  font-size: 1.5vh;

  &:hover {
    cursor: url("assets/cursor/32x32 FROG CURSOR b.png"), auto;
  }
`;

export {
  StyledHolder,
  StyledImg,
  StyledClose,
  StyledScroll,
  StyledContent,
  StyledOverlay,
};
