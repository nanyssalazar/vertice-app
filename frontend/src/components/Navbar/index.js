import React from "react";
import logo from "../../images/logo.png";
import { FaBars } from "react-icons/fa";
import LoginButton from "../LoginButton";
import "../Navbar/Navbar.scss";

// FIX NAVBAR
const Navbar = ({ toggle }) => {
  const currentLocation = window.location.pathname;
  console.log(currentLocation);
  const isAdmin = localStorage.getItem("userType") === "admin" ? true : false;
  console.log(isAdmin);
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
          ) : isAdmin ? (
            <>
              <FaBars className="navbar__bars" onClick={toggle} />
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/dashboard/solicitudes">Solicitudes</a>
              </li>  <li>
                <a href="/dashboard/eventos">Asistencias</a>
              </li>
              <li>
                <a href="/dashboard/nuevo-evento">Nuevo Evento</a>
              </li>
              <li>
                <a href="/dashboard/miembros">Miembros</a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/">Inicio</a>
              </li>
              <li>
                <a href="/mi-perfil">Mi Perfil</a>
              </li>
              <li>
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
