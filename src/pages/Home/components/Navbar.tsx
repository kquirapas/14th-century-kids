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
const NAVIGATIONS = [
  {
    name: "TEAM",
    url: "#team",
    target: "_self",
  },
  {
    name: "OPENSEA",
    url: "#",
    target: "_self",
  },
  {
    name: "FAQS",
    url: "#faqs",
    target: "_self",
  },
  {
    name: "TWITTER",
    url: "https://twitter.com/14thcenturykids?s=20&t=HnZsZ_VPHqF244Dvu7r0Qg",
    target: "_blank",
  },
  {
    name: "DISCORD",
    url: "https://discord.gg/MHfs6tBa2d",
    target: "_blank",
  },
];

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
          {NAVIGATIONS.map((e, idx) => (
            <AnchorLink key={idx} anchor={e.url} target={e.target}>
              {<span className="nav-text-size">{e.name}</span>}
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
          {NAVIGATIONS.map((e, idx) => (
            <AnchorLink key={idx} anchor={e.url} target={e.target}>
              {<span className="nav-text-size">{e.name}</span>}
            </AnchorLink>
          ))}
        </StyledMobileLinks>
      </StyledMobileNav>
    </>
  );
};

export default Navbar;
