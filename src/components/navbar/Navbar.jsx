import React, { useEffect, useState } from "react";
import "./navbar.css";
import Search from "./search/Search";
import Logo from "./logo/Logo";
import Icons from "./icons/Icons";
import Hamburger from "./hamburger/Hamburger";
import Contents from "./contents/Contents";

export default function Navbar() {
  
  const [isActive, setIsActive] = useState(false)
  const [screenSize, compareScreenSize] = useState(window.innerWidth <= 768)


  const handleBurger = () => {
    compareScreenSize()
  }
  
useEffect(() => {
  window.addEventListener("resize", handleBurger)
})

  return (
    <>
      <nav className="navbar">
        <Logo />
        <Contents />
        <Search />
        <Icons />
        {isActive && <Hamburger visible={isActive}/>}
      </nav>
    </>
  );
}
