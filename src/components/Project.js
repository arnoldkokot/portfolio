import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { Label } from ".";

const Wrapper = styled.a`
  max-width: 650px;
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
`;

// Keep images at least 650 x 650
export default function Project({ title, img, tags, url }) {
  const [{ scale, filter }, api] = useSpring(() => ({
    scale: 1,
    filter: "brightness(50%)",
  }));

  return (
    <animated.div
      onMouseEnter={() =>
        api.start({ scale: 1.05, filter: "brightness(100%)" })
      }
      onMouseLeave={() => api.start({ scale: 1, filter: "brightness(50%)" })}
      style={{ scale }}
    >
      <Wrapper href={url} target="_blank">
        <animated.img style={{ filter }} src={img} alt={title} />

        <Description>
          <p>{title}</p>
          <Label>{tags.join(", ")}</Label>
        </Description>
      </Wrapper>
    </animated.div>
  );
}
