import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api.js";
import "./Dashboard.scss";

const Dashboard = () => {
  const [points, setPoints] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchPoints = async () => {
    const response = await api.get(
      `/events/all/attendees/${localStorage.getItem("id")}`
    );
    const pointsFetched = response.data[0].totalPoints;
    console.log("ola");
    console.log(response.data[0].totalPoints);
    setPoints(pointsFetched);
  };

  //creo que aqui hay que poner un timeout
  useEffect(() => {
    fetchPoints();
  }, []);

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
          href="/solicitudes"
        >
          <p className="dashboard-container__box--applications--bold">
            Solicitudes
          </p>
          <img
            className="dashboard-container__box--icon"
            src="https://cdn-icons.flaticon.com/png/512/4662/premium/4662026.png?token=exp=1652390092~hmac=a3cebe439e94cbb2cf34bb551f2ef72b"
          />
        </a>
        <a className="dashboard-container__box--assistance" href="dashboard/asistencias">
          <p className="dashboard-container__box--assistance--bold">
            Asistencias
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/512/4270/4270649.png"
            alt="attendance icon"
            className="dashboard-container__box--icon"
          />
        </a>
        <a className="dashboard-container__box--events" href="/new-event">
          <p className="dashboard-container__box--events--bold">Crear evento</p>
          <img
            className="dashboard-container__box--icon"
            src="https://cdn-icons-png.flaticon.com/512/5978/5978652.png"
          />
        </a>
        <a className="dashboard-container__box--members" href="/members">
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
