import styled from "styled-components";
import { Link, LinkBox } from "../components";

import content from "../assets/content.json";

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
      <Link href="/">Arnold Kokot</Link>
      <LinkBox>
        <Link external href={content.resume}>
          Resume
        </Link>
        <Link external href={content.github}>
          Github
        </Link>
      </LinkBox>
    </Header>
  );
}
