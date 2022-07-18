import { FC } from "react";

// generic components
import Body from "../../../components/Body";

// domain
import { TEAM_INFO } from "../modules/constants";
import ScrollThumbnail from "./ScrollThumbnail";

import {
  StyledOffset,
  StyledGrid,
  StyledImage,
  StyledBanner,
  StyledWelcome,
} from "./styled/Team.styled";

const Team: FC = () => (
  <StyledWelcome>
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
  </StyledWelcome>
);

export default Team;
