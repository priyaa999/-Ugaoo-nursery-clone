import React, { useState } from "react";
import hamburger from "../../../assets/hamburger.svg";
import "./hamburger.css"

function Hamburger({visible}) {
  // const [isActive, setIsActive] = useState(false);
  console.log(visible)
  return (
    <div className={visible? "visible":"hamburger"}>
      <img src={hamburger} alt="" />
    </div>
  );
}

export default Hamburger;
