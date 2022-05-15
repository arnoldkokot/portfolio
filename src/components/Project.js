import { useParams } from "react-router-dom";
import "./Project.css";
import works from "../works.json";

function Project() {
  let params = useParams();

  const { title, categories } = works.find(
    (project) => project.title.replace(/\s+/g, "-").toLowerCase() === params.url
  );

  return (
    <section>
      <div className="container">
        {title} {categories}
      </div>
    </section>
  );
}

export default Project;
