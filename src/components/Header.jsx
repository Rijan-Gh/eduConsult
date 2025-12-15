import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          Edu<span>Nepal</span>
        </div>

        <div className={`hamburger ${menuOpen ? "active" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={`nav-links ${menuOpen ? "mobile-active" : ""}`}>
          {["/", "/about", "/services", "/destinations", "/contact"].map((path) => (
            <li key={path}>
              <NavLink
                to={path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;