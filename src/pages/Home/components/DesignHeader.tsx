import { FC, useState } from "react";

// constants, utils
import { getRandomInteger } from "../../../utils";

// generic components
import Firefly from "../../../components/Firefly";
import {
  StyledHeader,
  StyledBackground,
  StyledDesignHeader,
} from "./styled/DesignHeader.styled";

// domain
import Navbar from "../../../components/Navbar";

const DesignHeader: FC = () => {
  const [loading, setLoading] = useState(true);
  const [headerWidth, setHeaderWidth] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);

  const setDimensions = (element: HTMLDivElement) => {
    if (element) {
      setHeaderWidth(element.clientWidth);
      setHeaderHeight(element.clientHeight);
      setLoading(false);
    }
  };

  return (
    <StyledDesignHeader>
      {!loading &&
        getFireflies(headerWidth, headerHeight).map((pos, idx) => (
          <Firefly
            key={idx}
            delay={getRandomInteger(1, 10)}
            size={getRandomInteger(2, 3)}
            duration={3}
            x={pos.x}
            y={pos.y}
          />
        ))}
      <Navbar />
      <StyledBackground src="assets/materials/WBSITE MENU no bgb.png" />
      <StyledHeader ref={setDimensions}>
        <span></span>
        <aside>
          <h1 className="header-text-size">ARE YOU READY?</h1>
          <h2 className="subheader-text-size">ADVENTURE AWAITS YOU</h2>
          <p className="body-text-size">
            14th Century Kids does not only aim to tell a story through art, but
            also help less fortunate children in the Philippines and United
            States by feeding programs and conducting various activities to help
            them in the long run.
          </p>
        </aside>
      </StyledHeader>
    </StyledDesignHeader>
  );
};

interface Coordinate {
  x: number;
  y: number;
}

function getFireflies(width: number, height: number) {
  const FIREFLIES: Coordinate[] = [
    {
      x: 0.4 * width,
      y: 0.1 * height,
    },
    {
      x: 0.9 * width,
      y: 0.2 * height,
    },
    {
      x: 0.7 * width,
      y: 0.3 * height,
    },
    {
      x: 0.2 * width,
      y: 0.35 * height,
    },
    {
      x: 0.5 * width,
      y: 0.35 * height,
    },
    {
      x: 0.45 * width,
      y: 0.3 * height,
    },
    {
      x: 0.25 * width,
      y: 0.2 * height,
    },
    {
      x: 0.05 * width,
      y: 0.2 * height,
    },
    {
      x: 0.01 * width,
      y: 0.53 * height,
    },
    {
      x: 0.3 * width,
      y: 0.45 * height,
    },
    {
      x: 0.54 * width,
      y: 0.5 * height,
    },
    {
      x: 0.9 * width,
      y: 0.6 * height,
    },
    {
      x: 0.7 * width,
      y: 0.8 * height,
    },
    {
      x: 0.2 * width,
      y: 0.73 * height,
    },
  ];

  return FIREFLIES;
}

export default DesignHeader;
