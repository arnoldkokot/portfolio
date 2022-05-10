import "./Nav.css";
import "./Works.css";
import "./Header.css";
import "./Contact.css";
import "./Footer.css";

const works = [
  {
    title: "League tracker",
    categories: ["web app", "riot api"],
  },
  {
    title: "Daiji Music",
    categories: ["bot", "discord api"],
  },
  {
    title: "AGH Points",
    categories: ["web app"],
  },
];

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
          Hi, I’m Arnold, 23 years old developer located in Cracow. I am
          currently studying Computer Sciencs at AGH UST. I have a particular
          interest and sensitivity for color, typography and photography. Some
          of the fields in which I stand out are branding, editorial and web
          design, among others.
        </div>
      </header>
      <section id="works">
        <div className="container">
          <div className="filters">
            <p>All</p>
            <p>Art Direction</p>
            <p>Illustration</p>
          </div>
          {works.map(({ title, categories }) => (
            <a className="project" href="/">
              <p>{title}</p>
              <label>{categories.join(", ")}</label>
            </a>
          ))}
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
          Created & designed by me 😏 Code available&nbsp;<a href="/">here</a>.
        </div>
      </footer>
    </>
  );
}

export default App;
