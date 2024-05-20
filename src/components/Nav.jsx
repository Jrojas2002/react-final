import React from "react";
import Logo from "../assets/logo_size.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Nav = () => {
  function openMenu() {
    document.body.classList += "menu--open";
  }
  
  function closeMenu() {
    document.body.classList.remove("menu--open");
  }

  return (
    <nav>
      <div className="row nav__row">
        <div className="logo">
          <figure>
            <Link to="/">
            <img className="logo" id="logo" src={Logo} alt="" />
            </Link>
          </figure>
        </div>
        <div className="nav__link--list">
          <ul className="nav__list">
            <li className="nav__link">
              <Link className="nav__link--anchor" to="/">
                Home
              </Link>
            </li>
            <li className="nav__link">
              <Link className="nav__link--anchor" to="/" target="_blank">
                About
              </Link>
            </li>
            <button className="nav__link nav__link--btn">
              <Link
                className="nav__link--anchor nav__link--anchor-btn"
                to="./movies.html"
              >
                Contact
              </Link>
            </button>
          </ul>
        </div>
        <button className="btn__menu" onClick={openMenu}>
          <FontAwesomeIcon icon="bars" />
        </button>
        <div className="menu__backdrop">
          <button className="btn__menu btn__menu--close" onClick={closeMenu}>
            <FontAwesomeIcon icon="times"  className="fa-times" />
          </button>
          <ul className="menu__links">
            <li className="menu__list">
              <Link className="menu__link" to="/" onClick={closeMenu}>
                Home
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/" onClick={closeMenu}>
                About
              </Link>
            </li>
            <li className="menu__list">
              <Link className="menu__link" to="/" onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
