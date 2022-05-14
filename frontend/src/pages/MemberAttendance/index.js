import React, { useState, useEffect } from 'react';
import AttendanceTable from '../../components/AttendanceTable';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';

const MemberAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    console.log('auiiii');
    const response = await api.get(
      `/events/all/attendees/${localStorage.getItem('id')}`
    );
    const eventsFetched = response.data;
    console.log(response.data);
    setEvents(eventsFetched);
  };

  useEffect(() => {
    fetchEvents();
  }, []);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      {events ? (
        events.map((event) => (
          <div>
            <p key={event._id}>{event.title}</p>
            <p>{String(event.member[0].attended)}</p>
            <p>{event.member[0].points}</p>
          </div>
        ))
      ) : (
        <h2>No eventos</h2>
      )}
      <AttendanceTable />
      <Footer />
    </>
  );
};

export default MemberAttendance;
