function Item({ title, categories }) {
  return (
    <a className="list-item">
      <p>{title}</p>
      <label>{categories.join(", ")}</label>
    </a>
  );
}
export default Item;
