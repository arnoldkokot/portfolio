import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Home, Project } from "./pages";

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
          <Route index element={<Home />} />
          <Route path="/:url" element={<Project />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
