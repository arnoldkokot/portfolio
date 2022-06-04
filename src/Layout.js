import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Contact, Header, Hero, Works, Skills, Footer } from "./sections";

export default function Layout() {
  return (
    <Parallax pages={3}>
      <ParallaxLayer sticky={{ start: 0, end: 10 }} style={{ height: "130px" }}>
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
  );
}

/**
useEffect(() => {
  const container = ref.current.container.current;
  container.addEventListener("scroll", handleScroll);
  return () => {
    container.removeEventListener("scroll", handleScroll);
  };
}, []);

  const ref = useRef();

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    console.log("Attached scroll listener");
    ref.current.container.current.addEventListener("scroll", () =>
      setScrolled(ref.current.current > 50)
    );
  }, []);
*/
