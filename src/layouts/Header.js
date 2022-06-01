import "./Header.css";

function Header() {
  return (
    <header>
      <a href="/">Arnold Kokot</a>
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
  );
}
export default Header;
