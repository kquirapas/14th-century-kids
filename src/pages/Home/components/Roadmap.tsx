import { FC, useRef } from "react";

import styled from "styled-components";

import { Colors } from "../../../constants";

import Body from "../../../components/Body";

const Roadmap: FC = () => {
  return (
    <Body>
      <StyledSectionHeader className="header-text-size">
        ROADMAP
      </StyledSectionHeader>
      <img src="assets/materials/ROADMAP.png" alt="Roadmap" />
    </Body>
  );
};

const StyledSectionHeader = styled.h1`
  text-align: center;
  font-family: Deutsch;
  color: ${Colors.BLUEGREEN};
`;

export default Roadmap;
