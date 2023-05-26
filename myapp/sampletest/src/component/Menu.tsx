import { MouseEvent } from "react";
function Menu() {
  let item = [
    "Syallabus",
    "Get Started",
    "Quiz",
    "Contact Us",
    "Student Account Details",
  ];
  const handlingClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h2>React Training</h2>
      {item.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {item.map((x, index) => (
          <li className="list-group-item" key={x} onClick={handlingClick}>
            {item}​​​​​​
          </li>
        ))}
      </ul>
    </>
  );
}
export default Menu;
