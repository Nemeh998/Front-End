import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/home.css'
import Spinner from 'react-bootstrap/Spinner';
import ModalSturtup from './ModalSturtup';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import CallIcon from '@mui/icons-material/Call';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './css/formSector.css';
import Button from 'react-bootstrap/Button';

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datanewStartups:[]
    }}

    displayAsCard = (data) => {
        this.props.displayCardAsModel(data)
    }


    displaystartup = (data) => {
        this.props.filterdSector(data)
    }

    render() {

        return (
            <div>
                  <div className="hero-img">
          <div className="container h-100">
            <div className="all-header">
      
            </div>
          </div>
        </div>
                   <section className="our-services">
          <div className="">
            <div className="our-services-header pb-5 pt-2">
              <p>Your Gateway
to the Jordanian
Entrepreneurship
Ecosystem </p>
            </div>
            <div className="all-service pt-5 pb-5">
              <div className="row ">
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <BusinessCenterIcon className="icons" />
                  <p>To provide members with a platform</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <CallIcon className="icons" />

                  <p>Increase your customers</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <PersonPinIcon className="icons" />
                  <p>Introduction about you</p>
                </div>
                <div className="col d-flex justify-content-center flex-column align-items-center h-50">
                  <AccessAlarmIcon className="icons" />
                  <p>Save time to reach you</p>
                </div>
              </div>
            </div>
          </div>
        </section>
                <div>
                    <div className="wrapper">



                        <section id="about" className="sec-about">
                            <div className="container1">
                                <h1> Startup Map </h1>

                                <hr />

                                <div className="row-1">
                                    <div class="script">
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

             
                {this.props.data?.length === 0 ? (
                    <div className='spinner1'>
                        <Spinner className='spinneritem' size='lg' animation="border" variant="primary" />

                    
                    </div>
                ) : (<>
                <div className='filter-container' >
        <button onClick={()=>{this.displaystartup('all')}}>{"All"}</button>
                {this.props.data?.map(item1 => {
                    
                    return (
                        <>
                {
                    item1.sectors?.map(itemsectors => {
                        console.log(itemsectors ,"test")
                        return (
                            <>

                                    <button onClick={()=>{this.displaystartup(itemsectors._id)}}>{itemsectors.subSectorname}</button>
                                   
                            </>
                        )
                    })
                }
               

            </>
        )
        
    })
}
    </div>


    <div className='AppHome'>
    <div className='companycard'>
        

   {this.props.selectDataSector?.map(item1 => {
               return (
                   <>


<Card border="secondary" className='Card'>

<Card.Body>

         <Card.Img variant="top" src={item1?.LogoImage} onClick={()=>{this.displayAsCard(item1?._id)}} />

</Card.Body>

</Card>
                  

                   </>
               )

           })
           }
        

</div>
</div>

</>

                )
                }

<div className='bkcontener'>
  <div className='formcontener'>

           <Form style={{ margin: '10%' }} onSubmit={this.props.addstartupsDatafromUser}
>
  <h1>add your company</h1>
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

<Row className="mb-3">
  <Form.Group  as={Col} className="mb-3" controlId="formGridAddress1">
    <Form.Label>Logo Image</Form.Label>
    <Form.Control type="url" id="LogoImage" name="LogoImage"  placeholder="Logo" />
  </Form.Group>
  <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="@email" type="email" id="nemailAddressme" name="emailAddress" />
  </Form.Group>
  <Form.Group as={Col} className="mb-3" controlId="formGridAddress2"  >
    <Form.Label>websiteURL</Form.Label>
    <Form.Control type="url" id="nawebsiteURLme" name="websiteURL" placeholder="websiteURL"/>
  </Form.Group>
  </Row>


  <Row className="mb-3">
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Select id="city" name="city" >
        <option value="all">city</option>
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
      <Form.Control  className="form-width" type="number" id="numberOfEmployees" name="numberOfEmployees" placeholder="Employees"  />
    </Form.Group>
    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Establishment</Form.Label>
      <Form.Control className="form-width" type="datetime-local" id="yearOfEstablishment" name="yearOfEstablishment" />
    </Form.Group>
  </Row>



<Row>
  <Form.Group as={Col} controlId="formGridState">
    <Form.Label>mainSectorName</Form.Label>
    <Form.Select defaultValue="Choose..." id="mainSectorName" name="mainSectorName">
      {

        this.props.data?.map(item => {
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
        this.props.data?.map(item => {
          return (
            <>
              {item.sectors?.map(itemsectors => {
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
  </Row>
  <br></br>
  <Button variant="primary" type="submit" style={{ padding: '10px 10%' }} >
    Submit
  </Button>
</Form>
	      
      </div>
      </div>
   
                <ModalSturtup

                    selectDataStartUp={this.props.selectDataStartUp}
                    handleClose={this.props.handleClose}
                    displayCard={this.props.displayCard}
                />


            </div >
        )
    }
}

export default Home