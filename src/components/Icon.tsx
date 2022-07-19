import { FC } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../constants";

type Props = {
  symbol: string;
  size: number;
};

const Icon: FC<Props> = ({ symbol, size }) => (
  <StyledSpan fontSize={size} className="material-symbols-rounded">
    {symbol}
  </StyledSpan>
);

const StyledSpan = styled.span<{ fontSize: number }>`
  color: ${Colors.WHITE};
  font-size: ${({ fontSize }) => fontSize}em;
`;

export default Icon;
