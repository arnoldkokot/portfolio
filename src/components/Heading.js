import styled from "styled-components";

const Styled = styled.h1`
  font-size: max(1.2vw, 24px);
  line-height: 1.6;
  font-weight: 300;
`;

export default function Heading({ children, className }) {
  return <Styled className={className}>{children}</Styled>;
}
