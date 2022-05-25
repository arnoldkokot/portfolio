import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">Arnold Kokot</Link>
      <nav className="gapped-box">
        <a
          href="https://github.com/arnoldkokot"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
        <a href="/">Resume</a>
      </nav>
    </header>
  );
}
export default Header;
