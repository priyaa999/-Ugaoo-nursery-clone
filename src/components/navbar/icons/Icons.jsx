import React from "react";
import "./icons.css";
import rupeeIcon from "/src/assets/rupee.svg";
import userIcon from "/src/assets/user.svg";
import cartIcon from "/src/assets/cart.svg";

function Icons() {
  return (
    <div className="logos">
      <div className="rupee">
        <img src={rupeeIcon} alt="" />
      </div>
      <div className="user">
        <img src={userIcon} alt="" />
      </div>
      <div className="cart">
        <img src={cartIcon} alt="" />
      </div>
    </div>
  );
}

export default Icons;
