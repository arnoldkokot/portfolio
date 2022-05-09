import "./Nav.css";
import "./Works.css";
import "./Header.css";
import "./Contact.css";
import "./Footer.css";

function App() {
  return (
    <>
      <nav>
        <a href="/">Arnold Kokot</a>
        <div className="nav-links">
          <a href="/">Archive</a>
          <a href="/">About</a>
        </div>
      </nav>
      <header>
        <div className="container">
          Hi, I’m Luzía a multidisciplinary graphic designer. I am currently
          working at StudioRoses. I have a particular interest and sensitivity
          for color, typography and photography. Some of the fields in which I
          stand out are branding, editorial and web design, among others.
        </div>
      </header>
      <section id="works">
        <div className="container">
          <div className="filters">
            <p>All</p>
            <p>Art Direction</p>
            <p>Illustration</p>
          </div>
          <a className="project" href="/">
            <p>Google</p>
            <label>Art Direction, CGI, Illustration</label>
          </a>
          <a className="project" href="/">
            <p>Google</p>
            <label>Art Direction, CGI, Illustration</label>
          </a>
          <a className="project" href="/">
            <p>Google</p>
            <label>Art Direction, CGI, Illustration</label>
          </a>
        </div>
      </section>
      <section id="contact">
        <div className="container">
          <p>Get in touch with me</p>
          <a href="/" className="mail">
            hello@arnoldkokot.com
          </a>
          <div className="contact-links">
            <a href="/">Twitter</a>
            <a href="/">Github</a>
            <a href="/">Instagram</a>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          Created by me. Code available <a href="/">here</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
