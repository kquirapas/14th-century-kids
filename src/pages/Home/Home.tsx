import { FC } from "react";

// generic components
import Section from "../../components/Section";
import Spacer from "../../components/Spacer";

// domain
import DesignHeader from "./components/DesignHeader";
import Welcome from "./components/Welcome";
import Team from "./components/Team";
import Faqs from "./components/Faqs";

const Home: FC = () => (
  <>
    <Section anchor="header">
      <DesignHeader />
    </Section>
    <Section anchor="welcome">
      <Welcome />
    </Section>
    <Section anchor="team">
      <Team />
    </Section>
    <Section anchor="faqs">
      <Faqs />
    </Section>
    <Spacer size={10} />
  </>
);

export default Home;
