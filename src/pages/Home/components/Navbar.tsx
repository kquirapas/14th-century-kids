// package imports
import { FC } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../../../constants";

// generic components
import AnchorLink from "../../../components/AnchorLink";

// domain components

// Text : Anchor
const NAVIGATIONS = {
  TEAM: "#team",
  OPENSEA: "#",
  FAQ: "#",
  TWITTER: "https://twitter.com/14thcenturykids?s=20&t=HnZsZ_VPHqF244Dvu7r0Qg",
  DISCORD: "https://discord.gg/MHfs6tBa2d",
};

type NavKeys = keyof typeof NAVIGATIONS;

const Navbar: FC = () => (
  <>
    <StyledNav>
      <StyledLogo
        src="assets/logo/14th CENTURY KIDS LOGO 3.png"
        alt="14th Century Kids Logo"
      ></StyledLogo>
      <StyledRight>
        {Object.keys(NAVIGATIONS).map((e, idx) => (
          <AnchorLink key={idx} anchor={NAVIGATIONS[e as NavKeys]}>
            {<span className="nav-text-size">{e}</span>}
          </AnchorLink>
        ))}
      </StyledRight>
    </StyledNav>
  </>
);

const StyledNav = styled.nav`
  z-index: 10;
  width: 100%;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledLogo = styled.img`
  width: 15em;
`;

const StyledRight = styled.div`
  span {
    margin-left: 2em;
    color: ${Colors.WHITE};
    font-family: Futura;
  }
`;

export default Navbar;
