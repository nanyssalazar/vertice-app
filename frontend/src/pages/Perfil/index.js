import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import profilePicture from "../../images/profile-img.png"
import "./Perfil.scss";

const Perfil = () => {

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-container__box--info">
          <p className="profile-container__box--info--bold">Mi perfil</p>
          <img alt="profile-pic" src={profilePicture} />
          <p className="profile-container__box--info--bold">Miembro</p>
          <p>nombre de persona</p>
          <p className="profile-container__box--info--bold">Carrera</p>
          <p>Ing. en Sistemas y Negocios Digitales</p>
          <p className="profile-container__box--info--bold">Generación</p>
          <p>Tercera</p>
        </div>
        <div className="profile-container__box--points">
          <p className="profile-container__box--points--bold">Puntaje</p>
          <p>80 / 100</p>
        </div>
        <a className="profile-container__box--assistance" href="/asistencias">
          <p className="profile-container__box--assistance--bold">
            Asistencias
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4270/4270649.png"
            alt="attendance icon"
            className="profile-container__box--assistance--icon"
          />
        </a>
        <a className="profile-container__box--events" href="/events">
          <p className="profile-container__box--events--bold">Eventos</p>
          <div className="profile-container__box--events--imgs">
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1" />
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1" />
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1" />
            <img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1" />
          </div>
        </a>
      </div>
      <Footer/>
    </>
  );
};

export default Perfil;
