import { FC } from "react";

// constants, utils
import { getRandomInteger } from "../../../utils";

// generic components
import Body from "../../../components/Body";
import Floater from "../../../components/Floater";

import {
  StyledGrid,
  StyledSection,
  StyledCloud,
  StyledText,
  StyledImage,
  StyledBanner,
  StyledOffset,
  StyledWelcome,
} from "./styled/Welcome.styled";

const CLOUD_INTENSITY = 5;
const CLOUD_DURATION = 5;

const Welcome: FC = () => (
  <StyledWelcome>
    <StyledSection>
      <StyledCloud>
        <Floater
          delay={getRandomInteger(1, 5)}
          intensity={CLOUD_INTENSITY}
          duration={CLOUD_DURATION}
        >
          <img src="assets/floaties/CLOUD 1.png" alt="Cloud" />
        </Floater>
      </StyledCloud>
      <Body>
        <StyledBanner>
          <StyledImage
            src="assets/materials/BANNER 2_3.png"
            alt="Welcome Banner"
          />
        </StyledBanner>
        <StyledOffset>
          <StyledGrid>
            <img src="assets/king-and-queen/GHOST KING.png" alt="King" />
            <img src="assets/king-and-queen/QUEEN.png" alt="Queen" />
          </StyledGrid>
          <StyledText className="body-text-size">
            The kingdom is set for doom as the evil villain ‘The Regent’ has
            planned to overthrow the King & Queen. With the help of the rebels,
            he was able to kidnap them and take his place on the throne.{" "}
          </StyledText>
          <StyledText className="body-text-size">
            {" "}
            The village is not happy with their King & Queen being gone, so the
            soldiers & warriors set forth a plan to rescue their beloved King &
            Queen.
          </StyledText>
          <StyledText className="body-text-size">
            In order to fight The Regent & his Rebels they need the cadets in
            the battle with them. As cadets we need you to help us save our King
            & Queen. Are you ready to save the kingdom? Join us now!
          </StyledText>
        </StyledOffset>
      </Body>
      <StyledCloud>
        <Floater
          delay={getRandomInteger(1, 5)}
          intensity={CLOUD_INTENSITY}
          duration={CLOUD_DURATION}
        >
          <img src="assets/floaties/CLOUD 2.png" alt="Cloud" />
        </Floater>
      </StyledCloud>
    </StyledSection>
  </StyledWelcome>
);

export default Welcome;
