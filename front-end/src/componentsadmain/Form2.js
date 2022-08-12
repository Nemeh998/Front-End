import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../css/formSector.css'
export class Form2 extends Component
{

    render()
    {
        return (
            < div className="Form-2" >
<h1> add startup</h1>
<Form onSubmit={this.props.addstartupsData}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>startupName</Form.Label>
          <Form.Control  placeholder="startupName" type="text" id="startupName" name="startupName" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>founder Name</Form.Label>
          <Form.Control  type="text" id="founderName" name="founderName" placeholder="founderName" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3" controlId="formGridAddress1">
        <Form.Label>Logo Image</Form.Label>
        <Form.Control placeholder="LogoImage"    type="file" id="LogoImage" name="LogoImage" accept="image/*"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>Email</Form.Label>
        <Form.Control placeholder="@example" type="email" id="nemailAddressme" name="emailAddress" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGridAddress2">
        <Form.Label>websiteURL</Form.Label>
        <Form.Control type="url" id="nawebsiteURLme" name="websiteURL" />
      </Form.Group>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control  input type="text" id="city" name="city"/>
        </Form.Group>

      
  <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>Employees</Form.Label>
          <Form.Control type="number" id="numberOfEmployees" name="numberOfEmployees"/>
        </Form.Group>
        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>year Of Establishment</Form.Label>
          <Form.Control type="datetime-local" id="yearOfEstablishment" name="yearOfEstablishment"/>
        </Form.Group>
      </Row>




          <Form.Group as={Col} controlId="formGridState">
          <Form.Label>mainSectorName</Form.Label>
          <Form.Select defaultValue="Choose..."  id="mainSectorName" name="mainSectorName">
      {
          
              this.props.data.map(item=>{
            return(
                <>
                
            <option value={item._id}>{item.mainSectorName}</option>

                
                </>
            )
        })
    }
    </Form.Select>

    </Form.Group>

            
            <Form.Group as={Col} controlId="formGridState">
          <Form.Label>subSectorname</Form.Label>
                
          <Form.Select  id="Sectors" name="Sectors" defaultValue="Choose...">
        {
             this.props.data.map(item=>{
                return(
                    <>                   
{item.sectors.map(itemsectors=>{
              return(
                  <>
          <option value={itemsectors._id}>{itemsectors.subSectorname}</option>
                  </>
              )
          })}
                    </>
                )
        })}
        </Form.Select>
        </Form.Group>
      <Button variant="primary" type="submit"  > 
        Submit
       </Button>
    </Form>
            </div >
        )
    }
}

export default Form2