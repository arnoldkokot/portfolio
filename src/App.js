import "./Nav.css";
import "./Main.css";
import "./Header.css";
import "./Footer.css";

function App() {
  return (
    <>
      <nav>
        <a href="/">Arnold Kokot</a>
        <div>
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
      <main>
        <div className="container">Main</div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  );
}

export default App;
