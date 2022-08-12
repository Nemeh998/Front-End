import axios from "axios";
import React, {Component} from 'react';
import Form2 from './Form2';
/* The following line can be included in a src/App.scss */

import "bootstrap/dist/css/bootstrap.min.css";

export class Add extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [],
            scoresdata: []
        }
    }
    componentDidMount() {
        const serverUrl = process.env.REACT_APP_SERVER;
        const url = `${serverUrl}/getDataHendler`;

        axios
            .get(url)
            .then((response) => {
                this.setState({
                    data: response.data,
                });
                console.log(this.state.data);
                console.log(this.state.data._id);
            })
            .catch((err) => {
                this.setState({err: "There is and error"});
            });
    }
    

    render() {
        return (

            <div class="row" >
                <div class="col-md-12">
                    <div>
                        {/* {
                            this.state.data.map(item =>
                            {
                                // console.log("item", item.sectors)

                                item.sectors.map(item =>
                                {
                                    // console.log("item", item)
                                    this.setState({

                                        scoresdata: item
                                    })
                                    // console.log(this.state.scoresdata)
                                })
                            })
                        } */}
                    </div>

                    <form onSubmit={this.addSectorsData} >
                        <h1>addSectorsData </h1>

                        <fieldset>

                            {/* <label for="addsubSectorname">AddsubSectorname:</label>
                            <input type="text" id="addsubSectorname" name="addsubSectorname" /><br /> */}

                            <label for="subSectorLogo">subSectorLogo:</label>
                            <input type="file" id="subSectorLogo" name="subSectorLogo" accept="image/*" /><br />

                            <label for="subDesignColor">subDesignColor</label>
                            <input type="color" id="subDesignColor" name="subDesignColor" /><br />



                            {/* <label for="subParentCategoryName">subParentCategoryName:</label>
                            <input type="text" id="subParentCategoryName" name="subParentCategoryName" /><br /> */}

                        </fieldset>

                        <fieldset>

                            <legend><span class="number">2</span> Your Profile</legend>
                            <label for="mainSectorName">mainSectorName</label>
                            <select id="mainSectorName" name="mainSectorName">
                                <optgroup label="Web">
                                    {
                                        this.state.data.map(item => {
                                            return (

                                                < option value={item._id.toString()}>{item.mainSectorName}</option>

                                            )
                                        }

                                        )}

                                </optgroup>
                            </select>


                        </fieldset>
                        <input type="submit" value="Sign Up" />

                    </form>

                    {/* <Form2
                        scoredata={this.state.scoresdata}
                    /> */}
                </div>
            </div >
        )


    }
}

export default Add