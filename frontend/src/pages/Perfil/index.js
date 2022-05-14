import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
import api from '../../services/api.js';
import './Perfil.scss';

const Perfil = () => {
  const [points, setPoints] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const fetchPoints = async () => {
    const response = await api.get(
      `/events/all/attendees/${localStorage.getItem('id')}/points`
    );
    const pointsFetched = response.data[0].totalPoints;
    console.log(response.data[0].totalPoints);
    setPoints(pointsFetched);
  };

  //creo que aqui hay que poner un timeout
  useEffect(() => {
    fetchPoints();
  }, []);

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <div className='profile-container'>
        <div className='profile-container__box--info'>
          <p className='profile-container__box--info--bold'>Mi perfil</p>
          <img alt='profile-pic' src={localStorage.getItem('imageUrl')} />
          <p className='profile-container__box--info--bold'>Miembro</p>
          <p>
            {localStorage.getItem('name')} {localStorage.getItem('lastNames')}
          </p>
          <p className='profile-container__box--info--bold'>Carrera</p>
          <p>{localStorage.getItem('bachelor')}</p>
          <p className='profile-container__box--info--bold'>Generación</p>
          <p>{localStorage.getItem('gen')}ra.</p>
        </div>
        <div className='profile-container__box--points'>
          <p className='profile-container__box--points--bold'>Puntaje</p>
          <p>{points} / 100</p>
        </div>
        <a className='profile-container__box--assistance' href='/asistencias'>
          <p className='profile-container__box--assistance--bold'>
            Asistencias
          </p>
          <img
            src='https://cdn-icons-png.flaticon.com/512/4270/4270649.png'
            alt='attendance icon'
            className='profile-container__box--assistance--icon'
          />
        </a>
        <a className='profile-container__box--events' href='/eventos'>
          <p className='profile-container__box--events--bold'>Eventos</p>
          <div className='profile-container__box--events--imgs'>
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1' />
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1' />
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1' />
            <img src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.clker.com%2Fcliparts%2F1%2F9%2Fe%2F4%2F13140637591549686593blue%2520square.png&f=1&nofb=1' />
          </div>
        </a>
      </div>
      <Footer />
    </>
  );
};

export default Perfil;
