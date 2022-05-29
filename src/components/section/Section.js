import { useSpring, animated } from "@react-spring/web";
import { useRef } from "react";
import { useReveal } from "../../helpers";

import "./Section.css";

function Section({ children, hero }) {
  const ref = useRef();
  const revealed = useReveal(ref);
  const props = useSpring({
    opacity: revealed ? 1 : 0,
    delay: hero ? 800 : 300,
    position: "relative",
    bottom: revealed ? 0 : 30,
  });

  return (
    <animated.div style={props}>
      <section className={hero ? "hero" : null} ref={ref}>
        <div className="container">{children}</div>
      </section>
    </animated.div>
  );
}
export default Section;
