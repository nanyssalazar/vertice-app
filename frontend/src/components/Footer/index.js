import React from "react";
import logoIest from "../../images/logo-iest.png";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <nav className="footer">
        <ul>
          <li>
            <a href="https://anahuac.mx/iest/" target="_blank" rel="noreferrer">
              anahuac.mx/iest
            </a>
          </li>
          <li>
            <p>xxx.xxx.xxx Ext. xxxx</p>
          </li>
          <li>
            <a href="mailto:vertice@iest.edu.mx">vertice@iest.edu.mx</a>
          </li>
          <li>
            <p>Ing. Betsabé Lorem Ipsum</p>
          </li>
        </ul>
        <img src={logoIest} alt="Logo del IEST Anahuac en blanco" />
      </nav>
    </>
  );
};

export default Footer;
