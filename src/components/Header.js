import "./Header.css";
import hero from "../img/hero.png";
export default function Header() {
  return (
    <header>
      <div className="hero-img">
        <img src={hero} alt="Avatar" />
      </div>
      <div className="hero-content">
        <h1>We make it happen</h1>
        <div className="hero-nav">
          <a href=".">Projects</a>
          <a href=".">About</a>
          <a href=".">Contact</a>
        </div>
      </div>
      <p className="text">
        Leading digital agency with solid design and development expertise. We
        build readymade websites, mobile applications, and elaborate online
        business services.
      </p>
    </header>
  );
}
