import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import api from '../../services/api.js';
import '../Members/Members.scss';

const DeletedMembers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [oldMembers, setOldMembers] = useState(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchmembers = async () => {
    // cambiar por get para miembros antiguos
    const response = await api.get('/removed-members');
    const membersFetched = response.data;
    console.log(response);
    setOldMembers(membersFetched);
  };

  useEffect(() => {
    fetchmembers();
  }, []);

  const restoreMember = async (memberId, name) => {
    const confirmation = window.confirm(
      `¿Estás seguro que deseas reintegrar al alumno ${name}?`
    );
    if (confirmation === true) {
      const response = await api.delete(`/removed-members/${memberId}`);
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
        <h2>Antiguos Miembros</h2>
        <table className='table-data'>
          <tr>
            <th scope='col'>Nombre</th>
            <th colSpan={3} scope='col'>
              ID
            </th>
            <th scope='col'>Generación</th>
            <th scope='col'>Carrera</th>
            <th scope='col'>Reintegrar</th>
          </tr>
          {oldMembers ? (
            oldMembers.map((member) => (
              <tr key={member._id}>
                <td>
                  {member.name} {member.lastNames}
                </td>
                <td colSpan={3}>{member.idIest}</td>
                <td>{member.gen}</td>
                <td>{member.bachelor}</td>
                <td>
                  <button
                    className='members-container__delete'
                    onClick={() => {
                      restoreMember(member._id, member.name);
                    }}
                  >
                    Reintegrar
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

export default DeletedMembers;
