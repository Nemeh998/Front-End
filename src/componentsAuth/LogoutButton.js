import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import '../css/header.css'
import  Login  from '../img/images.png';
function LogoutButton() {
  const {
    isAuthenticated,
    logout,
  } = useAuth0();

  return isAuthenticated && (
    <img src={Login}
    onClick={() => {
      logout({ returnTo: window.location.origin });
    }}/>
  );
}

export default LogoutButton;