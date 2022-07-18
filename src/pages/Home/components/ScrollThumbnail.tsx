import { FC, useRef } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../../../constants";

type Props = {
  name: string;
  imgPath: string;
  position: string;
  description: string;
};

const ScrollThumbnail: FC<Props> = ({
  name,
  imgPath,
  position,
  description,
}) => {
  const scrollRef = useRef<HTMLElement>(null);

  const toggle = () => {
    if (scrollRef.current) {
      console.log("open");
      scrollRef.current.classList.toggle("scroll-open");
    }
  };

  return (
    <StyledHolder>
      <StyledImg onClick={toggle} src={imgPath} alt={`${name} Profile`} />
      <StyledOverlay ref={scrollRef}>
        <StyledScroll>
          <img src="assets/materials/SCROLL 3_3.png" alt="Scroll Paper" />
          <StyledContent>
            <h1>{name}</h1>
            <img src={imgPath} alt={`${name} Profile`} />
            <h2>{position}</h2>
            <p>{description}</p>
            <StyledClose onClick={toggle}>CLOSE SCROLL</StyledClose>
          </StyledContent>
        </StyledScroll>
      </StyledOverlay>
    </StyledHolder>
  );
};

const StyledHolder = styled.div`
  .scroll-open {
    display: flex;
  }
`;

const StyledOverlay = styled.main`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.DIM};
  width: 100vw;
`;

const StyledScroll = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  max-width: 900px;

  img {
    height: 100%;
  }
`;

const StyledImg = styled.img`
  border-radius: 100%;
  width: 100%;

  transition: transform 0.1s linear;

  &:hover {
    transform: translateY(-1em);
    cursor: url("assets/cursor/FROG CURSOR b.png"), auto;
  }
`;

const StyledContent = styled.div`
  margin-right: auto;
  margin-left: auto;
  left: 0;
  right: 0;
  top: 20%;
  width: 40%;
  position: absolute;
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
    height: 30vh;
  }

  h2 {
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
`;

const StyledClose = styled.span`
  border-radius: 1em;
  background-color: ${Colors.BLUEGREEN};
  color: ${Colors.WHITE};
  font-family: Futura;
  padding: 1em;
  font-size: 1.5vh;

  &:hover {
    cursor: url("assets/cursor/FROG CURSOR b.png"), auto;
  }
`;

export default ScrollThumbnail;
