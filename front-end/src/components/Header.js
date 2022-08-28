import React, {Component} from 'react'
import '../css/header.css'
import {Link} from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import LoginButton from "../componentsAuth/LoginButton";
import LogoutButton from "../componentsAuth/LogoutButton";
export class Header extends Component {
  state = {
    grayScroll: false,
  };

  grayScrollFunction = () => {
    if (window.scrollY > 100) {
      this.setState({
        grayScroll: true,
      });
    } else {
      this.setState({
        grayScroll: false,
      });
    }
  };
  componentDidMount = () => {
    window.addEventListener("scroll", this.grayScrollFunction);
  }
  render() {
    return (

<Navbar
        collapseOnSelect
        expand="lg"
        // bg="dar"
        variant="light"
        fixed="top"
        className={this.state.grayScroll ? "gray-scroll" : "light"}
      >
         <div className="container">
          <Navbar.Brand href="#home" className="m-auto"> 
              {/* <img
              alt=""
              src={logo}
              width="80"
              height="80"
              className="d-inline-block align-top"
            />  */}
            {/* <div className="barnd-text">
              <p>Course</p>
              <p>Camp</p>
            </div>  */}

<div id="navbarContainer">
    <div id="logo" class="logo">
    {!this.props.isAuthenticated ? <LoginButton /> : <LogoutButton />}
      
    </div></div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto">
              <Nav.Link href="/">
                <Link to="/" className="home-nav-link">
                  Home
                </Link>
              </Nav.Link>

              <Nav.Link href="/Admain">
                <Link to="/Admain" className="home-nav-link">
                  Admain
                </Link>
              </Nav.Link>
  
              <Nav.Link href="/search">
                <Link to="/search" className="home-nav-link">
                  search
                </Link>
              </Nav.Link>


              <Nav.Link href="/About">
                <Link to="/About" className="home-nav-link">
                  About Us
                </Link>
              </Nav.Link>
            </Nav>
            <Nav className="mr-auto">
            
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>

    )
  }
}

export default Header;