import React from "react";
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
        <div className="profile-container__box--events">
          <p className="profile-container__box--events--bold">Eventos</p>
        </div>
      </div>
    </>
  );
};

export default Perfil;
