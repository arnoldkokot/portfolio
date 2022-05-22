import "./Section.css";

function Section(props) {
  return (
    <section className={props.hero ? "hero" : ""}>
      <div className="container">{props.children}</div>
    </section>
  );
}
export default Section;
