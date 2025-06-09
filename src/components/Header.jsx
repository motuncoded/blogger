import React from "react";
import { CiMenuBurger } from "react-icons/ci";

function Header() {
  return (
    <header>
      <div className="header-container">
        <CiMenuBurger size={24} />
        <h1>404 Thoughts</h1>
      </div>
      <a href="mailto:motunrayoadeneye@gmail.com">Contact Us</a>
    </header>
  );
}

export default Header;
