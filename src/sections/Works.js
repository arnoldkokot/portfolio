import { useState } from "react";
import "./Works.css";

import works from "../works.json";

// countedCategories is an object with categories as keys, and their count in "works" array above as values.
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
    {}
  );

//https://codesandbox.io/s/github/pmndrs/react-spring/tree/master/demo/src/sandboxes/list-reordering
function Works() {
  const [filtered, setFiltered] = useState(works);

  return (
    <section id="works">
      <div className="container">
        <div className="filters">
          <div onClick={() => setFiltered(works)}>
            All
            <small>{works.length}</small>
          </div>

          {Object.entries(countedCategories).map(([category, count]) => (
            <div
              onClick={() =>
                setFiltered(
                  works.filter((work) => work.categories.includes(category))
                )
              }
              key={category}
            >
              {category}
              <small>{count}</small>
            </div>
          ))}

          <p>Projects</p>
        </div>
        {filtered.map(({ title, categories }) => (
          <a className="project" href="/" key={title}>
            <p>{title}</p>
            <label>{categories.join(", ")}</label>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Works;
