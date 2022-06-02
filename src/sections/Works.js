import styled from "styled-components";
import { Container, Heading, Project } from "../components";

import { works } from "../assets/content";

const LeftHeading = styled(Heading)`
  width: 50%;
  margin: 0 0 50px auto;
  text-align: right;
`;

const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: start;

  column-gap: 34px;
  row-gap: 34px;
  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export default function Works() {
  return (
    <Container>
      <LeftHeading>Selected Works</LeftHeading>
      <Wrapper>
        {Object.entries(works).map(([id, metadata]) => (
          <Project {...metadata} key={id} />
        ))}
      </Wrapper>
    </Container>
  );
}
