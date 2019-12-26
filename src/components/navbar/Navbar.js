import React, { useState } from "react";
import Logo from "../../resources/images/logo.svg";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import nav from "../ui_components/nav_component";

const Navbar = _ => {
  const [isOpen, setIsOpen] = useState(false);

  const setOpenState = _ => setIsOpen(state => (state = !state));
  const toggleMenu = _ => (isOpen ? "nav-links show-nav" : "nav-links");

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/">
            <img src={Logo} alt="logo" className="res-logo" />
          </Link>

          <button type="button" className="nav-btn" onClick={setOpenState}>
            <FaAlignRight className="nav-icon" />
          </button>
        </div>
        {nav(Link, toggleMenu())}
      </div>
    </nav>
  );
};

export default Navbar;
