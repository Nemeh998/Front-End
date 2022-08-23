import React, {Component} from 'react'
import '../css/header.css'
import {Link} from "react-router-dom";
import logo from '../img/jordan.jpg';
export class Header extends Component {
  render() {
    return (
<header>
<div id="navbarContainer">
    <div id="logo" class="logo">
        <img src={logo} alt=""/>
    </div>
    <ul>
    <li><Link clLinkss="menu-link is-Linkctive" to="/">home</Link></li>
    <li><Link clLinkss="menu-link notify" to="/Admain">Admain</Link></li>
    <li>  <Link clLinkss="menu-link" to="/search">search</Link></li> 
    
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