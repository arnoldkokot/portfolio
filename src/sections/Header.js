import styled from "styled-components";
import { Link } from "../components";

import { links } from "../assets/content";

const HeaderContainer = styled.header`
  height: 100%;
  padding: 0 min(80px, 5%);

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  gap: 3em;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Link href="/">Arnold Kokot</Link>
      <Links>
        <Link external href={links.resume}>
          Resume
        </Link>
        <Link external href={links.github}>
          Github
        </Link>
      </Links>
    </HeaderContainer>
  );
}
