import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import './Dashboard.scss';

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="dashboard-container">
        <div className="dashboard-container__box--info">
          <p className="dashboard-container__box--info--bold">Mi perfil</p>
          <img
            alt="dashboard-pic"
            className="dashboard-container__box--icons"
            src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1"
          />
          {/* <img alt="dashboard-pic" src={localStorage.getItem("imageUrl")} /> */}
          <p className="dashboard-container__box--info--bold">Administrador</p>
          {/* <p>
            {localStorage.getItem("name")} {localStorage.getItem("lastNames")}
          </p> */}
          <p>Lorem Ipsum</p>
        </div>
        <a
          className="dashboard-container__box--applications"
          href="/dashboard/solicitudes"
        >
          <p className="dashboard-container__box--applications--bold">
            Solicitudes
          </p>
          <img
            className="dashboard-container__box--icon"
            src="https://cdn-icons-png.flaticon.com/512/4353/4353351.png"
          />
        </a>
        <a
          className="dashboard-container__box--assistance"
          href="dashboard/eventos"
        >
          <p className="dashboard-container__box--assistance--bold">
            Asistencias
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4270/4270649.png"
            alt="attendance icon"
            className="dashboard-container__box--icon"
          />
        </a>
        <a
          className="dashboard-container__box--events"
          href="/dashboard/nuevo-evento"
        >
          <p className="dashboard-container__box--events--bold">Crear evento</p>
          <img
            className="dashboard-container__box--icon"
            src="https://cdn-icons-png.flaticon.com/512/5978/5978652.png"
          />
        </a>
        <a
          className="dashboard-container__box--members"
          href="/dashboard/miembros"
        >
          <p className="dashboard-container__box--members--bold">Miembros</p>
          <img
            className="dashboard-container__box--icon"
            src="https://cdn-icons-png.flaticon.com/512/4406/4406493.png"
          />
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
