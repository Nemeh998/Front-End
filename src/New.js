import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './css/formSector.css';
import axios from "axios";

export class New extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       delete:""
//     }}
//   addstartupsData = async (e) => {
//     e.preventDefault()
//     let newStartups = {
//       startupName: e.target.startupName.value,
//       LogoImage: e.target.LogoImage.value,
//       city: e.target.city.value,
//       founderName: e.target.founderName.value,
//       numberOfEmployees: e.target.numberOfEmployees.value,
//       yearOfEstablishment: e.target.yearOfEstablishment.value,
//       websiteURL: e.target.websiteURL.value,
//       emailAddress: e.target.emailAddress.value,
//       Sectors: e.target.Sectors.value,
//       mainSectorName: e.target.mainSectorName.value,
//     }
//     this.setState({
//       data: startupsData.data,
//     });
//     if(this.state.delete==='add'){
//     const serverUrl = process.env.REACT_APP_SERVER;
//     let startupsData = await axios.post(`${serverUrl}/postDataHendler`, newStartups)
//     this.setState({
//       data: startupsData.data,
//     });
//       window.location.reload();
//   }
//   else  if(this.state.delete==='delete'){

//   }
//   };
//   button=(e)=>{
// this.setState=({
//   delete:e

// })
//   }
  render() {
    return (
      <>

    </>
    )
  }
}

export default New