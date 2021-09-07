import "./Header.css";
export default function Header() {
  return (
    <section>
      <div className="container hero">
        <p className="hero-hello">Hi, my name is</p>
        <h1>
          <span className="accent">Arnold Kokot.</span>
          <br />I build things for the web.
        </h1>
        <p>
          I’m a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I’m focused on
          building accessible, human-centered products at
          <span className="accent"> Upstatement</span>.
        </p>
        <a href="." className="box-link">
          Check out my course!
        </a>
      </div>
    </section>
  );
}
