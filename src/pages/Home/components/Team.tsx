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
  StyledTeam,
  StyledSection,
  StyledGhost,
} from "./styled/Team.styled";

const GHOST_INTENSITY = 10;
const GHOST_DURATION = 10;

const Team: FC = () => (
  <StyledTeam>
    <StyledSection>
      <Body>
        <StyledGhost id="left-ghost">
          <Floater
            delay={getRandomInteger(1, 5)}
            intensity={GHOST_INTENSITY}
            duration={GHOST_DURATION}
          >
            <img src="assets/floaties/GHOST.png" alt="Cloud" />
          </Floater>
        </StyledGhost>
        <StyledBanner>
          <StyledImage
            src="assets/materials/BANNER 3_3.png"
            alt="Team Banner"
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
        <StyledGhost id="right-ghost">
          <Floater
            delay={getRandomInteger(1, 5)}
            intensity={GHOST_INTENSITY}
            duration={GHOST_DURATION}
          >
            <img src="assets/floaties/GHOST 2.png" alt="Cloud" />
          </Floater>
        </StyledGhost>{" "}
      </Body>
    </StyledSection>
  </StyledTeam>
);

export default Team;
