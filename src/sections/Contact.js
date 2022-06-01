import styled from "styled-components";

import { Container, Link, LinkBox } from "../components";

const Mail = styled(Link)`
  font-size: max(2.8vw, 24px);
  margin: 25px 0;
`;

export default function Contact() {
  return (
    <Container>
      <p>Get in touch with me</p>
      <Mail>hello@arnoldkokot.com</Mail>
      <LinkBox>
        <Link>Github</Link>
        <Link>Twitter</Link>
        <Link>Instagram</Link>
      </LinkBox>
    </Container>
  );
}
