// package imports
import { FC, useRef } from "react";

// generic components
import AnchorLink from "../../../components/AnchorLink";
import Icon from "../../../components/Icon";

import {
  StyledNav,
  StyledLogo,
  StyledRight,
  StyledMobileNav,
  StyledMobileLinks,
  StyledMobileHeading,
} from "./styled/Navbar.styled";

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

const Navbar: FC = () => {
  const mobileNavRef = useRef<HTMLDivElement>(null);

  const toggleMobileNav = () => {
    if (mobileNavRef.current) {
      console.log("toggle");
      mobileNavRef.current.classList.toggle("open-mobile-nav");
    }
  };

  return (
    <>
      <StyledNav>
        <StyledLogo
          src="assets/logo/14th CENTURY KIDS LOGO 3.png"
          alt="14th Century Kids Logo"
        />
        <StyledRight>
          {Object.keys(NAVIGATIONS).map((e, idx) => (
            <AnchorLink key={idx} anchor={NAVIGATIONS[e as NavKeys]}>
              {<span className="nav-text-size">{e}</span>}
            </AnchorLink>
          ))}
        </StyledRight>
      </StyledNav>

      <StyledMobileNav>
        <StyledMobileHeading>
          <img
            src="assets/logo/14th CENTURY KIDS LOGO 3.png"
            alt="14th Century Kids Logo"
          />
          <span onClick={toggleMobileNav}>
            <Icon symbol="menu" size={2} />
          </span>
        </StyledMobileHeading>
        <StyledMobileLinks ref={mobileNavRef}>
          <img
            src="assets/logo/14th CENTURY KIDS LOGO 3.png"
            alt="14th Century Kids Logo"
          />
          {Object.keys(NAVIGATIONS).map((e, idx) => (
            <AnchorLink key={idx} anchor={NAVIGATIONS[e as NavKeys]}>
              {<span className="nav-text-size">{e}</span>}
            </AnchorLink>
          ))}
        </StyledMobileLinks>
      </StyledMobileNav>
    </>
  );
};

export default Navbar;
