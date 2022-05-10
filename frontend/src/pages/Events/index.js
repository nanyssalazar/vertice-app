import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import EventCard from "../../components/EventCard/index.js";
import api from "../../services/api.js";
import "./Events.scss";

const Events = () => {
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    const response = await api.get("/events");
    const eventsFetched = response.data;
    console.log(response);
    setEvents(eventsFetched);
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
    <Navbar/>
      <h2 className="events-header">Actividades</h2>
      <div className="events-wrapper">
        {events ? (
          events.map((event) => <EventCard key={event._id} data={event} />)
        ) : (
          <h2>No eventos</h2>
        )}
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
