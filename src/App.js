import Navigation from "./Navigation";
export default function App() {
  return (
    <>
      <Navigation />
      <header>
        <div className="container">Header</div>
      </header>
      <main>
        <div className="container">
          <h1>H1 Text</h1>
          <h2>H2 Text</h2>
          <h3>H3 Text</h3>
          <p>Paragraph</p>
          <a href=".">Link</a>
        </div>
      </main>
      <footer>
        <div className="container">Footer</div>
      </footer>
    </>
  );
}
