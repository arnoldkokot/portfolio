import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Nav from "./sections/Nav";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="archives" element={<Works />} />
          <Route
            index
            element={
              <>
                <Hero />
                <Works />
                <Contact />
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
