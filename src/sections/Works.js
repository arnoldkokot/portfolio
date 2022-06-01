import styled from "styled-components";
import { Container, List, Link } from "../components";
import content from "../assets/content.json";

const ListHeader = styled.div`
  height: 84px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export default function Component() {
  return (
    <Container>
      <ListHeader>
        <p>Selected Works</p>
        <Link external href={content.github}>
          Github
        </Link>
      </ListHeader>
      <List elements={content.projects} />
    </Container>
  );
}
