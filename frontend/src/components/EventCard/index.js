import React from "react";
import "./EventCard.scss";

const EventCard = ({
  data: {
    title,
    description,
    date,
    availability,
    img,
    generation,
    committee,
    modality,
    place,
    eventType,
  },
}) => {

  const dateOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  
  const handleClick = () => {
    // do thing on backend heheheh
    console.log("HEREEEE");
  }

  return (
    <div className="event-container" onClick={handleClick}>
      <div className="event-container--columns">
        <p className="event-container__type">{eventType}</p>
        <p>Fecha: {new Date(date).toLocaleDateString("es-MX", dateOptions)}</p>
      </div>
      <img src={img} />
      <p className="event-container__title">{title}</p>
      <div className="event-container--columns">
        <p>Cupo: {availability}</p>
        <p>Generación: {generation}</p>
      </div>
      <div className="event-container--columns">
        <p>Comité: {committee}</p>
        <p>Lugar: {place}</p>
      </div>
      <div className="event-container--columns">
        <p>Modalidad: {modality}</p>
      </div>
      <p className="event-container__description">{description}</p>
    </div>
  );
};

export default EventCard;
