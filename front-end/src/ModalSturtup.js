import React, { Component } from 'react'
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Card from 'react-bootstrap/Card'
import './css/modalcard.css'
import img from './img/jordan.jpg'
export class ModalSturtup extends Component {
    constructor(props){
    super(props);
    this.setState={
        sturtupdata:this.props.selectDataStartUp,
    }
}

  render() {
    return (
      <>
        
        <Modal     show={this.props.displayCard} 
          size={ 'lg'} 
          animation={'true'} 
          onHide={this.props.handleClose}
          class="counter">
      
    <div className='contener3'>
        {/* <div > */}
        <div className='img'>

      <img
        class="hero"
        src={this.props.selectDataStartUp.LogoImage}
        alt={this.props.selectDataStartUp.LogoImage}
      >

      </img>
    <p class="titel">{this.props.selectDataStartUp.startupName}</p>
  
        </div>
        {/* ============================== */}
      <div class="discraption">
      
    <p>founder</p> <br/>
    <p>{this.props.selectDataStartUp.founderName}</p>
      </div>
      </div>
      {/* <p class="Payment">Proceed to Payment</p> */}

      {/* <button class="cancel">Cancel Order</button> */}
      <div class="continer2">
      <p>Employees </p>
          <p>city</p>
         <p>website</p> 
      <p>start</p>
      <span>{this.props.selectDataStartUp.numberOfEmployees}</span>
        
          <span>{this.props.selectDataStartUp.city}</span>
          
        <a href={this.props.selectDataStartUp.websiteURL}><span>{this.props.selectDataStartUp.startupName}</span></a>
      <span>{this.props.selectDataStartUp.yearOfEstablishment}</span>
      </div>
    {/* </div> */}
    
      </Modal>

        {/* 
     
<p>email Address</p>
         */}
      
      </>
    )
  }
}

export default ModalSturtup