import styled from "styled-components";

// constants
import { Colors } from "../../../../constants";

// Desktop Navbar
const StyledNav = styled.nav`
  z-index: 1;
  width: 100%;
  position: absolute;
  top: 0;
  box-sizing: border-box;
  padding: 1em 2em;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const StyledLogo = styled.img`
  width: 15vw;
`;

const StyledRight = styled.div`
  span {
    margin-left: 2em;
    color: ${Colors.WHITE};
    font-family: Futura;
  }
`;

// Mobile Navbar
const StyledMobileNav = styled.nav`
  z-index: 1;
  height: 10vh;
  width: 100%;
  position: absolute;
  display: none;
  padding: 1em 0;
  box-sizing: border-box;

  // class for mobile nav hidden
  .open-mobile-nav {
    transform: translateX(0);
  }

  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledMobileHeading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1em;
  height: 100%;
  box-sizing: border-box;

  img {
    height: 10vh;
  }
`;

const StyledMobileLinks = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background-color: ${Colors.DARKGREEN};

  width: 50vw;

  transition: transform 0.1s ease-in-out;
  transform: translateX(-50vw);

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin: 1em;
    height: 10vh;
    text-align: center;
    height: 10vh;
  }

  span {
    box-sizing: border-box;
    padding: 1em;
    display: block;
    text-align: center;
    width: 100%;
    color: ${Colors.WHITE};
    font-family: Futura;
  }
`;

export {
  StyledNav,
  StyledLogo,
  StyledRight,
  StyledMobileNav,
  StyledMobileLinks,
  StyledMobileHeading,
};
