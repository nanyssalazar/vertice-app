import axios from 'axios';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api';
import './NewEvent.scss';

const NewEvent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [img, setImg] = useState('');
  const [date, setDate] = useState('');
  const [availability, setAvailability] = useState(15);
  const [committee, setCommittee] = useState('');
  const [modality, setModality] = useState('');
  const [place, setPlace] = useState('');
  const [eventType, setEventType] = useState('');
  const [points, setPoints] = useState(1);
  const [generation, setGeneration] = useState([]);
  const [fileName, setFileName] = useState('');

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  const handleGenerationOptions = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    let selectedOptions = value;
    setGeneration(selectedOptions);
  };

  const handleCommitteeOptions = (event) => {
    let value = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    let selectedOptions = value;
    setCommittee(selectedOptions);
  };

  const generateURL = (img) => {
    let form = new FormData();
    form.set('key', process.env.REACT_APP_IMGBB_KEY);
    form.append('image', img);

    return axios({
      method: 'post',
      url: 'https://api.imgbb.com/1/upload',
      data: form,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(
      title,
      description,
      date,
      availability,
      committee,
      modality,
      place,
      eventType,
      points,
      generation
    );
    const response = await api.post('/events', {
      title: title,
      description: description,
      date: date,
      status: 'Active',
      availability: availability,
      img: img,
      generation: generation,
      committee: committee,
      modality: modality,
      place: place,
      eventType: eventType,
      points: points,
      semester: 'AGO-DIC 2022',
      attendees: [],
    });
    console.log(response.data);
    alert('Evento creado exitosamente.');
    window.location.reload();
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />{' '}
      <div className='new-event'>
        <h1>Nuevo Evento</h1>
        <form onSubmit={handleSubmit} className='new-event__form'>
          <label htmlFor='title'>Título del evento</label>
          <input
            name='title'
            type='text'
            placeholder='Título del evento'
            required
            onChange={(event) => setTitle(event.target.value)}
          />
          <label htmlFor='description'>Descripción</label>
          <textarea
            name='description'
            type='text'
            placeholder='Descripción del evento'
            required
            onChange={(event) => setDescription(event.target.value)}
          />
          <label>Imagen del evento</label>
          <label htmlFor='event-img' id='event-img--upload'>
            {img ? 'Cambiar Imagen' : 'Subir Imagen'}
          </label>
          <label id='event-img__name' style={{ padding: '0' }}>
            {fileName ? fileName : 'Ningun archivo seleccionado.'}
          </label>
          <input
            onChange={(e) => {
              setFileName(e.target.files[0].name);
              generateURL(e.target.files[0]).then((resp) =>
                setImg(resp.data.data.display_url)
              );
            }}
            type='file'
            id='event-img'
            accept='.jpg, .jpeg, .png'
            max-file-size='33554432'
            required
          />

          <label htmlFor='date'>Fecha</label>
          <input
            name='date'
            type='date'
            required
            onChange={(event) => setDate(event.target.value)}
          />
          <label htmlFor='availability'>Cupo</label>
          <input
            name='availability'
            type='number'
            min='15'
            value={availability}
            required
            onChange={(event) => setAvailability(event.target.value)}
          />
          <label htmlFor='comittee'>Comité</label>
          <select
            name='comittee'
            onChange={(event) => handleCommitteeOptions(event)}
            multiple
            required
          >
            <option value='Comunicación'>Comunicación</option>
            <option value='Formación'>Formación</option>
            <option value='Relaciones'>Relaciones</option>
            <option value='Investigación'>Investigación</option>
            <option value='Acción Social'>Acción Social</option>
            <option value='Proyectos'>Proyectos</option>
            <option value='Integración'>Integración</option>
          </select>
          <label htmlFor='modality'>Modalidad</label>
          <select
            name='modality'
            onChange={(event) => setModality(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Presencial'>Presencial</option>
            <option value='Virtual'>Virtual</option>
          </select>
          <label htmlFor='place'>Lugar</label>
          <select
            htmlFor='place'
            onChange={(event) => setPlace(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='Gimnasio'>Gimnasio</option>
            <option value='Salon (por definir)'>Salon (por definir)</option>
            <option value='Auditorio David Gómez'>Auditorio David Gómez</option>
          </select>

          <label htmlFor='event-type'>Tipo de Evento</label>
          <select
            name='event-type'
            onChange={(event) => setEventType(event.target.value)}
            required
          >
            <option value=''>Seleccionar opción...</option>
            <option value='TEA'>TEA</option>
            <option value='Taller'>Taller</option>
            <option value='V-Talk'>V-Talk</option>
            <option value='ELAP'>ELAP</option>
            <option value='Integración'>Integración</option>
            <option value='Hora Newman'>Hora Newman</option>
            <option value='Café Vértice'>Café Vértice</option>
            <option value='Café Chesterton'>Café Chesterton</option>
            <option value='Investigation Talk'>Investigation Talk</option>
            <option value='Chronicles'>Chronicles</option>
          </select>
          <label htmlFor='points'>Puntuación</label>
          <input
            name='points'
            type='number'
            min='1'
            required
            value={points}
            onChange={(event) => setPoints(event.target.value)}
          />
          <label htmlFor='generation'>Generación Vértice</label>
          <select
            name='generation'
            multiple
            onChange={(event) => handleGenerationOptions(event)}
            required
          >
            <option value='1'>Primera</option>
            <option value='2'>Segunda</option>
            <option value='3'>Tercera</option>
            <option value='4'>Cuarta</option>
            <option value='5'>Quinta</option>
          </select>
          <button type='submit'>Crear evento</button>
        </form>
      </div>
    </>
  );
};

export default NewEvent;
