import styled from "styled-components";

const Styled = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 min(5vw, 50px);
`;

export default function Container({ children, className }) {
  return <Styled className={className}>{children}</Styled>;
}
