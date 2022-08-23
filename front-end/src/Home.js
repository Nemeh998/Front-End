import React, {Component} from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import './css/home.css'

import ModalSturtup from './ModalSturtup';
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
                <div>
                    <div className="wrapper">



                        <section id="about" className="sec-about">
                            <div className="container1">
                                <h1>About </h1>

                                <hr />

                                <div className="row-1">
                                    <div class="script">
                                        <p>Startups are a valuable partner, with our business relationship and cooperation we succeed to attract and gain lots of opportunities which made a difference in our business, we are proud to work with startups where we can build success</p>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
             
                    <div className='filter-container' >
                {this.props.data.map(item1 => {
               
               return (
                   <>
                {
                    item1.sectors.map(itemsectors => {
                        return (
                            <>

                                    <button onClick={()=>{this.displaystartup(itemsectors.subSectorname)}}>{itemsectors.subSectorname}</button>
                                   
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
               
               return (
                   <>
                           <img src={item1.LogoImage} alt="nopic"  onClick={()=>{this.displayAsCard(item1.startupName)}}/>
                  

                   </>
               )

           })
           }
        

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