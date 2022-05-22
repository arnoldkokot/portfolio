import "./List.css";
import ListItem from "./ListItem";

function List(props) {
  return (
    <>
      <div className="filters">
        <figure>
          <p className="hover">All</p>
          <small>10</small>
        </figure>
        <figure>
          <p className="hover">All</p>
          <small>10</small>
        </figure>
        <figure>
          <p className="hover">All</p>
          <small>10</small>
        </figure>
        <p>Selected Works</p>
      </div>
      <div>
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    </>
  );
}
export default List;
