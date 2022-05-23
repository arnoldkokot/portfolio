import Item from "./Item";
import "./List.css";
import { countCategories } from "../../helpers";
import Filter from "./Filter";

//todo
// change to nested component "Rows" - could be better
function List({ items }) {
  return (
    <>
      <div className="filters">
        <Filter name="All" count={items.length} />
        <p>Selected Works</p>
      </div>
      {items.map((item) => (
        <Item {...item} key={item.title} />
      ))}
    </>
  );
}
export default List;
