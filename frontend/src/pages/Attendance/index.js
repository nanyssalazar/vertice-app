import React, { useState } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import AttendanceTable from "../../components/AttendanceTable";
import "./Attendance.scss";

const Attendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="attendance--container">
        <h2 className="attendance__title">Registro de Asistencias</h2>
        <div className="attendance--info">
          <div className="attendance--info__box">
            <p>Evento</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="attendance--info__box">
            <p>Generación(es)</p>
            <p>Lorem Ipsum</p>
          </div>
          <div className="attendance--info__box">
            <p>Registrados</p>
            <p>50</p>
          </div>
        </div>
        <h3 className="attendance__subtitle">Asistentes</h3>
        <AttendanceTable/>
      </div>
    </>
  );
};

export default Attendance;
