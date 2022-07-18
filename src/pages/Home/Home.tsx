import { FC } from "react";

// generic components
import Section from "../../components/Section";

// domain
import DesignHeader from "./components/DesignHeader";
import Welcome from "./components/Welcome";
import Team from "./components/Team";

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
  </>
);

export default Home;
