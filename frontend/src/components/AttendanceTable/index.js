import React from "react";
import Checkbox from "react-custom-checkbox";
import * as Icon from "react-icons/fi";

import "./AttendanceTable.scss";

const AttendanceTable = () => {
  return (
    <>
      <table className="attendance-table">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Generación</th>
          <th scope="col">Asistencia</th>
        </tr>
        <tr>
          <td>Andrea Sosa Salazar</td>
          <td>3ra</td>
          <td>
            <Checkbox
              icon={<Icon.FiCheck color="#E60B62" size={24} />}
              name="checkbox"
              onChange={(value) => {
                let p = {
                  isTrue: value,
                };
                console.log(value);
              }}
              borderColor="#E60B62"
              size={24}
              containerClassName="attendance-table__checkbox"
            />
          </td>
        </tr>
        <tr>
          <td>Andrea Sosa Salazar</td>
          <td>3ra</td>
          <td>
            <Checkbox
              icon={<Icon.FiCheck color="#E60B62" size={24} />}
              name="checkbox"
              onChange={(value) => {
                let p = {
                  isTrue: value,
                };
                console.log(value);
              }}
              borderColor="#E60B62"
              size={24}
              containerClassName="attendance-table__checkbox"
            />
          </td>
        </tr>
        <tr>
          <td>Andrea Sosa Salazar</td>
          <td>3ra</td>
          <td>
            <Checkbox
              icon={<Icon.FiCheck color="#E60B62" size={24} />}
              name="checkbox"
              onChange={(value) => {
                let p = {
                  isTrue: value,
                };
                console.log(value);
              }}
              borderColor="#E60B62"
              size={24}
              containerClassName="attendance-table__checkbox"
            />
          </td>
        </tr>
      </table>
    </>
  );
};

export default AttendanceTable;
