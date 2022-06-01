import styled from "styled-components";
import { Container, List, Link } from "../components";

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
        <Link>Github</Link>
      </ListHeader>

      <List />
    </Container>
  );
}
