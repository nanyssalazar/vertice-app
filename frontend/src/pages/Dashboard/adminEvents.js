import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import Footer from '../../components/Footer';
import api from '../../services/api.js';
import EventCard from '../../components/EventCard';
import "../Events/Events.scss";

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
      <h2 className="events-header">Actividades</h2>
      <div className="events-wrapper">
        {events ? (
          events.map((event) => (
            <EventCard key={event._id} data={event} eventId={event._id} >
            </EventCard>
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
