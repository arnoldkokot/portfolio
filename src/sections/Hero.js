import styled from "styled-components";

import { Container, Heading, Label, Reveal } from "../components";

const HeroHeading = styled(Heading)`
  text-align: center;
`;

const HeroContainer = styled(Container)`
  min-height: 100vh;
  display: flex;
  align-items: center;
  position: relative;
`;

const HeroLabel = styled(Label)`
  position: absolute;
  margin: 0 auto;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%, 0);
`;

export default function Hero() {
  return (
    <HeroContainer>
      <HeroHeading>
        Hi, I’m Arnold, a developer located in Cracow, currently studying
        Computer Science at AGH UST and part-time working at SMotor. I have a
        particular interest in web technologies, networking and video games.
      </HeroHeading>
      <HeroLabel>
        <Reveal>scroll down</Reveal>
      </HeroLabel>
    </HeroContainer>
  );
}
