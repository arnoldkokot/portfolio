/**
 * Selected project page
 *
 */

import { useParams } from "react-router-dom";
import { Section } from "../components";
import { getByURL } from "../helpers";

function Project() {
  let params = useParams();

  let project = getByURL(params.url);

  if (project === undefined)
    return (
      <main>
        <Section hero>
          <h1>Page not found</h1>
          <p>Sadly, content under provided url does not exist</p>
        </Section>
      </main>
    );

  let { title, description, images } = project;

  return (
    <main>
      <Section>
        <h1>{title}</h1>
        <p>{description}</p>
      </Section>
      <Section>
        {images.map((url) => (
          <img src={"images/" + url} alt={url} key={url} />
        ))}
      </Section>
    </main>
  );
}

export default Project;
