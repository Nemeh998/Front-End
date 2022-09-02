import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './css/formSector.css';
import axios from "axios";

export class New extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delete:""
    }}
  addstartupsData = async (e) => {
    e.preventDefault()
    let newStartups = {
      startupName: e.target.startupName.value,
      LogoImage: e.target.LogoImage.value,
      city: e.target.city.value,
      founderName: e.target.founderName.value,
      numberOfEmployees: e.target.numberOfEmployees.value,
      yearOfEstablishment: e.target.yearOfEstablishment.value,
      websiteURL: e.target.websiteURL.value,
      emailAddress: e.target.emailAddress.value,
      Sectors: e.target.Sectors.value,
      mainSectorName: e.target.mainSectorName.value,
    }
    this.setState({
      data: startupsData.data,
    });
    if(this.state.delete==='add'){
    const serverUrl = process.env.REACT_APP_SERVER;
    let startupsData = await axios.post(`${serverUrl}/postDataHendler`, newStartups)
    this.setState({
      data: startupsData.data,
    });
      window.location.reload();
  }
  else  if(this.state.delete==='delete'){

  }
  };
  button=(e)=>{
this.setState=({
  delete:e

})
  }
  render() {
    return (
      <>
<button   onClick={() => {this.button('add')}}></button> 
<button  onClick={() => {this.button('delete')}}></button>

      <div className='all-form-pic'>

      <div className='AddStartup-form'>
      < div className="Form-2" >
      <Form onSubmit={this.addstartupsData}

      // onClick={() => {this.RefreshPage()}}
      >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>startupName</Form.Label>
            <Form.Control placeholder="startupName" type="text" id="startupName" name="startupName" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>founder Name</Form.Label>
            <Form.Control type="text" id="founderName" name="founderName" placeholder="founderName" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formGridAddress1">
          <Form.Label>Logo Image</Form.Label>
          <Form.Control type="url" id="LogoImage" name="LogoImage" />
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
            {/* <Form.Control input type="text" id="city" name="city" /> */}
            <Form.Select id="city" name="city" >
              <option value="all">All</option>
              <option value="Amman">Amman</option>
              <option value="Balqa ">Balqa</option>
              <option value="Madaba ">Madaba </option>
              <option value="Zarqa ">Zarqa </option>
              <option value="Ajlun ">Ajlun </option>
              <option value="Irbid">Irbid</option>
              <option value="Mafraq ">Mafraq </option>
              <option value="Aqaba ">Aqaba </option>
              <option value="Karak ">Networking</option>
              <option value="Ma'an ">Ma'an </option>
              <option value="Tafilah  ">Tafilah  </option>
            </Form.Select>
          </Form.Group>


          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>Employees</Form.Label>
            <Form.Control type="number" id="numberOfEmployees" name="numberOfEmployees" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>year Of Establishment</Form.Label>
            <Form.Control type="datetime-local" id="yearOfEstablishment" name="yearOfEstablishment" />
          </Form.Group>
        </Row>




        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>mainSectorName</Form.Label>
          <Form.Select defaultValue="Choose..." id="mainSectorName" name="mainSectorName">
            {

              this.props.data.map(item => {
                return (
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

          <Form.Select id="Sectors" name="Sectors" defaultValue="Choose...">
            {
              this.props.data.map(item => {
                return (
                  <>
                    {item.sectors.map(itemsectors => {
                      return (
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
    </div >
    </div >
    </>
    )
  }
}

export default New