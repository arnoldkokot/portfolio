import styled from "styled-components";
import { Heading } from ".";
import { theme } from "../theme";

const LoaderContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.color.background};
`;

export default function Loader() {
  return (
    <LoaderContainer>
      <Heading>Welcome.</Heading>
    </LoaderContainer>
  );
}
