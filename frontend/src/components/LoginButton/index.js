import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import api from '../../services/api';
// import api from "../../services/api.js";
import '../LoginButton/LoginButton.scss';

const LoginButton = () => {
  const [isLoggedIn, setIsLogedIn] = useState(false);
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
  const navigate = useNavigate();
  const currentLocation = window.location.pathname;

  const onLoginSuccess = async (res) => {
    localStorage.setItem('email', res.profileObj.email);
    localStorage.setItem('imageUrl', res.profileObj.imageUrl);

    const email = localStorage.getItem('email');
    let response = await api.get(`/admins/email/${email}`);
    let isAdminResponse = response.data.message;
    //checar si es admin
    if (isAdminResponse === 'Es administrador') {
      localStorage.setItem('id', response.data.admin[0]._id);
      localStorage.setItem('name', response.data.admin[0].name);
      alert('SOY ADMIN');
      return;
    }

    alert('NO SOY ADMIN');
    response = await api.put(`/members/${email}`, {
      headers: {
        profilePicture: localStorage.getItem('imageUrl'),
      },
    });
    console.log('RESPONSE', response.data.message);
    let isMemberResponse = response.data.message;
    console.log('isMemberResponse', isMemberResponse);
    if (isMemberResponse === 'Alumno no es miembro.') {
      localStorage.removeItem('email');
      localStorage.removeItem('imageUrl');
      alert(response.data.message);
      return;
    }

    console.log(response.data.member);
    localStorage.setItem('name', response.data.member[0].name);
    localStorage.setItem('lastNames', response.data.member[0].lastNames);
    localStorage.setItem('idIest', response.data.member[0].idIest);
    localStorage.setItem('id', response.data.member[0]._id);
    localStorage.setItem('gen', response.data.member[0].gen);
    localStorage.setItem('bachelor', response.data.member[0].bachelor);

    setIsLogedIn(true);
    console.log('[Login Success] currentUser:', res.profileObj);
    if (currentLocation === '/') {
      navigate('/mi-perfil');
    }
  };

  const onLoginFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  const onLogoutSuccess = () => {
    setIsLogedIn(false);
    console.log('[Logout Success] currentUser:');
    localStorage.removeItem('email');
    localStorage.removeItem('imageUrl');
    localStorage.removeItem('name');
    localStorage.removeItem('lastNames');
    localStorage.removeItem('idIest');
    localStorage.removeItem('id');
    localStorage.removeItem('gen');
    localStorage.removeItem('bachelor');
    alert('Has cerrado sesión.');
    navigate('/');
  };

  return (
    <div>
      {isLoggedIn ? (
        <GoogleLogout
          clientId={CLIENT_ID}
          render={(renderProps) => (
            <button
              className='google-logout-btn'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Salir
            </button>
          )}
          onLogoutSuccess={onLogoutSuccess}
        />
      ) : (
        <GoogleLogin
          clientId={CLIENT_ID}
          render={(renderProps) => (
            <button
              className='google-login-btn'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              Ingresar
            </button>
          )}
          buttonText='Login'
          isSignedIn={true}
          onSuccess={onLoginSuccess}
          onFailure={onLoginFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  );
};

export default LoginButton;
