import React, {Component} from 'react'
import axios from "axios";
import '../css/admin.css'
import Form2 from './Form2'
export class Admain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            scoresdata: []
        }
    }
    // start get data
    componentDidMount() {
        const serverUrl = process.env.REACT_APP_SERVER;
        const url = `${serverUrl}/getDataHendler`;

        axios
            .get(url)
            .then((response) => {
                this.setState({
                    data: response.data,
                });
                console.log(this.props.data);
                console.log(this.props.data._id);
            })
            .catch((err) => {
                this.setState({err: "There is and error"});
            });
    }
    // end get data
    render() {
        return (
            <div>

 
      
     
<h1 className='h1-des'>startup</h1>
      
{/* <h1><span class="blue">&lt;</span>Table<span class="blue">&gt;</span> <span class="yellow">Responsive</pan></h1></span> */}


<table className="container">
	<thead>
    <tr>
          
          <th> <h1>startup Name</h1></th>
          <th> <h1>logo </h1></th>
          <th> <h1>Update </h1></th>
          <th> <h1>Delete </h1></th>
        </tr>
	</thead>
	
                    
                        
      {
          this.props.data.map(item1 => {
            return(
                <>
                
                {
                
                    item1.sectors.map(itemsectors => {
return(

                        <>
                        
                        {
                             itemsectors.startup.map((itemstartup,idx)=>{
                                return(

                                           <tbody>
                                           <tr>
                                    
                                             
                                              <td>{itemstartup.startupName}</td>
                                             
          <td>{itemstartup._id}logo </td>
          <td> <button>update</button> </td>
          <td> <button onClick={()=>{this.props.deleteStartUp(item1._id,itemsectors._id,itemstartup._id,idx)}}>x</button> </td>
                                              </tr>
                                          </tbody>
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




    
                        
        </table>
        <Form2
        data={this.props.data}
        addstartupsData={this.props.addstartupsData}
        />
                    </div>
                    
                    
                
        )
    }
}

export default Admain