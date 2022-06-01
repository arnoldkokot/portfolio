import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Contact, Header, Hero, Works, Skills } from "./sections";

function App() {
  return (
    <>
      <Parallax pages={2.75}>
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
          speed={0.25}
          factor={2.25}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Hero />
          <Skills />
          <Works />
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={1} factor={0.5}>
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
