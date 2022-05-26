/**
 * Selected project page
 *
 */

import { useParams } from "react-router-dom";
import { Section, Gallery } from "../components";
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

  let { title, description, images, links } = project;

  return (
    <main>
      <Section>
        <h1>{title}</h1>
        <h3>{description}</h3>
        <div className="gapped-box">
          {Object.entries(links).map(([alias, link]) => (
            <a href={link} key={alias} target="_blank" rel="noreferrer">
              {alias}
            </a>
          ))}
        </div>
        <Gallery>
          {images.map((url) => (
            <Gallery.Image src={"images/" + url} alt={url} key={url} />
          ))}
        </Gallery>
      </Section>
    </main>
  );
}

export default Project;
