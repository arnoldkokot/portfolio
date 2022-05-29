import { Link } from "react-router-dom";
import { useSpring, animated } from "@react-spring/web";
import "./Header.css";

function Header() {
  const props = useSpring({
    opacity: 1,
    delay: 300,
  });

  return (
    <animated.div style={props}>
      <header>
        <Link to="/">Arnold Kokot</Link>
        <nav className="link-box">
          <a
            href="https://github.com/arnoldkokot"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
          <a
            href="https://drive.google.com/file/d/1sb_Bpk7cMzPelfwiP_65Eq167rNs1_UQ/view"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>
      </header>
    </animated.div>
  );
}
export default Header;
