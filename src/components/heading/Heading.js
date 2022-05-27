import { Link } from "react-router-dom";
import "./Heading.css";

function Heading({ title, description, links }) {
  return (
    <div className="project-heading">
      <Link to="/">Back</Link>
      <h1>{title}</h1>
      <h3>{description}</h3>
      <div className="link-box">
        {Object.entries(links).map(([alias, link]) => (
          <a href={link} key={alias} target="_blank" rel="noreferrer">
            {alias}
          </a>
        ))}
      </div>
    </div>
  );
}
export default Heading;
