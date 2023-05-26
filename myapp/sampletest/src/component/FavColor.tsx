import { useState } from "react";

function FavColor() {
  const [color, setColor] = useState("Grey");
  return (
    <div>
      My Fav Color is {color}
      <button onClick={() => setColor("Lavender")}>Change Color</button>
    </div>
  );
}
export default FavColor;
