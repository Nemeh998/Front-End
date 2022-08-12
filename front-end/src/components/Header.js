import React, {Component} from 'react'
import '../css/header.css'
import {Link} from "react-router-dom";
export class Header extends Component {
  render() {
    return (


      <div class="app">

        <div class="header">


          <div class="header-menu">
            <Link clLinkss="menu-link is-Linkctive" to="/">home</Link>
            <Link clLinkss="menu-link notify" to="/Admain">Admain</Link>
            <Link clLinkss="menu-link" to="/io">io</Link>
            <Link clLinkss="menu-link" to="#">Discover</Link>
          
          </div>

          <div class="search-bar">
            <input type="text" placeholder="Search" />
          </div>


          <img class="profile-img" ></img>

        </div>
      </div>

    )
  }
}

export default Header;