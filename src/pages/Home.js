/**
 * Home page root url
 *
 */

import { Contact } from "../components/contact";
import { Section } from "../components/section";
import { List } from "../components/list";

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
        <List />
      </Section>
      <Section>
        <Contact />
      </Section>
    </main>
  );
}

export default Home;
