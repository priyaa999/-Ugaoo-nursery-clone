import React from "react";
import "./list-items.css"

function Plants({ hoveredItem, setHoveredItem }) {
  const dropdownItems = [
    "Indoor Plants",
    "Outdoor Plants",
    "Flowering Plants",
    "Air Purifying Plants",
    "Low Light Plants",
    "Cacti and Succulents",
    // "Hanging Plants",
    // "Medicinal & Aromatic Plants",
    // "Pet-Friendly Plants",
    // "Fruit Plants",
    // "Bundles",
    // "New Arrivals",
    // "Shop by Location",
    // "Subscriptions",
    // "Shop by Name,",
  ];

  return (
    <>
      <div
        className="nav-item-cont"
        onMouseEnter={() => setHoveredItem("Plants")}
        onMouseLeave={() => setHoveredItem(null)}
      >
        <li className="nav-item">
          <a href="">Plants</a>
          {hoveredItem === "Plants" && (
            <ul className="dropdown">
              {dropdownItems.map((item, index) => (
                <li key={index}>
                  <a href="">{item}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      </div>
    </>
  );
}

export default Plants;
