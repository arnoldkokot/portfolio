import Works from "./sections/Works";
import Contact from "./sections/Contact";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import Nav from "./sections/Nav";
import Project from "./components/Project";
import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Nav />
      <main>
        <Routes>
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
          <Route path="/project/:url" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
