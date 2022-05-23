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
      <a href="/">
        <p>{title}</p>
        <label>{categories.join(", ")}</label>
      </a>
    </li>
  );
}

List.Item = Item;

export default List;
