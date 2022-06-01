import styled from "styled-components";

const Label = styled.label`
  opacity: 0.5;
  font-size: 0.5625rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;

export default function Component({ children, className }) {
  return <Label className={className}>{children}</Label>;
}
