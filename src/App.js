import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home, Project } from "./pages";
import { Header, Footer } from "./layouts";
import { getByURL } from "./helpers";

import "./assets/styles/index.css";
import "./assets/styles/variables.css";
import "./assets/styles/link.css";
import "./assets/styles/text.css";
import "./assets/styles/loader.css";

function App({ hideLoader }) {
  useEffect(() => {
    hideLoader();
  }, [hideLoader]);

  let location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    const currentURL = location.pathname.substring(1);
    const project = getByURL(currentURL);

    document.title = "Arnold Kokot " + (project ? "- " + project.title : "");
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
