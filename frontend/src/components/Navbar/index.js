import React from "react";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import LoginButton from "../LoginButton";
import "../Navbar/Navbar.scss";

// FIX NAVBAR
const Navbar = ({ toggle }) => {
  const currentLocation = window.location.pathname;
  console.log(currentLocation);

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
          {currentLocation === "/" ? (
            <>
              <li>
                <a href="/aplicar">Aplicar</a>
              </li>
            </>
          ) : (currentLocation === "/new-event" ||
            currentLocation === "/dashboard-eventos") ? (
            <>
              <FaBars className="navbar__bars" onClick={toggle} />
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/eventos">Eventos</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/perfil">Mi Perfil</a>
              </li><li>
                <a href="/asistencias">Asistencias</a>
              </li>
            </>
          )}
          <LoginButton />
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
