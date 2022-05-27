/**
 * Selected project page
 *
 */

import { useParams, Link } from "react-router-dom";
import { Section, Gallery, Heading } from "../components";
import { getByURL } from "../helpers";

function Project() {
  let params = useParams();
  let project = getByURL(params.url);

  if (project === undefined)
    return (
      <main>
        <Section hero>
          <Link to="/">Go back</Link>
          <h1>Page not found</h1>
          <p>Sadly, content under provided url does not exist</p>
        </Section>
      </main>
    );

  return (
    <main>
      <Section>
        <Heading {...project} />
        <Gallery>
          {project.images.map((url) => (
            <Gallery.Image src={"images/" + url} key={url} />
          ))}
        </Gallery>
      </Section>
      <Section>
        <Link to="/">
          <h2>Back to home page</h2>
        </Link>
      </Section>
    </main>
  );
}

export default Project;
