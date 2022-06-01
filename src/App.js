import { Parallax, ParallaxLayer } from "@react-spring/parallax";

import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import "./assets/styles/link.css";
import "./assets/styles/text.css";
import { Contact } from "./components";
import Hero from "./sections/Hero";

function App() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer
        offset={0}
        speed={0.25}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Hero />
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={1}
        factor={1}
        style={{
          backgroundColor: "yellow",
        }}
      >
        <div>Projects secion</div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.5}
        speed={1}
        factor={0.25}
        style={{
          backgroundColor: "red",
        }}
      >
        <Contact />
      </ParallaxLayer>
    </Parallax>
  );
}

export default App;
