import VisibilitySensor from "react-visibility-sensor";
import { Spring, animated } from "@react-spring/web";

Reveal.defaultProps = {
  delay: 300,
};

export default function Reveal({ children, delay }) {
  return (
    <VisibilitySensor>
      {({ isVisible }) => (
        <Spring delay={delay} to={{ opacity: isVisible ? 1 : 0 }}>
          {(styles) => <animated.div style={styles}>{children}</animated.div>}
        </Spring>
      )}
    </VisibilitySensor>
  );
}
