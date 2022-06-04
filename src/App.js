import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Layout from "./Layout";
import { Loader, Background } from "./components";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const transitions = useTransition(loading, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(({ opacity }, item) =>
    item ? (
      <animated.div
        style={{
          opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
        }}
      >
        <Loader />
      </animated.div>
    ) : (
      <animated.div
        style={{
          opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
        }}
      >
        <Background lines drops />
        <Layout />
      </animated.div>
    )
  );
}

export default App;

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
