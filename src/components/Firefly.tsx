import { FC } from "react";
import styled from "styled-components";

import Floater from "./Floater";

type Props = {
  delay?: number;
  intensity?: number;
  duration?: number;
  size: number;
  x: number;
  y: number;
};

const DEFAULT_FLOAT_DURATION = 2;
const DEFAULT_FLOAT_INTENSITY = 1;

const Firefly: FC<Props> = ({ delay, intensity, duration, size, x, y }) => {
  return (
    <StyledHolder left={x} top={y}>
      <Floater
        delay={delay}
        duration={duration ? duration : DEFAULT_FLOAT_DURATION}
        intensity={intensity ? intensity : DEFAULT_FLOAT_INTENSITY}
      >
        <StyledImg
          width={size}
          src="assets/floaties/FIREFLY 1.png"
          alt="Firefly"
        />
      </Floater>
    </StyledHolder>
  );
};

const StyledHolder = styled.div<{ left: number; top: number }>`
  position: absolute;
  top: ${({ top }) => top}px;
  left: ${({ left }) => left}px;
`;

const StyledImg = styled.img<{ width: number }>`
  width: ${({ width }) => width}em;
  pointer-events: none;
  user-select: none;
`;

export default Firefly;
