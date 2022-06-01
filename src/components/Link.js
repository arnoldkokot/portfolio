import styled from "styled-components";

const Link = styled.a`
  color: inherit;
  text-decoration: inherit;
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

export default function Component({ children, className, href, external }) {
  return (
    <Link
      className={className}
      href={href}
      target={external && "_blank"}
      rel={external && "noreferrer"}
    >
      {children}
    </Link>
  );
}
