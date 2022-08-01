import { FC, useRef, useEffect } from "react";
import styled from "styled-components";

import { Colors } from "../constants";

type Props = {
  close: () => void;
};

// Bespoke Solution
// Not a Generic Component
const Quiz: FC<Props> = ({ close }) => {
  const castleVideoRef = useRef<HTMLVideoElement>(null);
  const failRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const page0Ref = useRef<HTMLDivElement>(null);
  const page1Ref = useRef<HTMLDivElement>(null);
  const page2Ref = useRef<HTMLDivElement>(null);

  const page1 = () => {
    if (page0Ref.current && page1Ref.current && page2Ref.current) {
      page0Ref.current.style.display = "none";
      page1Ref.current.style.display = "block";
      page2Ref.current.style.display = "none";
    }
  };

  const page2 = () => {
    if (page0Ref.current && page1Ref.current && page2Ref.current) {
      page0Ref.current.style.display = "none";
      page1Ref.current.style.display = "none";
      page2Ref.current.style.display = "block";
    }
  };

  const reset = () => {
    if (
      page0Ref.current &&
      page1Ref.current &&
      page2Ref.current &&
      failRef.current &&
      successRef.current
    ) {
      page0Ref.current.style.display = "block";
      page1Ref.current.style.display = "none";
      page2Ref.current.style.display = "none";

      failRef.current.style.display = "none";
      successRef.current.style.display = "none";
    }
  };

  const fail = () => {
    if (
      page0Ref.current &&
      page1Ref.current &&
      page2Ref.current &&
      failRef.current &&
      successRef.current
    ) {
      page0Ref.current.style.display = "none";
      page1Ref.current.style.display = "none";
      page2Ref.current.style.display = "none";

      failRef.current.style.display = "block";
      successRef.current.style.display = "none";
    }
  };

  const success = () => {
    if (
      page0Ref.current &&
      page1Ref.current &&
      page2Ref.current &&
      failRef.current &&
      successRef.current
    ) {
      page0Ref.current.style.display = "none";
      page1Ref.current.style.display = "none";
      page2Ref.current.style.display = "none";

      failRef.current.style.display = "none";
      successRef.current.style.display = "block";
    }
  };

  const enter = () => {
    if (castleVideoRef.current) {
      castleVideoRef.current.classList.toggle("enter");
      castleVideoRef.current.play();
    }
  };

  useEffect(() => {
    // on mount
    if (
      page0Ref.current &&
      page1Ref.current &&
      page2Ref.current &&
      failRef.current &&
      successRef.current
    ) {
      page0Ref.current.style.display = "block";
      page1Ref.current.style.display = "none";
      page2Ref.current.style.display = "none";

      failRef.current.style.display = "none";
      successRef.current.style.display = "none";
    }
  }, []);

  return (
    <StyledQuiz>
      <p id="close-btn" onClick={close}>
        Close
      </p>
      <StyledQuizPage ref={successRef} className="page-success">
        <StyledContent>
          <video ref={castleVideoRef} muted>
            <source src="assets/videos/Transition Only.mp4" type="video/mp4" />
          </video>
        </StyledContent>
        <p onClick={close} className="section-text-size">
          Use Code Below
        </p>
        <h1 className="header-text-size">thisisthebeginning</h1>
        <p onClick={enter} className="clickable section-text-size">
          Enter Castle
        </p>
      </StyledQuizPage>
      <StyledQuizPage ref={failRef} className="page-fail">
        <h1 className="header-text-size">Verification Failed</h1>
        <p onClick={reset} className="clickable section-text-size">
          Verify Again
        </p>
      </StyledQuizPage>
      <StyledQuizPage ref={page0Ref} className="page-0">
        <h1 className="header-text-size">Let's get you verified.</h1>
        <p onClick={page1} className="clickable section-text-size">
          Start Verification
        </p>
      </StyledQuizPage>
      <StyledQuizPage ref={page1Ref} className="page-1">
        <StyledContent>
          <video loop autoPlay muted>
            <source src="assets/videos/Night Animation.mp4" type="video/mp4" />
          </video>
        </StyledContent>
        <StyledQuestion className="section-text-size">
          When did King Philip die?
        </StyledQuestion>
        <StyledOptions>
          <span onClick={fail} className="option">
            A. Killed by Teaphanie in Rumble Royale
          </span>
          <span onClick={page2} className="option">
            B. November 29, 1314
          </span>
          <span onClick={fail} className="option">
            C. February 30, 420 A.D
          </span>
        </StyledOptions>
      </StyledQuizPage>
      <StyledQuizPage ref={page2Ref} className="page-2">
        <StyledContent>
          <video loop autoPlay muted>
            <source src="assets/videos/Day Animation.mp4" type="video/mp4" />
          </video>
        </StyledContent>
        <StyledQuestion className="section-text-size">
          How did King Philip die?
        </StyledQuestion>
        <StyledOptions>
          <span onClick={fail} className="option">
            A. Killed by The Regent
          </span>
          <span onClick={fail} className="option">
            B. Forgot to breathe
          </span>
          <span onClick={success} className="option">
            C. Stroke
          </span>
        </StyledOptions>
      </StyledQuizPage>
    </StyledQuiz>
  );
};

const StyledQuiz = styled.div`
  #close-btn {
    text-align: right;
    margin: 1em;
    color: ${Colors.WHITE};
    font-family: Futura;
  }

  .page-fail {
    background-color: ${Colors.LIGHTBLUE};
  }
`;

const StyledQuizPage = styled.div`
  border-radius: 10px;
  background-color: ${Colors.LIGHTGREEN};
  position: relative;
  padding: 2em;
  box-sizing: border-box;
  width: 100%;

  h1 {
    text-align: center;
    color: ${Colors.WHITE};
    font-family: Deutsch;
  }

  p {
    text-align: center;
    color: ${Colors.WHITE};
    font-family: Futura;
    color: ${Colors.WHITE};
  }

  .clickable:hover {
    text-decoration: underline;
  }
`;

const StyledContent = styled.div`
  position: relative;
  box-sizing: border-box;
  display: inline-block;
  width: 100%;

  video {
    width: 100%;
  }
`;

const StyledQuestion = styled.p`
  margin-top: 1em;
  text-align: center;
  color: white;
  font-family: Futura;
`;

const StyledOptions = styled.div`
  .option {
    font-family: Futura;
    box-sizing: border-box;
    padding: 1em;
    margin: 1em 0;
    text-align: center;
    display: block;
    width: 100%;
    border-radius: 100px;
    background-color: black;
  }
`;

export default Quiz;
