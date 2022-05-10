import "./Nav.css";
import "./Works.css";
import "./Header.css";
import "./Contact.css";
import "./Footer.css";

const works = [
  {
    title: "League tracker",
    categories: ["Website", "API"],
  },
  {
    title: "Daiji Music",
    categories: ["Bot", "API"],
  },
  {
    title: "AGH Points",
    categories: ["Website"],
  },
];

// countedCategories is an object with categories as keys, and thier count in "works" array above as values.
// eg. { all: 3, website: 2, bot: 1 }
// it is used to display filter options with counters
const countedCategories = works
  .map((project) => project.categories)
  .flat()
  .reduce(
    (counter, category) => ({
      ...counter,
      [category]: (counter[category] || 0) + 1,
    }),
    { All: works.length }
  );

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
            {Object.entries(countedCategories).map(([category, count]) => (
              <div>
                {category}
                <small>{count}</small>
              </div>
            ))}
          </div>
          {works.map(({ title, categories }) => (
            <a className="project" href="/" key={title}>
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
