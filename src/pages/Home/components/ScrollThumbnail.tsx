import { FC, useRef } from "react";

import {
  StyledHolder,
  StyledImg,
  StyledClose,
  StyledScroll,
  StyledContent,
  StyledOverlay,
} from "./styled/ScrollThumbnail.styled";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLElement>(null);

  const toggle = () => {
    if (overlayRef.current && scrollRef.current) {
      console.log("open");
      overlayRef.current.classList.toggle("overlay-open");
      scrollRef.current.classList.toggle("scroll-open");
    }
  };

  return (
    <StyledHolder>
      <StyledImg onClick={toggle} src={imgPath} alt={`${name} Profile`} />
      <StyledOverlay ref={overlayRef}>
        <StyledScroll ref={scrollRef}>
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

export default ScrollThumbnail;
