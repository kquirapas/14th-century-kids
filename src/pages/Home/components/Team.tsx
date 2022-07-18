import { FC } from "react";

// constants, utils
import { getRandomInteger } from "../../../utils";

// generic components
import Body from "../../../components/Body";
import Floater from "../../../components/Floater";

// domain
import { TEAM_INFO } from "../modules/constants";
import ScrollThumbnail from "./ScrollThumbnail";

import {
  StyledOffset,
  StyledGrid,
  StyledImage,
  StyledBanner,
  StyledWelcome,
  StyledSection,
  StyledGhost,
} from "./styled/Team.styled";

const GHOST_INTENSITY = 3;
const GHOST_DURATION = 5;

const Team: FC = () => (
  <StyledWelcome>
    <StyledSection>
      <StyledGhost>
        <Floater
          delay={getRandomInteger(1, 5)}
          intensity={GHOST_INTENSITY}
          duration={GHOST_DURATION}
        >
          <img src="assets/floaties/GHOST.png" alt="Cloud" />
        </Floater>
      </StyledGhost>
      <Body>
        <StyledBanner>
          <StyledImage
            src="/assets/materials/BANNER 3_3.png"
            alt="Welcome Banner"
          />
        </StyledBanner>
        <StyledOffset>
          <StyledGrid>
            {TEAM_INFO.map((e, idx) => (
              <ScrollThumbnail
                key={idx}
                name={e.name}
                imgPath={e.img}
                position={e.position}
                description={e.description}
              />
            ))}
          </StyledGrid>
        </StyledOffset>
      </Body>
      <StyledGhost>
        <Floater
          delay={getRandomInteger(1, 5)}
          intensity={GHOST_INTENSITY}
          duration={GHOST_DURATION}
        >
          <img src="assets/floaties/GHOST 2.png" alt="Cloud" />
        </Floater>
      </StyledGhost>
    </StyledSection>
  </StyledWelcome>
);

export default Team;
