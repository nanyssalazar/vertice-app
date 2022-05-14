import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import AttendanceTable from '../../components/AttendanceTable';
import api from '../../services/api.js';
import './Attendance.scss';
import Footer from '../../components/Footer';

const Attendance = () => {
  let _ = require('underscore');
  const [isOpen, setIsOpen] = useState(false);
  const [event, setEvent] = useState(null);
  const pathArray = window.location.pathname.split('/');
  const eventId = pathArray[3];
  let sortedAttendeesByGen;

  //Sort attendees by id and gen
  if (event) {
    const sortedAttendeesById = _.sortBy(event.attendees, 'idIest');
    sortedAttendeesByGen = _.sortBy(sortedAttendeesById, 'gen');
  }

  const fetchEvent = async () => {
    console.log('auiiii');
    const response = await api.get(`/events/${eventId}`);
    const eventFetched = response.data;
    console.log(response.data);
    setEvent(eventFetched);
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {event ? (
        <div className='attendance--container'>
          <h2 className='attendance__title'>Registro de Asistencias</h2>
          <div className='attendance--info'>
            <div className='attendance--info__box'>
              <p>Evento</p>
              <p>{event.title}</p>
            </div>
            <div className='attendance--info__box'>
              <p>Generación(es)</p>
              {/* Separar por comas */}
              <p>{event.generation.join(', ')}</p>
            </div>
            <div className='attendance--info__box'>
              <p>Registrados</p>
              <p>{event.attendees.length}</p>
            </div>
          </div>
          <h3 className='attendance__subtitle'>Asistentes</h3>
          <AttendanceTable
            eventPoints={event.points}
            attendees={sortedAttendeesByGen}
          />
        </div>
      ) : (
        <h2>No eventos</h2>
      )}

      <Footer />
    </>
  );
};

export default Attendance;
