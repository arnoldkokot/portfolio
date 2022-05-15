import { useState } from "react";
import "./Works.css";

import works from "../works.json";
import { Link } from "react-router-dom";

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
            <p className="hover">All</p>
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
              <p className="hover">{category}</p>
              <small>{count}</small>
            </div>
          ))}

          <p>Selected Works</p>
        </div>
        {filtered.map(({ title, categories }) => (
          <Link
            className="project"
            to={"/project/" + title.replace(/\s+/g, "-").toLowerCase()}
            key={title}
          >
            <p>{title}</p>
            <label>{categories.join(", ")}</label>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Works;
