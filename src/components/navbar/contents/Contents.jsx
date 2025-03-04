import React, { useState } from "react";
import "./contents.css";
import Plants from "./list-menu/Plants";
function Contents() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <>
      <div className="list-menu">
        <ul className="nav-list">
        <Plants hoveredItem={hoveredItem} setHoveredItem={setHoveredItem}/>
        </ul>
      </div>
    </>
  );
}

export default Contents;
