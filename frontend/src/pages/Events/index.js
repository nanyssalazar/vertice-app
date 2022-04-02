import React, { useState, useEffect } from 'react';
import api from '../../services/api.js';

const Events = () => {
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    const response = await api.get('/events');
    const eventsFetched = response.data;
    console.log(response);
    setEvents(eventsFetched);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>EVENTS PAGE UHUHUHUH</h1>
      <div className='cards-wrapper'>
        {events ? (
          events.map((event) => <p key={event._id}>{event.title}</p>)
        ) : (
          <h2>No eventos</h2>
        )}
      </div>
    </div>
  );
};

export default Events;
