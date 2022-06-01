import styled from "styled-components";
import content from "../assets/content.json";
import { Container, Link, LinkBox } from "../components";

const Mail = styled(Link)`
  display: inline-block;
  font-size: max(2.8vw, 24px);
  margin: 25px 0;
`;

export default function Contact() {
  return (
    <Container>
      <p>Get in touch with me</p>
      <Mail href="mailto:hello@arnoldkokot.com">hello@arnoldkokot.com</Mail>
      <LinkBox>
        <Link external href={content.github}>
          Github
        </Link>
        <Link external href={content.twitter}>
          Twitter
        </Link>
        <Link external href={content.instagram}>
          Instagram
        </Link>
      </LinkBox>
    </Container>
  );
}
