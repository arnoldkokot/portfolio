import styled from "styled-components";
import { Link, LinkBox } from "../components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  min-height: 130px;
  padding: 0 min(80px, 5%);
`;

export default function Component() {
  return (
    <Header>
      <Link>Arnold Kokot</Link>
      <LinkBox>
        <Link>Resume</Link>
        <Link>Github</Link>
      </LinkBox>
    </Header>
  );
}
