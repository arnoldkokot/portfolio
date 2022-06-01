import styled from "styled-components";

export default function Hero() {
  const Title = styled.h1`
    font-size: 1.5em;
    text-align: center;
    max-width: 1600px;
  `;

  return (
    <Title>
      Hi, I’m Arnold, a developer located in Cracow, currently studying Computer
      Science at AGH UST and part-time working at SMotor. I have a particular
      interest in web technologies, networking and video games.
    </Title>
  );
}
