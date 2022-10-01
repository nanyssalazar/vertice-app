import React from 'react';
import { useNavigate } from 'react-router-dom';
import './EventCard.scss';
import api from '../../services/api';

const EventCard = ({
  eventId,
  data: {
    _id,
    title,
    description,
    date,
    availability,
    img,
    generation,
    committee,
    modality,
    place,
    eventType,
    attendees,
  },
}) => {
  const currentLocation = window.location.pathname;
  const navigate = useNavigate();

  const dateOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const handleClick = async () => {
    // si esta en el modo admin entonces lo redigira a la asistencia
    if (currentLocation === '/dashboard/eventos') {
      navigate(`/dashboard/eventos/${eventId}/asistencias`);
      return;
    }
    const confirmation = window.confirm(
      '¿Estás seguro que deseas registrarte a este evento?'
    );
    if (confirmation == true) {
      const response = await api.put(`/events/${_id}/attendees/`, {
        id: localStorage.getItem('id'),
        idIest: localStorage.getItem('idIest'),
        gen: localStorage.getItem('gen'),
        name: localStorage.getItem('name'),
        lastNames: localStorage.getItem('lastNames'),
        attended: false,
        points: 0,
      });
      console.log(response.data.message);
      alert(response.data.message);
    }
  };

  const isMemberRegistered = () => {
    console.log(attendees);
    var member = attendees.find(
      (member) => member.id === localStorage.getItem('id')
    );
    //cuando esta registrado es true
    if (member !== undefined) {
      console.log('esta registrado');
      console.log(member !== undefined);
      return member !== undefined;
    }
  };

  //se empalma con el click de registrar al evento
  const cancelAttendance = async () => {
    const confirmation = window.confirm(
      `¿Estás seguro que deseas cancelar tu registro a ${title}?`
    );
    if (confirmation == true) {
      const response = await api.put(
        `/events/${_id}/attendees/remove/${localStorage.getItem('id')}`
      );
      console.log(response.data.message);
      alert(response.data.message);
      window.location.reload();
    }
  };

  return (
    <div className='event-container' onClick={handleClick}>
      <div className='event-container--columns'>
        <p className='event-container__type'>{eventType}</p>
        <p>Fecha: {new Date(date).toLocaleDateString('es-MX', dateOptions)}</p>
      </div>
      <img src={img} />
      <p className='event-container__title'>{title}</p>
      <div className='event-container--columns'>
        <p>Cupo: {availability}</p>
        <p>Modalidad: {modality}</p>

        {/* <p>Generación: {generation}</p> */}
      </div>
      <div className='event-container--columns'>
        <p id='event-container__committee'>
          Comité:{' '}
          {committee.map((c) => (
            <p>{c}</p>
          ))}
        </p>
        <p>Lugar: {place}</p>
      </div>
      <p className='event-container__description'>{description}</p>
      {isMemberRegistered() && (
        <button
          onClick={() => {
            cancelAttendance();
          }}
        >
          Cancelar registro
        </button>
      )}
    </div>
  );
};

export default EventCard;
