import React, {Component} from 'react'
import '../css/header.css'
import {Link} from "react-router-dom";

import LoginButton from "../componentsAuth/LoginButton";
import LogoutButton from "../componentsAuth/LogoutButton";
export class Header extends Component {
  render() {
    return (
<header>
<div id="navbarContainer">
    <div id="logo" class="logo">
    {!this.props.isAuthenticated ? <LoginButton /> : <LogoutButton />}
      
    </div>
    <ul>
    <li><Link clLinkss="menu-link is-Linkctive" to="/">home</Link></li>
    <li><Link clLinkss="menu-link notify" to="/Admain">Admain</Link></li>
    <li>  <Link clLinkss="menu-link" to="/search">search</Link></li> 
    <li>  <Link clLinkss="menu-link" to="/About">About</Link></li> 
    
            </ul>
</div>
<div class="header-para">
    <span class="para-title">statrtup</span>
    
</div>
</header>


    )
  }
}

export default Header;