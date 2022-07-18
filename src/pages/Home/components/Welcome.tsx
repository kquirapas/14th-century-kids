import { FC } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../../../constants";

// generic components
import Body from "../../../components/Body";

const Welcome: FC = () => (
  <StyledWelcome>
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
          planned to overthrow the King & Queen. With the help of the rebels, he
          was able to kidnap them and take his place on the throne.{" "}
        </StyledText>
        <StyledText className="body-text-size">
          {" "}
          The village is not happy with their King & Queen being gone, so the
          soldiers & warriors set forth a plan to rescue their beloved King &
          Queen.
        </StyledText>
        <StyledText className="body-text-size">
          In order to fight The Regent & his Rebels they need the cadets in the
          battle with them. As cadets we need you to help us save our King &
          Queen. Are you ready to save the kingdom? Join us now!
        </StyledText>
      </StyledOffset>
    </Body>
  </StyledWelcome>
);

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

export default Welcome;
