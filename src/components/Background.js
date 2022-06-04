import styled from "styled-components";

// const Grain = styled.div`
//   position: fixed;
//   top: -50%;
//   left: -50%;
//   right: -50%;
//   bottom: -50%;
//   width: 200%;
//   height: 200vh;
//   background: transparent url("/images/noise-transparent.png") repeat 0 0;
//   background-repeat: repeat;
//   animation: bg-animation 0.2s infinite;
//   opacity: 0.9;
//   visibility: visible;

//   @keyframes bg-animation {
//     0% {
//       transform: translate(0, 0);
//     }
//     10% {
//       transform: translate(-5%, -5%);
//     }
//     20% {
//       transform: translate(-10%, 5%);
//     }
//     30% {
//       transform: translate(5%, -10%);
//     }
//     40% {
//       transform: translate(-5%, 15%);
//     }
//     50% {
//       transform: translate(-10%, 5%);
//     }
//     60% {
//       transform: translate(15%, 0);
//     }
//     70% {
//       transform: translate(0, 10%);
//     }
//     80% {
//       transform: translate(-15%, 0);
//     }
//     90% {
//       transform: translate(10%, 5%);
//     }
//     100% {
//       transform: translate(5%, 0);
//     }
//   }
// `;

const Lines = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-around;

  @keyframes drop {
    0% {
      top: -50%;
    }
    100% {
      top: 110%;
    }
  }
`;

const Line = styled.span`
  opacity: 0.45;
  width: 1px;
  background-color: ${({ theme }) => theme.color.border};

  height: 100%;

  position: relative;
`;

const AnimatedLine = styled(Line)`
  &::after {
    content: "";
    display: block;
    position: absolute;
    height: 15vh;
    width: 100%;
    top: -50%;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      ${({ theme }) => theme.color.text} 75%,
      ${({ theme }) => theme.color.text} 100%
    );
    animation: drop 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }
  &:nth-child(1)::after {
    animation-delay: 2s;
  }
  &:nth-child(2)::after {
    animation-delay: 0s;
  }
  &:nth-child(3)::after {
    animation-delay: 2.5s;
  }
  &:nth-child(4)::after {
    animation-delay: 4.5s;
  }
`;

export default function Background() {
  return (
    <>
      {/* <Grain /> */}
      <Lines>
        <AnimatedLine />
        <AnimatedLine />
        <AnimatedLine />
        <AnimatedLine />
      </Lines>
    </>
  );
}
