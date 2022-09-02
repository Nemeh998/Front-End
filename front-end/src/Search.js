import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
import './css/search.css'
import axios from "axios";
import {
  Spinner,
  Card,
  Form,
  OverlayTrigger,
  Tooltip,
  ListGroup,
} from "react-bootstrap";
// import Card from 'react-bootstrap/Card';
export class Search extends Component {
  state = {
    // allCourses: ,
    // for select 3 filterations:
    filterdStartup: [],
    NumberFilterd: [],
    CityFilterd: [],
    NumberValue: "all",
    CityValue: "all",
    // end of select 3 filterations
    searchValue: "",
    data: []
  };


  async componentDidMount() {
    const serverUrl = process.env.REACT_APP_SERVER;
    const url = `${serverUrl}/getDataHendler`;

    await axios
      .get(url)
      .then((response) => {
        let Arr=[]
        response.data.map(item1 => {
          item1.sectors.map(itemsectors => {
            itemsectors.startup.map(itemstartup => {
              Arr.push(itemstartup)

            

            })
          })
        })
        this.setState({
          data: response.data,
         filterdStartup: Arr
        });
      })
      .catch((err) => {
        this.setState({err: "There is and error"});
      });
  }
  searchFilter = async(e) => {

    e.preventDefault();
    let value = e.target.searchValue.value.toLowerCase();
    let Arr = []
console.log(value)
    let newdata = await this.state.data.map(item1 => {
      item1.sectors.map(itemsectors => {
        console.log(itemsectors)
        itemsectors.startup.map(itemstartup => {
          if (itemstartup.startupName.toLowerCase().includes(value)) {
            console.log(itemstartup)
            Arr.push(itemstartup)
        
          }
        })
      })
    })
    this.setState({filterdStartup: Arr});
    console.log(this.state.filterdStartup,'itemstartup')
  };

  searchChange = (e) => {
    this.setState({searchValue: e.target.value});
  };



  // ================================
  // ==============CityFilter==================
  // ================================

  CityFilter = async (e) => {
    this.setState({CityValue: e.target.value, searchValue: ""});
    let CityText = e.target.value;

    if (
      CityText !== "all" &&
      this.state.NumberValue === "all"
    ) {
      let Arr = []
      let newdata = await this.state.data.map(item1 => {
        item1.sectors.map(itemsectors => {
          itemsectors.startup.filter(itemstartup => {
            if (itemstartup.city) {
              if (itemstartup.city.toLowerCase().includes(CityText.toLowerCase())) {
                Arr.push(itemstartup)
              }
            }


          })
        })
      })

      this.setState({
        filterdStartup: Arr,
        CityFilterd: Arr
      });
      console.log(this.state.CityFilterd, this.state.filterdStartup, "CityFilterd")
      // =====================================================================
    }


    else if (
      CityText !== "all" &&
      this.state.NumberValue !== "all"

    ) {
      let Arr = []
      console.log(this.state.filterdStartup,'lolo')
      for (let i = 0;i <= this.state.filterdStartup.length;i++) {
        if (this.state.filterdStartup[i]?.city.toLowerCase().includes(CityText.toLowerCase())) {

          Arr.push(this.state.filterdStartup[i])


        }
      }


      this.setState({
        filterdStartup: Arr,
        CityFilterd: Arr
      });

      console.log(this.state.CityFilterd, this.state.filterdStartup, "CityFilterd&numer in City")
      // =====================================================================
    }
  };
  // ====================================
  // ===============NumberFilter
  // =====================================
  NumberFilter = async (e) => {
    this.setState({NumberValue: e.target.value, searchValue: ""});
    let NumberText = Number(e.target.value);

    if (NumberText !== "all" && this.state.CityValue === "all"
    ) {
      let Arr = []
      let newdata = await this.state.data.map(item1 => {
        item1.sectors.map(itemsectors => {
          itemsectors.startup.filter(itemstartup => {
            if (itemstartup.numberOfEmployees) {
              if (NumberText === 5) {

                if (itemstartup.numberOfEmployees <= 5 && itemstartup.numberOfEmployees >= 0) {
                  Arr.push(itemstartup)

                }
              }
              else if (NumberText === 10) {

                if (itemstartup.numberOfEmployees <= 10 && itemstartup.numberOfEmployees >= 6) {

                  Arr.push(itemstartup)

                }
              }
              else if (NumberText === 20) {

                if (itemstartup.numberOfEmployees <= 20 && itemstartup.numberOfEmployees >= 11) {

                  Arr.push(itemstartup)

                }
              }
            }



          })
        })
      });
      console.log(Arr)
      this.setState({
        filterdStartup: Arr,
        NumberFilterd: Arr
      })
      console.log(this.state.NumberFilterd, this.state.filterdStartup, 'filterNumber')
      // ==================================================================
    }

    else if (
      NumberText !== "all" &&
      this.state.CityValue !== "all"

    ) {
      let Arr = []
console.log(this.state.filterdStartup)
      for (let i = 0;i <= this.state.filterdStartup.length;i++) {
        if (this.state.filterdStartup[i]?.numberOfEmployees) {

          if (NumberText === 5) {

            if (this.state.filterdStartup[i]?.numberOfEmployees <= 5 && this.state.filterdStartup[i]?.numberOfEmployees >= 0) {
              Arr.push(this.state.filterdStartup[i])

            }
          }




          else if (NumberText === 10) {

            if (this.state.filterdStartup[i]?.numberOfEmployees <= 10 && this.state.filterdStartup[i]?.numberOfEmployees >= 6) {
              // console.log(this.state.filterdStartup)

              Arr.push(this.state.filterdStartup[i])

            }
          }

        }
        else if (NumberText === 20) {

          if (this.state.filterdStartup[i]?.numberOfEmployees <= 20 && this.state.filterdStartup[i]?.numberOfEmployees >= 11) {
            // console.log(this.state.filterdStartup)

            Arr.push(this.state.filterdStartup[i])

          }
        }

      }
      this.setState({
        filterdStartup: Arr,
        NumberFilterd: Arr
      });
      console.log(this.state.NumberFilterd, this.state.filterdStartup, 'filterNumber&city')

    }
    else if (this.state.CityValue !== "all") {
      this.setState({filterdCourses: this.state.CityFilterd});
      console.log(this.state.NumberFilterd, this.state.filterdStartup)

    }
    else {
      this.setState({filterdCourses: this.state.data});
      console.log(this.state.NumberFilterd, this.state.filterdStartup)

    }

  }

  render() {
    let img = []
    for (let i = 0;i < this.state.filterdStartup.length;i++) {

      img.push(
        <Card   className='Card'>
          <Card.Img variant="top" src={this.state.filterdStartup[i].LogoImage} />
          <Card.Body>
            <Card.Title>{this.state.filterdStartup[i].startupName}</Card.Title>
         
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item>Employees :{this.state.filterdStartup[i].numberOfEmployees}</ListGroup.Item>
            <ListGroup.Item>city :{this.state.filterdStartup[i].city}</ListGroup.Item>

          </ListGroup>

        </Card>
      )
      //  LogoImage: 
      //  city: 
      //  emailAddress: ""
      //  founderName: 
      //  numberOfEmployees: 
      //  startupName: 
      //  websiteURL:
      //  yearOfEstablishment:
      //  _id: 
    }

//     let date = this.props.selectDataStartUp.yearOfEstablishment?.split("-");
//     console.log(date[0])
// let 
    return (
      <>
          <div className="blog ">
          <div className="container">
            <div className="blog-header-img">
           

        <Form onSubmit={this.searchFilter}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="d-block">Search Startup</Form.Label>
            <Form.Control
              type="text"
              placeholder="search"
              className="course-search-input"
              name="searchValue"
              value={this.state.searchValue}
              onChange={this.searchChange}
            />
            <input
              type="submit"
              value="Search"
              className="course-search-btn btn btn-primary"
            />
          </Form.Group>
        </Form>
        {/* =============================== */}
        <div className="select-container">
          <Form.Group controlId="exampleForm.SelectCustom1">
            <Form.Label className='label'>Level</Form.Label>
            <Form.Control
              as="select"
              name="level"
              onChange={this.NumberFilter}
            >
              <option value="all">All</option>
              <option value={5}>0-5</option>
              <option value={10}>6-10</option>
              <option value={20}>11-20</option>
            </Form.Control>
          </Form.Group>
          {/* <Form.Group controlId="exampleForm.SelectCustom2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                as="select"
                name="duration"
                onChange={this.durationFilter}
              >
                <option value="all">All</option>
                <option value="above"> {">= month"} </option>
                <option value="less">{"< month"}</option>
              </Form.Control>
            </Form.Group> */}
          <Form.Group controlId="exampleForm.SelectCustom3">
            <Form.Label className='label'>city</Form.Label>
            <Form.Control
              as="select"
              name="City"
              onChange={this.CityFilter}
            >
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
            </Form.Control>
          </Form.Group>
        </div>

      </div>
            </div>
          </div>
      
      

        <div className='AppHome'>
          <div className='companycard'>

            {img}


          </div>
        </div>



     </>
    )
  }
}

export default Search