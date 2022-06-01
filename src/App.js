import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Contact, Header, Hero, Works } from "./sections";

function App() {
  return (
    <>
      <Parallax pages={2}>
        <ParallaxLayer
          sticky={{ start: 0, end: 2 }}
          style={{
            height: 130,
          }}
        >
          <Header />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={1.5}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Hero />
          <Works />
        </ParallaxLayer>
        <ParallaxLayer offset={1.5} speed={2} factor={0.5}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
