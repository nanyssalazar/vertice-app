import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";
import EventCard from "../../components/EventCard/index.js";
import api from "../../services/api.js";
import "./Events.scss";

const Events = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);
  
  const fetchEvents = async () => {
    const response = await api.get(
      `/events/gen/${localStorage.getItem("gen")}`
    );
    const eventsFetched = response.data;
    console.log(response);
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
          events.map((event) => <EventCard key={event._id} data={event} />)
        ) : (
          <h2>No eventos</h2>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Events;
