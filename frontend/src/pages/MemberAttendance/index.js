import React, { useState } from "react";
import AttendanceTable from "../../components/AttendanceTable";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

const MemberAttendance = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <AttendanceTable/>
      <Footer />
    </>
  );
};

export default MemberAttendance;
