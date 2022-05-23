/**
 * Selected project page
 *
 */

import { useParams } from "react-router-dom";
import { Section } from "../components";
import { getByURL } from "../helpers";

function Project() {
  let params = useParams();

  const { title, categories } = getByURL(params.url);

  return (
    <main>
      <Section hero>
        <h1>{title}</h1>
        <p>{categories.join(", ")}</p>
      </Section>
    </main>
  );
}

export default Project;
