import React, {Component} from 'react'
import axios from "axios";
import '../css/admin.css'
import Form2 from './StartupForm'
import { withAuth0 } from "@auth0/auth0-react";
import sec from '../img/sec.webp'
import startup from '../img/startup.jpg'
import{Link,Outlet} from "react-router-dom";
export class Admain extends Component {
    // end get data
    render() {
        const { user,isAuthenticated } = this.props.auth0;

        return isAuthenticated && user.email==='98nemh@gmail.com' ?(
            
            
            <div>
<div >
<nav className="nav-bar-admain">
  
        <Link to="Form2">sec</Link>
        <br/>
        <Link to="ScectorForm">startup</Link>
      </nav>
      <Outlet/>
</div>


{/*========================================================== */}

      
{/* <h1><span class="blue">&lt;</span>Table<span class="blue">&gt;</span> <span class="yellow">Responsive</pan></h1></span> */}



                    </div>
                    
                    
                
        ):(

          alert("you sould log in!")
        )
    }
}

export default withAuth0(Admain);