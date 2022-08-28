import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../css/formSector.css';
import DeleteIcon from '@mui/icons-material/Delete';
import Card from 'react-bootstrap/Card';
export class ScectorForm extends Component {
  RefreshPage = () => {
    Window.location.reload(false);
  }

  render() {
    return (
      <>
        <h1 className='h1-des'>Sector</h1>
        <div className='contener'>

          {
            this.props.data.map(item1 => {
              return (
                <>

                  {

                    item1.sectors.map((itemsectors, idx) => {
                      return (
                        <div className='pic-button'>
                          <Card border="secondary" className='cardDelAdd'>
                          <Card.Header>{itemsectors.subSectorname}</Card.Header>
                            <Card.Body>

                              <Card.Img variant="top" src={itemsectors.LogoImage} />
                            </Card.Body>
                            <Card.Footer>
                              <div className='contbtn'>
                                <button onClick={() => {this.props.deleteSectors(item1._id, itemsectors._id)}}><DeleteIcon /></button>
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

</div>





          {/* ================== */}

          < div className="Form-2" >
            <h1> add secrors</h1>
            <Form onSubmit={this.props.addsectorsData}
            >
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>addsub Sector name</Form.Label>
                  <Form.Control type="text" placeholder="subSectorname" id="subSectorname" name="subSectorname" />
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