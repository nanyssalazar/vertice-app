import React, { useState, useEffect } from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import api from "../../services/api.js";

const MemberAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    console.log("auiiii");
    const response = await api.get(
      `/events/all/attendees/${localStorage.getItem("id")}`
    );
    const eventsFetched = response.data;
    console.log(response.data);
    setEvents(eventsFetched);
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <h2>Asistencias</h2>
        <table className="table-data">
          <tr>
            <th>Evento</th>
            <th>Asistencia</th>
            <th>Puntaje</th>
          </tr>
          {events ? (
            events.map((event) => (
              <tr key={event._id}>
                <td>{event.title}</td>
                <td>
                  {String(event.member[0].attended) === "false" ? "☓" : "✓"}
                </td>
                <td>{event.member[0].points}</td>
              </tr>
            ))
          ) : (
            <h2>No eventos</h2>
          )}
        </table>
      </div>

      {/* <AttendanceTable /> */}
      <Footer />
    </>
  );
};

export default MemberAttendance;
