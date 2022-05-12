import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Nav from "./sections/Nav";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Works />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
