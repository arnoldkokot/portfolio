import styled from "styled-components";

const Styled = styled.label`
  opacity: 0.5;
  font-size: 0.5625rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export default function Label({ children, className }) {
  return <Styled className={className}>{children}</Styled>;
}
