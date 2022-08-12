import React, { Component } from 'react'
// import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './css/modalcard.css'
export class ModalSturtup extends Component {
    constructor(props){
    super(props);
    this.setState={
        sturtupdata:this.props.selectDataStartUp,
    }
}

// LogoImage: "data2"
// city: "data2"
// emailAddress: "data2"
// founderName: "data2"
// numberOfEmployees: 1
// startupName: "addd"
// websiteURL: "data2"
// yearOfEstablishment:

  render() {
    return (
      <>
        
        <Modal     show={this.props.displayCard} 
          size={'md'} 
          animation={'true'} 
          onHide={this.props.handleClose}>
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>{this.props.selectDataStartUp.startupName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalBody">
                                                       {/* // <Card.Img variant="top" src="holder.js/100px180" /> */}
<p>founder Name:{this.props.selectDataStartUp.founderName}</p>
<p>number Of Employees{this.props.selectDataStartUp.numberOfEmployees}</p>
<p>city{this.props.selectDataStartUp.city}</p>
<p>email Address{this.props.selectDataStartUp.emailAddress}</p>
<p>website URL{this.props.selectDataStartUp.websiteURL}</p>
        </Modal.Body>
        <Modal.Footer className='modal-footer'>
         
      <p>year Of Establishment{this.props.selectDataStartUp.yearOfEstablishment}</p>
        </Modal.Footer>
      </Modal>

      
      </>
    )
  }
}

export default ModalSturtup