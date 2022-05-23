/**
 * Home page root url
 *
 */

import { Contact, Section, List } from "../components";
import projects from "../assets/projects.json";

function Home() {
  return (
    <main>
      <Section hero>
        <h1>
          Hi, I’m Arnold, a developer located in Cracow, currently studying
          Computer Science at AGH UST and part-time working at WK Motors. I have
          a particular interest in web technologies, networking and video games.
        </h1>
      </Section>
      <Section>
        <List title="Selected Works">
          {projects.map((project) => (
            <List.Item {...project} key={project.title} />
          ))}
        </List>
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
}

export default Home;
