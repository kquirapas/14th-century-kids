import { FC, useRef } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../constants";

// generic components
import Quiz from "./Quiz";

type Props = {
  text: string;
};

const VerifyButton: FC<Props> = ({ text }) => {
  const overlayRef = useRef<HTMLElement>(null);
  const verifyButtonRef = useRef<HTMLElement>(null);

  const overlay = () => {
    if (overlayRef.current && verifyButtonRef.current) {
      overlayRef.current.classList.toggle("fade-in");
      overlayRef.current.classList.toggle("toggle-display");
      verifyButtonRef.current.classList.toggle("toggle-button-display");
    }
  };

  return (
    <StyledScope>
      <StyledOverlay ref={overlayRef}>
        <StyledVerifyButton
          ref={verifyButtonRef}
          className="nav-text-size"
          onClick={overlay}
        >
          {text}
        </StyledVerifyButton>
        <section id="modal">
          <Quiz close={overlay} />
        </section>
      </StyledOverlay>
    </StyledScope>
  );
};

const StyledScope = styled.div`
  @keyframes fade-in {
    from {
      opacity: 0;
    }

    to {
      opacity: 100%;
    }
  }

  @keyframes fade-out {
    from {
      opacity: 100%;
    }

    to {
      opacity: 0;
    }
  }

  .fade-in {
    animation-name: fade-in;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }

  .fade-out {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
  }

  display: inline;

  .toggle-button-display {
    display: none;
  }

  .toggle-display {
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;

    #modal {
      display: block;
    }
  }
`;

const StyledOverlay = styled.main`
  display: inline;

  #modal {
    position: relative;
    width: 100%;
    max-width: 700px;
    display: none;
  }
`;

const StyledVerifyButton = styled.span`
  background-color: ${Colors.LIGHTBLUE};
  padding: 0.7em 1em;
  border-radius: 1em;

  &:hover {
    background-color: ${Colors.DARKBLUE};
    cursor: url("assets/cursor/32x32 FROG CURSOR b.png"), auto;
  }
`;

export default VerifyButton;
