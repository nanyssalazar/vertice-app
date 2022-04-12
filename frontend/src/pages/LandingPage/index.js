import React, {useState} from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import miembrosVertice from "../../images/landing-page-promocional.jpeg";
import evento1 from "../../images/evento-1.jpeg"
import "./LandingPage.scss";

const LandingPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle}/>
      <div className="landing-content">
        <h1>Programa de Excelencia Vértice</h1>
        <img
          className="landing-content__promocional"
          src={miembrosVertice}
          alt="Miembros del Programa Vertice"
        />
      </div>
      <div className="landing-content__carrousel">
        <img src={evento1}/>
        <img src={evento1}/>
        <img src={evento1}/>
        <img src={evento1}/>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
