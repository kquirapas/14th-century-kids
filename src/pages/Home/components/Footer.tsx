import { FC } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../../../constants";

const Footer: FC = () => {
  return <StyledFooter></StyledFooter>;
};

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;

  p {
    color: ${Colors.BLUEGREEN};
    font-family: Futura;
  }
`;

export default Footer;
