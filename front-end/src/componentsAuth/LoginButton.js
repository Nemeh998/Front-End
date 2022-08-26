import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import '../css/header.css'
import  Logout  from '../img/logout.jpg';

function LoginButton() {
  const {isAuthenticated,loginWithRedirect} = useAuth0();

  return !isAuthenticated && (
    <div id="logo" class="logo">
    <img src={Logout} onClick={loginWithRedirect}/>
    
    </div>
  );
}

export default LoginButton;