import { FC, ReactNode } from "react";

import styled from "styled-components";

type Props = {
  anchor: string;
  children: ReactNode | ReactNode[];
  target: string;
};

const AnchorLink: FC<Props> = ({ anchor, children, target }) => (
  <StyledAnchor href={anchor} target={target} rel="noreferrer noopener">
    {children}
  </StyledAnchor>
);

const StyledAnchor = styled.a`
  text-decoration: none;
  padding: 0;
  margin: 0;

  & > *:hover {
    cursor: url("assets/cursor/32x32 FROG CURSOR b.png"), auto;
  }
`;

export default AnchorLink;
