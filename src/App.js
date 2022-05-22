import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home, Project } from "./pages";
import { Header, Footer } from "./layouts";

import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import "./assets/styles/link.css";
import "./assets/styles/text.css";

function App() {
  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/:url" element={<Project />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
