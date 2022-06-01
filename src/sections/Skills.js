import styled from "styled-components";
import { Container } from "../components";

const SkillContainer = styled(Container)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  row-gap: 36px;
  @media (min-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr 3fr;
  }
`;

const Title = styled.h1`
  font-size: max(1.2vw, 24px);
  line-height: 1.6;
  font-weight: 300;
  grid-column: 1 / 4;
`;

const Skills = styled.div`
  font-size: 16px;
  line-height: 1.4;
  grid-row: 2;
`;

const Summary = styled.p`
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 10px;
`;

export default function Component() {
  return (
    <SkillContainer>
      <Title>
        Currently in love with web development, focused on accessibility,
        simplicity and security. Here are my favourite tools.
      </Title>
      <Skills>
        <Summary>Frontend</Summary>
        JavaScript
        <br />
        HTML & CSS
        <br />
        React
      </Skills>

      <Skills>
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
      </Skills>
      <Skills>
        <Summary>Other</Summary>
        GIT
        <br />
        UNIX
        <br />
        Figma
      </Skills>
    </SkillContainer>
  );
}
