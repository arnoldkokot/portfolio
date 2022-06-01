import styled from "styled-components";

const Container = styled.div`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto 500px auto;
  padding: 0 min(5vw, 50px);
`;

export default function Component({ children, className }) {
  return <Container className={className}>{children}</Container>;
}
