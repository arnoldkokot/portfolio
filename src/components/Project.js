import styled from "styled-components";
import { useSpring, animated } from "@react-spring/web";
import { Label } from ".";

const Wrapper = styled.a`
  max-width: 650px;
  & img {
    filter: brightness(50%);
  }
`;

const Description = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 70px;
`;

// Keep images 650px wide and square
export default function Project({ title, img, tags, url }) {
  const [{ scale }, api] = useSpring(() => ({ scale: 1 }));

  return (
    <animated.div
      style={{ scale }}
      onMouseEnter={() => api.start({ scale: 1.05 })}
      onMouseLeave={() => api.start({ scale: 1 })}
    >
      <Wrapper href={url} target="_blank">
        <img src={img} alt={title} />
        <Description>
          <p>{title}</p>
          <Label>{tags.join(", ")}</Label>
        </Description>
      </Wrapper>
    </animated.div>
  );
}
