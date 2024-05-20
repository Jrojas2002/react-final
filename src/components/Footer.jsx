import React from "react";
import FooterLogo from "../assets/LogoSample_ByTailorBrands.png"
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer__links">
        <ul className="footer__links--list">
          <li className="footer__link">
            <Link className="footer__link--anchor" to="/">
              Home
            </Link>
          </li>
          <li className="footer__link">
            <Link className="footer__link--anchor" to="/" target="_blank">
              About
            </Link>
          </li>
          <li className="footer__link">
            <Link className="footer__link--anchor" to="/" target="_blank">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="footer__break" />
      <div className="rights">
        <div className="footer__logo">
          <img
            className="footer__img"
            src={FooterLogo}
            alt=""
          />
        </div>
        <div className="footer__rights">
          <h3 className="footer__copy">
            © 2024 MovieFinder Inc. All Rights Reserved.
          </h3>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
