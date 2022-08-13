import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import './css/home.css'
import './css/io.css'
import ModalSturtup from './ModalSturtup';
import Spinner from 'react-bootstrap/Spinner';


 export class Home extends Component {
    
constructor(props){
    super(props);
    this.state={
         AllData:this.props.data
    }
}

displayAsCard = (data)=>{
    this.props.displayCardAsModel(data)
}  
  
  render() {
      
      return (
          <div>
                 <div>
                    <div className="wrapper">
   
   <section id="home" className="sec-main">
     <h1 className="main-heading">Where creativity happens.</h1>
   </section>
 
   <section id="about" className="sec-about">
     <div className="container1">
       <h1>About me</h1>
 
       <hr />
 
       <div className="row-1">
         <div class="col-sm-6 col-sm-offset-3">
           <p>Startups are a valuable partner, with our business relationship and cooperation we succeed to attract and gain lots of opportunities which made a difference in our business, we are proud to work with startups where we can build success</p>
         </div>
       </div>
     </div>
   </section>
   </div>
   </div>
    {/* ============================= */}
    {this.props.data  ===0 ?(
   <>
   <Spinner animation="border" variant="success" />
   <p style={{ color: "green" }}>Loading...</p>
 </>
    ):(
<div className="All-card">
                    {this.props.data.map(item1 => {
                        console.log(item1)
                        return (
                            <>
                                    {
                                        item1.sectors.map(itemsectors => {
                                            return (

                                < Card style={{width: '30rem'}} className="text-center" >
                                    <Card.Header className='card-header'>{itemsectors.subSectorname}</Card.Header>
                                    < Card style={{width: '30rem'}}>
                                                {itemsectors.startup.map(itemstartup=>{
                                                    return(
                                                        <>
                                                        
                                                        <p onClick={()=>{this.displayAsCard(itemstartup.startupName)}}>{itemstartup.startupName}</p>
                                                    </>
                                                    )
                                                    
                                                }
                                                
                                                
                                                )
                                                
                                                
                                                
                                            }

     
                                                    {/* // <Card.Img variant="top" src="holder.js/100px180" /> */}
                                                    {/* // LogoImage */}
                                             
                                            

                                             

                                           
                                                    <ModalSturtup
                                               
                                               selectDataStartUp={this.props.selectDataStartUp}
                                               handleClose={this.props.handleClose}
                                               displayCard={this.props.displayCard}
                                               />
</Card>

                                            </Card>
                                            )
                                        })
                                    }
                                    {/* < Card.Footer className="text-muted"></Card.Footer> */}
                          
                            </>
                        )
                        
                    })
                }
                </div>



    )}
                

            </div>
        )
    }
}

export default Home