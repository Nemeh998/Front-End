import React, {Component} from 'react'
import axios from "axios";
import '../css/admin.css'
import Form2 from './StartupForm'

import{Link,Outlet} from "react-router-dom";
export class Admain extends Component {
    // end get data
    render() {
    

        return (
            <div>
<div >
<nav className="nav-bar-admain">
        <Link to="Form2">Startup</Link>
        <br/>
        <Link to="ScectorForm">Sector</Link>
      </nav>
      <Outlet/>
</div>


{/*========================================================== */}

      
{/* <h1><span class="blue">&lt;</span>Table<span class="blue">&gt;</span> <span class="yellow">Responsive</pan></h1></span> */}



                    </div>
                    
                    
                
        )
    }
}

export default Admain