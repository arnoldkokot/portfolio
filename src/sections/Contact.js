import styled from "styled-components";
import { links } from "../assets/content";
import { Container, Link } from "../components";

const Mail = styled(Link)`
  display: inline-block;
  font-size: max(2.8vw, 24px);
  margin: 25px 0;
`;

const Links = styled.div`
  display: flex;
  gap: 3em;
`;

export default function Contact() {
  return (
    <Container>
      <p>Get in touch with me</p>
      <Mail href="mailto:hello@arnoldkokot.com">hello@arnoldkokot.com</Mail>
      <Links>
        <Link external href={links.github}>
          Github
        </Link>
        <Link external href={links.twitter}>
          Twitter
        </Link>
        <Link external href={links.instagram}>
          Instagram
        </Link>
      </Links>
    </Container>
  );
}
