import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import api from '../../services/api.js';
import './Members.scss';

const Members = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [members, setMembers] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchmembers = async () => {
    const response = await api.get('/members');
    const membersFetched = response.data;
    console.log(response);
    setMembers(membersFetched);
  };

  useEffect(() => {
    fetchmembers();
  }, []);

  // use this function on delete member button
  const removeMember = async (memberId, name) => {
    const confirmation = window.confirm(
      `¿Estás seguro que deseas eliminar al alumno ${name}?`
    );
    if (confirmation == true) {
      const response = await api.delete(`/members/${memberId}`);
      console.log(response.data.message);
      alert(response.data.message);
      window.location.reload();
      return;
    }
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='members-container'>
        <h2>Miembros</h2>
        <table className='table-data'>
          <tr>
            <th scope='col'>Nombre</th>
            <th colSpan={3} scope='col'>
              ID
            </th>
            <th scope='col'>Generación</th>
            <th scope='col'>Carrera</th>
            <th scope='col'>Eliminar</th>
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
                <td>
                  <button className='members-container__delete'
                    onClick={() => {
                      removeMember(member._id, member.name);
                    }}
                  >
                    Eliminar 
                  </button>
                </td>
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
