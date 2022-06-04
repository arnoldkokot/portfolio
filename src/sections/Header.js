import styled from "styled-components";
import { headerLinks } from "../assets/content";
import { Link } from "../components";
import { animated, useSprings } from "@react-spring/web";
import { theme } from "../theme";

const Container = styled.header`
  height: 100%;
  padding: 0 min(80px, 5%);

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 3vw;
`;

const Background = styled(animated.div)`
  padding: 10px;
  background-color: ${({ theme }) => theme.color.background};

  &:nth-of-type(2) {
    margin-left: auto;
  }
`;

export default function Header() {
  const springs = useSprings(
    headerLinks.length,
    headerLinks.map((item, index) => ({
      from: { opacity: 0, top: -20 },
      position: "relative",
      opacity: 1,
      top: 0,
      delay: theme.delay * index,
    }))
  );

  return (
    <Container>
      {springs.map((styles, i) => {
        const { alias, url } = headerLinks[i];
        return (
          <Background style={styles} key={alias}>
            <Link href={url} external={i !== 0}>
              {alias}
            </Link>
          </Background>
        );
      })}
    </Container>
  );
}
//<animated.div style={styles} />
