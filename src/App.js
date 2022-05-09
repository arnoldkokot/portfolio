import "./Nav.css";
import "./Main.css";
import "./Header.css";
import "./Footer.css";

function App() {
  return (
    <>
      <nav>
        <div className="container">
          <a href="/">Arnold Kokot</a>
          <div className="nav-links">
            <a href="/">Archive</a>
            <a href="/">About</a>
          </div>
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
      <main>
        <div className="container">
          <div className="filters">
            <p>All</p>
            <p>Art Direction</p>
            <p>Illustration</p>
          </div>
          <div className="project">
            <p>Google</p>
            <p>Art Direction, CGI, Illustration</p>
          </div>
          <div className="project">
            <p>Google</p>
            <p>Art Direction, CGI, Illustration</p>
          </div>
          <div className="project">
            <p>Google</p>
            <p>Art Direction, CGI, Illustration</p>
          </div>
        </div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  );
}

export default App;
