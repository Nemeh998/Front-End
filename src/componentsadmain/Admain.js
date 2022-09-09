import React, {Component} from 'react'
import '../css/admin.css'
import {withAuth0} from "@auth0/auth0-react";
import {Link, Outlet} from "react-router-dom";


import Dropdown from 'react-bootstrap/Dropdown';
import axios from "axios";
import StarIcon from '@mui/icons-material/Star';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from 'react-bootstrap/Accordion';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import {Card} from "react-bootstrap";
import PersonIcon from '@mui/icons-material/Person';
import BottomNavigation from '@mui/material/BottomNavigation';
import DoNotDisturbAltIcon from '@mui/icons-material/DoNotDisturbAlt';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DoneIcon from '@mui/icons-material/Done';
import {styled} from '@mui/material/styles';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Avatar from '@mui/material/Avatar';
import BusinessIcon from '@mui/icons-material/Business';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
// import class from '../About';

export class Admain extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      counter: 0

    }
  }

  delete = (mainSectorid, sectorsId, startupid, idx) => {
    let deletestartup = {
      mainSectorid: mainSectorid,
      sectorsId: sectorsId,
      startupid: startupid,
      idx: idx
    };
    const serverUrl = process.env.REACT_APP_SERVER;
    let data= axios
      .delete(`${serverUrl}/deletStartUpDataHendler`, {
        params: deletestartup,
      }).then((response) => {
        this.setState({
          data: response.data,
          filter:response.data
    
        });
        
        window.location.reload();
      }).catch((err) => {
      });

  }
  aprove = async (item1, itemsectors, itemstartup) => {

    let newdata = {

      item1id: item1,
      itemsectorsid: itemsectors,
      itemstartupid: itemstartup
    }
    console.log(newdata)
    const serverUrl = process.env.REACT_APP_SERVER;
    let startupsData = await axios.post(`${serverUrl}/approveStartupDataHendler`, newdata)

    this.setState = ({
      data: startupsData.data
    })
    window.location.reload()
  }
  countData=(data)=>{
    let count = 0;
    data?.forEach(item1 => {
      item1.sectors?.forEach(itemsectors => {
        count += itemsectors.startup?.filter((obj) => !obj.approved)?.length;
  });
  });
  return count;
}

  render() {
  
    
  
    const {user, isAuthenticated} = this.props.auth0;

    return isAuthenticated && user.email === '98nemh@gmail.com' ? (


      <div >

{/*  */}

        <section className="our-services">
          <div className="">
            
            <div className="all-service pt-5 pb-5">
              <div className="row ">
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">

                  <Link to="/Admain/"><BusinessIcon style={{fontSize:'5rem'}}className="iconinadmain"/></Link>
                  <p>startup</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">

                  <Link to="ScectorForm"><AccountBoxIcon style={{fontSize:'5rem'}}className="iconinadmain" /></Link>

                  <p>sectors</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <div className='to' >
 <span className='number'>{this.countData(this.props.data)}</span>
                  <DropdownButton id="dropdown-basic-button" title={ <CircleNotificationsIcon style={{fontSize:'3rem'}}className="iconinadmain"/>} >
               
                    {
                                 
                    this.props.data?.map(item1 => {
                      return (
                        <>

                          {

                            item1.sectors?.map(itemsectors => {
                
                              return (
                                <>
                                  {
                                    
                                    itemsectors.startup?.filter((obj) => !obj.approved)?.map((itemstartup, idx) => {
                                   console.log(itemsectors.startup?.filter((obj) => !obj.approved).length);
                                    
                                      return (
                                        <>

                                          <Accordion defaultActiveKey="0">
                                            <Accordion.Item eventKey="1">
                                              <Accordion.Header>
                                                <div className='all-button'>
                                                  <img src={itemstartup.LogoImage}></img>
                                                  <div className="text">    {itemstartup.startupName}</div>
                                                  <button className='button-indrop' onClick={() => {this.aprove(item1._id, itemsectors._id, itemstartup._id)}}><DoneIcon /></button>

                                                  <button className='button-indrop' onClick={() => {this.delete(item1._id, itemsectors._id, itemstartup._id, idx);
                                                  } }><DoNotDisturbAltIcon /></button>
                                                </div>

                                              </Accordion.Header>
                                              <Accordion.Body>

                                                <Card sx={{maxWidth: 100}}>
                                                  <CardHeader
                                                    avatar={
                                                      <Avatar sx={{bgcolor: red[500]}} aria-label="recipe">
                                                        {itemstartup.numberOfEmployees}
                                                      </Avatar>
                                                    }

                                                    title={itemstartup.startupName}

                                                  />
                                                  <CardMedia
                                                    component="img"
                                                    height="50"
                                                    src={itemstartup.LogoImage}
                                                    alt="Paella dish"
                                                  />
                                                  <CardContent>
                                                    <Typography variant="body2" color="text.secondary">
                                                      {itemstartup.city}
                                                    </Typography>
                                                  </CardContent>


                                                </Card>
                                              </Accordion.Body>
                                            </Accordion.Item>

                                          </Accordion>


                                        </>
                                      )
                                    
                                    
                                    })}
                                </>
                              )})}
                        </>

)})}
 
</DropdownButton>
</div>
                  <p>Notifications</p>
                </div>

              </div>
            </div>
          </div>
        </section>




        <Outlet />








      </div>



    ) : (

      <div className='login'>  Admain login...</div>
    )
  }

}
export default withAuth0(Admain);