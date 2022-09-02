import React, { Component } from 'react'


import Modal from 'react-bootstrap/Modal';

import './css/modalcard.css'

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
 
      <div class="continer2">
      <p>Employees </p>
          <p>city</p>
         <p>website</p> 
      <p>start</p>
      <span>{this.props.selectDataStartUp.numberOfEmployees}</span>
        
          <span>{this.props.selectDataStartUp.city}</span>
          
        <a href={this.props.selectDataStartUp.websiteURL}><span>{this.props.selectDataStartUp.startupName}</span></a>
        {
      
   
        }
      </div>
    
    
      </Modal>

       
      
      </>
    )
  }
}

export default ModalSturtup