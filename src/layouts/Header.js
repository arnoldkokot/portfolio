import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header>
      <Link to="/">Arnold Kokot</Link>
      <nav>
        <a href="/">Github</a>
        <a href="/">Resume</a>
      </nav>
    </header>
  );
}
export default Header;
