import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../css/formSector.css'
export class ScectorForm extends Component {
RefreshPage=()=> {
    Window.location.reload(false);
  }

  render() {
    return (
      <>
        <h1 className='h1-des'>Sector</h1>
        <table className="container">
          <thead>
            <tr>

              <th> <h1>startup Name</h1></th>
              
              <th> <h1>Update </h1></th>
              <th> <h1>Delete </h1></th>
            </tr>
          </thead>



          {
            this.props.data.map(item1 => {
              return (
                <>

                  {

                    item1.sectors.map((itemsectors, idx)=> {
                      return (

                        <>
                          <tbody>
                            <tr>
                               <td>{itemsectors.subSectorname}</td>
                                             
        
                              <td> <button>update</button> </td>
                              <td> <button onClick={() => {this.props.deleteSectors(item1._id, itemsectors._id);
                          }}>x</button> </td>
                            </tr>
                          </tbody>
                                
                            
                        


                        </>
                      )
                    })

                  }

                </>
              )

            })
          }






        </table>
        {/* ================== */}

        < div className="Form-2" >
          <h1> add secrors</h1>
          <Form onSubmit={this.props.addsectorsData}
        >
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>addsub Sector name</Form.Label>
                <Form.Control type="text" placeholder="subSectorname"  id="subSectorname" name="subSectorname" />
              </Form.Group>

            </Row>
              <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>color</Form.Label>
                <Form.Control type="color" id="subDesignColor" name="subDesignColor" placeholder="subDesignColor" />
              </Form.Group>

            <Form.Group className="mb-3" controlId="formGridAddress1">
              <Form.Label>Logo Image</Form.Label>
              <Form.Control placeholder="subSectorLogo" type="file" id="subSectorLogo" name="subSectorLogo" accept="image/*" />
            </Form.Group>

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
            <Button variant="primary" type="submit"  >
              Submit
            </Button>
          </Form>
        </div >

      </>
    )
  }
}

export default ScectorForm