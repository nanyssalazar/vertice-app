import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import api from '../../services/api.js';

const AdminEvents = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    const response = await api.get('/events');
    const eventsFetched = response.data;
    console.log(response.data);
    setEvents(eventsFetched);
  };

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <h2 className=''>Eventos</h2>
      <div className=''>
        {events ? (
          events.map((event) => (
            <p key={event._id}>
              <a href={'/dashboard/eventos/' + event._id + '/asistencias/'}>
                {event._id}
                {event.title}
              </a>
            </p>
          ))
        ) : (
          <h2>No eventos</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default AdminEvents;
