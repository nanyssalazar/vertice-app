import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';

const Register = () => {
  const [event, setEvent] = useState(null);
  const pathArray = window.location.pathname.split('/');
  const eventId = pathArray[2];

  const fetchEvent = async () => {
    //const eventId = '6240c6003f9fb91ede429775';
    const response = await api.get(`/events/${eventId}`);
    const eventsFetched = response.data;
    console.log(response);
    setEvent(eventsFetched);
  };

  const registerToEvent = async () => {
    const body = {
      id: localStorage.getItem('id'),
      idIest: localStorage.getItem('idIest'),
      name: localStorage.getItem('name'),
      lastNames: localStorage.getItem('lastNames'),
      attended: false, // 1 -> yes 0 -> No
      points: 0,
    };
    api
      .put(`/events/${eventId}/attendees`, {
        body: body,
      })
      .then((res) => {
        console.log('ya mande info');
        console.log(res.data.message);
      });
  };

  useEffect(() => {
    fetchEvent();
  }, []);

  return (
    <div>
      <h1>Página de registro</h1>
      <div className='cards-wrapper'>
        {event ? (
          <div>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{event.date}</p>
            <p>{event.availability}</p>
            <p>{event.img}</p>
            <p>{event.generation}</p>
            <p>{event.committe}</p>
            <p>{event.modality}</p>
            <p>{event.place}</p>
            <p>{event.eventType}</p>
            <p>{event.points}</p>
            <button onClick={registerToEvent}>Register</button>
          </div>
        ) : (
          <h2>No eventos</h2>
        )}
      </div>
    </div>
  );
};

export default Register;
