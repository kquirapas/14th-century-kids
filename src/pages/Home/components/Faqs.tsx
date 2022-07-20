import { FC } from "react";
import styled from "styled-components";

// constants
import { Colors } from "../../../constants";

// generic components
import Body from "../../../components/Body";
import Toggle from "../../../components/Toggle";
import Spacer from "../../../components/Spacer";

const FAQS = [
  {
    text: "What is the 14th Century Kids?",
    body: "14th Century Kids is built by degens from Hawaii, the USA, and the Philippines. Our goal is to raise funds for Street Children in the US and PH. We are a low-budget project but that doesn't mean we're not going to deliver high-quality art. We're not here for the money, we're here to help and make a change in any way we can.",
  },
  {
    text: "What Blockchain is 14th Century Kids built on?",
    body: "Ethereum ERC-721",
  },
  {
    text: "Where can I mint?",
    body: (
      <p>
        Through our official partner{" "}
        <a
          href="https://whop.com/?fbclid=IwAR3USO__OboPodM0VuSzHpbXWDNR4K-MZLkVfYw6VoFIRGpIM-pjPRb47X8"
          target="_blank"
          rel="noreferrer noopener"
        >
          Whop.com
        </a>
      </p>
    ),
  },
  {
    text: "When is the mint?",
    body: "Late August or Early September",
  },
  {
    text: "How to become a Soldier (WL)?",
    body: "If deemed worthy.",
  },
  {
    text: "What is the total supply?",
    body: "1,111",
  },
];

const Faqs: FC = () => {
  return (
    <Body>
      <StyledSectionHeader className="header-text-size">
        FAQs
      </StyledSectionHeader>

      <Spacer size={1} />

      {FAQS.map((t, idx) => (
        <Toggle key={idx} text={t.text} body={t.body} />
      ))}
    </Body>
  );
};

const StyledSectionHeader = styled.h1`
  text-align: center;
  font-family: Deutsch;
  color: ${Colors.BLUEGREEN};
`;

export default Faqs;
