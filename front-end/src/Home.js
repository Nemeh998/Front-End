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

export class Home extends Component {
   

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

             
                {this.props.data.length === 0 ? (
                    <div className='spinner1'>
                        <Spinner className='spinneritem' size='lg' animation="border" variant="primary" />

                    {/* <Spinner animation="grow" variant="primary" /> */}
                    
                    </div>
                ) : (<>
                <div className='filter-container' >
        <button onClick={()=>{this.displaystartup('all')}}>{"All"}</button>
                {this.props.data.map(item1 => {
                    
                    return (
                        <>
                {
                    item1.sectors.map(itemsectors => {
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
        

   {this.props.selectDataSector.map(item1 => {
            //    console.log(this.props.selectDataSector)
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