import React, { useState } from 'react';
// import { useHistory } from "react-router-dom";
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import api from '../../services/api';
// import api from "../../services/api.js";
import '../LoginButton/LoginButton.scss';

const LoginButton = () => {
  const [isLoggedIn, setIsLogedIn] = useState(false);
  //   let history = useHistory();
  const currentLocation = window.location.pathname;
  const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;

  const onLoginSuccess = async (res) => {
    setIsLogedIn(true);
    console.log('[Login Success] currentUser:', res.profileObj);
    localStorage.setItem('email', res.profileObj.email);
    localStorage.setItem(
      'nombre',
      res.profileObj.givenName + ' ' + res.profileObj.familyName
    );
    localStorage.setItem('imageUrl', res.profileObj.imageUrl);
    checkUser();
    // CODIGO PARA CONECTAR CON BASE DE DATOS
  };

  const onLoginFailure = (res) => {
    console.log('[Login failed] res:', res);
  };

  const checkUser = async () => {
    const email = localStorage.getItem('email');
    const response = await api.put(`/members/${email}`, {
      headers: {
        profilePicture: localStorage.getItem('imageUrl'),
      },
    });
    alert(response.data.message);
    //window.location.reload();
  };
  const onLogoutSuccess = () => {
    setIsLogedIn(false);
    console.log('[Logout Success] currentUser:');
    localStorage.removeItem('email');
    localStorage.removeItem('nombre');
    localStorage.removeItem('imageUrl');
    alert('Has cerrado sesión.');
    // history.push("/");
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
