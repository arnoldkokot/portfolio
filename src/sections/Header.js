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

const Background = styled.div`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};
`;

const Links = styled.div`
  display: flex;
  gap: 1em;

  @media (min-width: 1020px) {
    gap: 3em;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Background>
        <Link href="/">Arnold Kokot</Link>
      </Background>
      <Links>
        <Background>
          <Link external href={links.resume}>
            Resume
          </Link>
        </Background>
        <Background>
          <Link external href={links.github}>
            Github
          </Link>
        </Background>
      </Links>
    </HeaderContainer>
  );
}
