import {React , Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../css/updatestartup.css';
import img from '../img/start2.jpg';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
export class UpdatestartUpdata extends Component {
  render() {
    return (
      <div  >  
      <Modal 
    className='Modal'
         show={this.props.displayCardUpdate} 
        size={'xl'} 
        animation={'true'} 
        onHide={this.props.handleCloseUpdatecard}>
   <Modal.Header className='modal-header' closeButton>
   {this.props.selectupdateCrad.startupName}
   </Modal.Header>
   
        <div   className='modal-pic'>
          <img src={img} alt={img}/>
   <Form className='Form-Updata' onSubmit={this.props.updateStartUp}

>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridEmail" style={{color:'black'}}>
      <Form.Label>startupName</Form.Label>
      <Form.Control defaultValue={this.props.selectupdateCrad.startupName} type="text" id="startupName" name="startupName" />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridPassword">
      <Form.Label>founder Name</Form.Label>
      <Form.Control type="text" id="founderName" name="founderName" defaultValue={this.props.selectupdateCrad.founderName} />
    </Form.Group>
  </Row>

  <Form.Group className="mb-3" controlId="formGridAddress1">
    <Form.Label>Logo Image</Form.Label>
    <Form.Control placetype="url"  id="LogoImage" name="LogoImage" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>Email</Form.Label>
    <Form.Control defaultValue={this.props.selectupdateCrad.nemailAddressme} type="email" id="nemailAddressme" name="emailAddress" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formGridAddress2">
    <Form.Label>websiteURL</Form.Label>
    <Form.Control defaultValue={this.props.selectupdateCrad.nawebsiteURLme} type="url" id="nawebsiteURLme" name="websiteURL" />
  </Form.Group>
  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control defaultValue={this.props.selectupdateCrad.city} input type="text" id="city" name="city" />
    </Form.Group>


    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>Employees</Form.Label>
      <Form.Control defaultValue={this.props.selectupdateCrad.numberOfEmployees} type="number" id="numberOfEmployees" name="numberOfEmployees" />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>year Of Establishment</Form.Label>
      <Form.Control defaultValue={this.props.selectupdateCrad.yearOfEstablishment}  type="datetime-local" id="yearOfEstablishment" name="yearOfEstablishment" />
    </Form.Group>
  </Row>

  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>
</div> 
    </Modal>
    
    
    </div>
    )
  }
}

export default UpdatestartUpdata