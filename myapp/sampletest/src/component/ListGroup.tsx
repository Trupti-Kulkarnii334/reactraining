import { MouseEvent, useState } from "react";

function ListGroup() {
  let places = ["Kolkata", "Delhi", "Mumbai", "Bangalore", "Chennai"];
  const [place, setPlace] = useState(-1);
  const handlingClick = (event: MouseEvent) => console.log(event);
  //items = [];
  return (
    <>
      <h1>Dynamic List</h1>
      {places.length === 0 && <p>No Places is found</p>}
      <ul className="list-group">
        {places.map((x, index) => (
          <li
            className={
              place === index ? "list-group-item active" : "list-group-item"
            }
            key={index}
            onClick={() => setPlace(index)}
          >
            {x}​​​​​​
          </li>
        ))}
        ​​​​​​
      </ul>
    </>
  );
}
export default ListGroup;
