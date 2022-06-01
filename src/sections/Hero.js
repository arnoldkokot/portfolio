import styled from "styled-components";

import { Container, Label } from "../components";

const Hero = styled.h1`
  font-size: 2.125em;
  line-height: 1.6;
  text-align: center;
  font-weight: 300;
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

export default function Component() {
  return (
    <HeroContainer>
      <Hero>
        Hi, I’m Arnold, a developer located in Cracow, currently studying
        Computer Science at AGH UST and part-time working at SMotor. I have a
        particular interest in web technologies, networking and video games.
      </Hero>
      <HeroLabel>scroll down</HeroLabel>
    </HeroContainer>
  );
}
