import { Link } from "react-router-dom";
import { kebabCase } from "../../helpers";
import "./List.css";

function List({ title, children }) {
  return (
    <>
      <div className="list-header">
        <p>{title}</p>
      </div>
      <ul>{children}</ul>
    </>
  );
}

function Item({ title, categories }) {
  return (
    <li>
      <Link to={"/" + kebabCase(title)}>
        <p>{title}</p>
        <label>{categories.join(", ")}</label>
      </Link>
    </li>
  );
}

List.Item = Item;

export default List;
