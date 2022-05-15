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
        <p>Generación: {generation}</p>
      </div>
      <div className='event-container--columns'>
        <p id='event-container__committee'>Comité: {committee.map((c)=><p>{c}</p>)}</p>
        <p>Lugar: {place}</p>
      </div>
      <div className='event-container--columns'>
        <p>Modalidad: {modality}</p>
      </div>
      <p className='event-container__description'>{description}</p>
    </div>
  );
};

export default EventCard;
