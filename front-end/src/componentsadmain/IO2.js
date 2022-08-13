import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Spinner,
    Card,
    Form,
    OverlayTrigger,
    Tooltip,
    Modal,
} from "react-bootstrap";
import "../css/search.css";

import axios from "axios";
// import CoursePageModal from "./components/CoursePageModal";
// import {
//   IoMdTime,
// //   BsBarChart,


//   BsCheck,
// //   IoHeartCircleSharp,
// } from "react-icons/all";

export class IO2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: this.props.data,
            filter: this.props.data,
            mainsectorfilterData: [],
            sectorfilterData: [],
            startupfilterData: [],
            mainsectorvalue: "all",
            sectorValue: "all",
            startpValue:"all",
            searchValue: "",

        }
    }

    levelFilter = (e) => {
        this.setState({mainsectorvalue: e.target.value, searchValue: ""});
        let mainsectorvalue = e.target.value;

        // if(

        // )
    }

    sectorFilter = (e) => {
        this.setState({sectorValue: e.target.value, searchValue: ""})
        let sectorValue = e.target.value
    }
startupfilter=(e)=>{
    this.setState({startpValue: e.target.value, searchValue: ""});
    let startpValue = e.target.value
}
    render() {
        return (
            <div>
                <div className="search-container">
                    <Form onSubmit="{this.searchFilter}">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="d-block">Search startup</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="What you want to learn"
                                className="course-search-input"
                                name="searchValue"
                                value="{this.state.searchValue}"
                                onChange=""
                            />
                            <input
                                type="submit"
                                value="Search"
                                className="course-search-btn btn btn-success"
                            />
                        </Form.Group>
                    </Form>
                </div>
                {/* ========================================== */}
                <div className="select-container">
                    <Form.Group controlId="exampleForm.SelectCustom1">
                        <Form.Label>Level</Form.Label>
                        <Form.Control
                            as="select"
                            name="level"
                            onChange={this.levelFilter}
                        >
                            <option value="all">All</option>
                            {this.props.data.map(item1 => {
                                return (<>

                                    <option value={item1.mainSectorName}>{item1.mainSectorName}</option>

                                </>)


                            }
                            )}
                        </Form.Control>
                    </Form.Group>
                    {/* ===================================================== */}
                    <Form.Group controlId="exampleForm.SelectCustom2">
                        <Form.Label>Duration</Form.Label>
                        <Form.Control
                            as="select"
                            name="duration"
                            onChange={this.sectorFilter}
                        >
                            <option value="all">All</option>
                            {
                                this.props.data.map(item1 => {
                                    return (
                                        <>
                                            {item1.sectors.map(itemsectors => {
                                                return (
                                                    <>

                                                        <option value={itemsectors.subSectorname}>{itemsectors.subSectorname} </option>

                                                    </>)
                                            })}

                                        </>
                                    )
                                })}



                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.SelectCustom3">
                        <Form.Label>Skills</Form.Label>
                        <Form.Control
                            as="select"
                            name="skills"
                            onChange={this.startupfilter}
                        >
                            <option value="all">All</option>
                            {
                                this.props.data.map(item1 => {
                                    return (
                                        <>
                                            {item1.sectors.map(itemsectors => {
                                                return (
                                                    <>
                                                        {
                                                            itemsectors.startup.map(itemstartup => {
                                                                return (
                                                                    <>
                                                                        <option value={itemstartup.startupName}>{itemstartup.startupName}</option>

                                                                    </>
                                                                )

                                                            })
                                                        }
                                                    </>
                                                )
                                            })}
                                        </>)
                                })}

                        </Form.Control>
                    </Form.Group>
                </div>
            </div>

        )
    }
}

export default IO2