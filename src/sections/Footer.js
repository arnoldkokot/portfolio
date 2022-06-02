import styled from "styled-components";
import { animated, useSpring } from "@react-spring/web";

import { links } from "../assets/content";

const Wrapper = styled(animated.div)`
  width: 320px;
  margin: 25px auto;

  padding: 25px 0;
  text-align: center;

  font-size: 0.5625rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export default function Footer() {
  const [{ opacity }, api] = useSpring(() => ({ opacity: 0.5 }));

  return (
    <a href={links.portfolio} target="_blank" rel="noreferrer">
      <Wrapper
        style={{ opacity }}
        onMouseEnter={() => api.start({ opacity: 1 })}
        onMouseLeave={() => api.start({ opacity: 0.5 })}
      >
        Designed & Created by Arnold Kokot
      </Wrapper>
    </a>
  );
}
