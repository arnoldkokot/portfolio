import "./Header.css";
import hero from "../img/hero.png";
export default function Header() {
  return (
    <header>
      <div className="container">
        <div className="hero-img">
          <img src={hero} alt="Avatar" />
        </div>
        <h1 className="hero-h1">We make it happen</h1>
        <div className="hero-nav">
          <a href=".">Websites</a>
          <a href=".">Applications</a>
          <a href=".">Branding</a>
        </div>
        <p className="hero-text">
          Leading digital agency with solid design and development expertise. We
          build readymade websites, mobile applications, and elaborate online
          business services.
        </p>
      </div>
    </header>
  );
}
