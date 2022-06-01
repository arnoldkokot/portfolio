import styled from "styled-components";

const LinkBox = styled.div`
  display: flex;
  gap: 3em;
`;

export default function Component({ children }) {
  return <LinkBox>{children}</LinkBox>;
}
