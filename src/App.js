import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import { Contact, Header, Hero, Works, Skills, Footer } from "./sections";
import { Background } from "./components";

function App() {
  return (
    <>
      <Background />
      <Parallax pages={3} id="parallax">
        <ParallaxLayer
          sticky={{ start: 0, end: 10 }}
          style={{
            height: 130,
          }}
        >
          <Header />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={4}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Hero />
          <Skills />
          <Works />
          <Contact />
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default App;
