import styled from "styled-components";
import { Container, Heading, Label } from "../components";
import { animated, useSpring } from "@react-spring/web";
import { headerLinks } from "../assets/content";
import { theme } from "../theme";

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
  const text = useSpring({
    from: { opacity: 0, top: -20 },
    position: "relative",
    opacity: 1,
    top: 0,
    delay: headerLinks.length * theme.delay,
  });

  const label = useSpring({
    from: { opacity: 0, bottom: "10vh" },
    opacity: 1,
    bottom: "5vh",
    delay: (headerLinks.length + 1) * theme.delay,
  });

  return (
    <HeroContainer>
      <animated.div style={text}>
        <HeroHeading>
          Hi, I’m Arnold, a developer located in Cracow, currently studying
          Computer Science at AGH UST and part-time working at SMotor. I have a
          particular interest in web technologies, networking and video games.
        </HeroHeading>
      </animated.div>
      <animated.div style={label}>
        <HeroLabel>scroll down</HeroLabel>
      </animated.div>
    </HeroContainer>
  );
}
