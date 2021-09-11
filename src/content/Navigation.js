import { useState, useEffect } from "react";
import "./Navigation.css";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrolled(window.scrollY > 50));
  }, []);

  return (
    <header className={scrolled ? "scrolled" : ""}>
      <a href=".">ARNOLD KOKOT</a>
      <div className="nav-button" onClick={() => setExpanded(!expanded)}>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          className={expanded ? "hidden" : ""}
        >
          <g clipPath="url(#clip0)">
            <path
              d="M0.500244 3.5H15.5107"
              stroke="black"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M0.500244 8.5H15.5107"
              stroke="black"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
            <path
              d="M7.50513 13.5H15.5107"
              stroke="black"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="16.0111" height="16" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        <svg
          width="17"
          height="16"
          viewBox="0 0 17 16"
          fill="none"
          data-test="close-button"
          className={expanded ? "" : "hidden"}
        >
          <path
            d="M13.5096 2.5L2.50195 13.5"
            stroke="#212121"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
          <path
            d="M2.50195 2.5L13.5096 13.5"
            stroke="#212121"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </div>
      <nav className={expanded ? "expanded" : ""}>
        <a href=".">
          <span>01 |</span> HOME
        </a>
        <a href=".">
          <span>02 |</span> ABOUT ME
        </a>
        <a href=".">
          <span>03 |</span> PLAYGROUND
        </a>
        <a href="." className="box-link">
          Resume
        </a>
      </nav>
    </header>
  );
}
