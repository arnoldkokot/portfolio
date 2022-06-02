import styled from "styled-components";

const Styled = styled.a`
  position: relative;

  &::before,
  &::after {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background: currentColor;
    transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
  }

  &::after {
    content: "";
    transform: scaleX(0);
    transform-origin: right center;
  }
  &:hover::after {
    transform: scaleX(1);
    transform-origin: left center;
  }
`;

export default function Link({ children, className, href, external }) {
  return (
    <Styled className={className} href={href} target={external && "_blank"}>
      {children}
    </Styled>
  );
}
