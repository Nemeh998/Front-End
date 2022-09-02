import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../css/formSector.css'
import UpdatestartUpdata from './UpdatestartUpdata';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import Card from 'react-bootstrap/Card';
import section from '../img/start2.jpg'
export class Form2 extends Component {
  RefreshPage = () => {
    Window.location.reload(false);
  }
  render() {
    return (<>
    
<div  className="container2">

      <h1  style={{ margin: '1%' }} className='h1-des'>startup</h1>
</div>
      <div className='contener'>
        {
          this.props.data.map(item1 => {
            return (
              <>

                {

                  item1.sectors.map(itemsectors => {
                    return (

                      <>

                        {
                          itemsectors.startup.map((itemstartup, idx) => {
                            console.log(itemstartup)
                            return (
<div className='pic-button'>
<Card border="secondary" className='cardDelAdd'>

<Card.Body>

         <Card.Img variant="top" src={itemstartup.LogoImage} />
</Card.Body>
 <Card.Footer>
                       <div className='contbtn'>         

<button onClick={() => {this.props.displayUpdateCardAsModel(item1._id,itemstartup._id,itemsectors._id, idx)}}><EditIcon/></button>
<button onClick={() => {this.props.deleteStartUp(item1._id, itemsectors._id, itemstartup._id, idx);this.RefreshPage() }
}> <DeleteIcon/> </button> 
</div>
</Card.Footer>
</Card>

                                

          
  </div>                   
                            )
                          })
                        }

                      </>
                    )
                  })

                }

              </>
            )

          })
        }
      </div>




      <div className="container2">
        <h1> add startup</h1>
</div>
      {/* ================== */}
      <div className='all-form-pic'>

<div className='AddStartup-form'>
<div className='img'>
  {/* <img src={section}/> */}
</div>
      < div className="Form-2" >
        <Form onSubmit={this.props.addstartupsData}

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

      </div>
      
      </div>
      <UpdatestartUpdata
        updateStartUp={this.props.updateStartUp}
        displayCardUpdate={this.props.displayCardUpdate}
        handleCloseUpdatecard={this.props.handleCloseUpdatecard}
        selectupdateCrad={this.props.selectupdateCrad}
        />
    </>

    )
  }
}

export default Form2