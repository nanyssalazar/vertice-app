import React from "react";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";
import api from "../../services/api.js";

import "./AttendanceTable.scss";

const AttendanceTable = ({ eventPoints, attendees }) => {
  const pathArray = window.location.pathname.split("/");
  const eventId = pathArray[3];

  const attendanceHandler = async (value, memberId) => {
    console.log(value == true);
    if (value == true) {
      const response = await api.put(
        `/events/${eventId}/attendees/${memberId}`,
        {
          attended: value,
          points: eventPoints,
        }
      );
      console.log(response.data.message);
      return;
    }
    const response = await api.put(
      `/events/${eventId}/attendees/false/${memberId}`
    );
    console.log(response.data.message);
  };

  return (
    <>
      <table className="table-data">
        <tbody>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">ID</th>
            <th scope="col">Generación</th>
            <th scope="col">Asistencia</th>
          </tr>
          {attendees ? (
            attendees.map((attendee, _id) => (
              <tr key={_id}>
                <td>
                  {attendee.name} {attendee.lastNames}
                </td>
                <td>{attendee.idIest}</td>
                <td>{attendee.gen}</td>
                <td>
                  <Checkbox
                    icon={<Icon.FiCheck color="#E60B62" size={24} />}
                    name="checkbox"
                    onChange={(value) => {
                      attendanceHandler(value, attendee.id);
                    }}
                    borderColor="#E60B62"
                    size={24}
                    containerClassName="table-data__checkbox"
                    checked={attendee.attended ? true : false}
                  />
                </td>
              </tr>
            ))
          ) : (
            <h2>No attendees</h2>
          )}
        </tbody>
      </table>
    </>
  );
};

export default AttendanceTable;
