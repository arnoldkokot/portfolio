import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="container">
        <a href=".">Home</a>
        <div className="nav-button">
          <div></div>
          <div></div>
        </div>
        <div className="nav-content">
          <a href=".">Playground</a>
          <a href=".">About me</a>
          <a href=".">Connect</a>
        </div>
      </div>
    </nav>
  );
}
