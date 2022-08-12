import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Card from 'react-bootstrap/Card';
import './css/home.css'
import ModalSturtup from './ModalSturtup';
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
                {console.log(this.props.data,"alldata")}
              <div className="blog-header-img">
                            </div>
                            <p className='discrption'><span>Jordan Startup Map</span><br/>
                            Jordan Startup Map
The existing Jordanian startup landscape is a vibrant and diverse ecosystem. We have mapped 375+ startups across various verticals or focused sectors.</p>
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

            </div>
        )
    }
}

export default Home