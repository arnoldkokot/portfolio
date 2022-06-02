import styled from "styled-components";
import { links } from "../assets/content";
import { Container, Label, Link } from "../components";

const FooterContainer = styled(Container)`
  padding: 90px 0;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Label>
        <Link external href={links.portfolio}>
          Designed & Created by Arnold Kokot
        </Link>
      </Label>
    </FooterContainer>
  );
}
