import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import api from "../../services/api.js";
import "./Members.scss";

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchmembers = async () => {
    const response = await api.get("/members");
    const membersFetched = response.data;
    console.log(response);
    setMembers(membersFetched);
  };

  useEffect(() => {
    fetchmembers();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className="members-container">
        <h2>Miembros</h2>
        <table className="table-data">
          <tr>
            <th scope="col">Nombre</th>
            <th colSpan={3} scope="col">
              ID
            </th>
            <th scope="col">Generación</th>
            <th scope="col">Carrera</th>
          </tr>
          {members ? (
            members.map((member) => (
              <tr key={member._id}>
                <td>
                  {member.name} {member.lastNames}
                </td>
                <td colSpan={3}>{member.idIest}</td>
                <td>{member.gen}</td>
                <td>{member.bachelor}</td>
              </tr>
            ))
          ) : (
            <h2>No members</h2>
          )}
        </table>
      </div>
      <Footer />
    </>
  );
};

export default Members;
