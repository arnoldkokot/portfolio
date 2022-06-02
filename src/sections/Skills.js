import styled from "styled-components";
import { Container, Heading } from "../components";

const SkillContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 36px;
  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr 3fr;
  }
`;

const Title = styled(Heading)`
  grid-column: 1 / 4;
`;

const Wrapper = styled.div`
  font-size: 16px;
  line-height: 1.5;
  grid-row: 2;
`;

const Summary = styled.p`
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export default function Skills() {
  return (
    <SkillContainer>
      <Title>
        Currently in love with web development, focused on accessibility,
        simplicity and security. Here are my favourite tools.
      </Title>

      <Wrapper>
        <Summary>Frontend</Summary>
        JavaScript
        <br />
        HTML & CSS
        <br />
        React
      </Wrapper>

      <Wrapper>
        <Summary>Backend</Summary>
        Node
        <br />
        Express
        <br />
        SQL
        <br />
        MongoDB
        <br />
        Nginx
      </Wrapper>

      <Wrapper>
        <Summary>Other</Summary>
        GIT
        <br />
        WSL2
        <br />
        Figma
      </Wrapper>
    </SkillContainer>
  );
}
