import React from "react";
import NavButton from "../Buttons/NavButton/NavButton";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar__container">
      <NavButton route="/" componentName={"Home"} />
      <NavButton route="/favorites" componentName={"Favorites"} />
    </div>
  );
}

export default Navbar;
