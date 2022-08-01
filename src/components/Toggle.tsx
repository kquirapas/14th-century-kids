import { FC, useState, useRef, ReactNode } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../constants";

// generic components
import Icon from "./Icon";

type Props = {
  text: string;
  body: string | ReactNode;
};

const Toggle: FC<Props> = ({ text, body }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleBodyRef = useRef<HTMLElement>(null);

  const expand = () => {
    if (toggleBodyRef.current) {
      console.log("expanding");
      toggleBodyRef.current.classList.toggle("expand-toggle-body");
      setExpanded((prev) => !prev);
    }
  };

  return (
    <StyledToggle>
      <StyledToggleHeading className="body-text-size" onClick={expand}>
        <span>
          {expanded ? (
            <Icon symbol="expand_less" size={2} color={Colors.BLUEGREEN} />
          ) : (
            <Icon symbol="expand_more" size={2} color={Colors.BLUEGREEN} />
          )}
        </span>
        <p>{text}</p>
      </StyledToggleHeading>
      <StyledToggleBody ref={toggleBodyRef} className="body-text-size">
        <div>{body}</div>
      </StyledToggleBody>
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  position: relative;
  width: 100%;

  // class for expanding toggle body
  .expand-toggle-body {
    padding: 2em 0;
    height: 250px;
  }
`;

const StyledToggleHeading = styled.div`
  padding: 1em;

  display: flex;
  align-items: center;
  border-bottom: 2px solid ${Colors.BLUEGREEN};
  box-sizing: border-box;
  font-family: Futura;
  color: ${Colors.BLUEGREEN};

  & > * {
    display: flex;
    align-items: center;
  }
`;

const StyledToggleBody = styled.section`
  height: 0;
  transition: all 0.2s ease-in-out;

  position: relative;
  overflow: scroll;
  box-sizing: border-box;
  font-family: Futura;
  color: ${Colors.WHITE};

  a {
    color: white;

    &:hover {
      cursor: url("assets/cursor/32x32 FROG CURSOR b.png"), auto;
    }
  }
`;

export default Toggle;
