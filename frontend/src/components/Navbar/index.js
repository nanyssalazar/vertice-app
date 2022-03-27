import React from "react";
import "../Navbar/Navbar.scss";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import LoginButton from "../LoginButton";
// FIX NAVBAR
const Navbar = ({ toggle }) => {
  return (
    <>
      <nav className="navbar">
        <a href="/" className="navbar__logo">
          <img
            width="40px"
            src={logo}
            alt="Logo del Programa de Excelencia Vertice IEST Anahuac"
          ></img>
        </a>

        <FaBars className="navbar__bars" onClick={toggle} />
        <ul className="navbar__links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/eventos">Eventos</a>
          </li>
          <li>
            <a href="/perfil">Mi perfil</a>
          </li>
        </ul>
        <LoginButton/>
      </nav>
    </>
  );
};

export default Navbar;
