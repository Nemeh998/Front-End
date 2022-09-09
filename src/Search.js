import React, {Component} from 'react'
import './css/search.css'
import axios from "axios";
import {
  Card,
  Form,
  ListGroup,
} from "react-bootstrap";

export class Search extends Component {
  state = {

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
        response.data?.map(item1 => {
          item1.sectors?.map(itemsectors => {
            itemsectors.startup?.map(itemstartup => {
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
    let newdata = await this.state.data?.map(item1 => {
      item1.sectors?.map(itemsectors => {
        console.log(itemsectors)
        itemsectors.startup?.map(itemstartup => {
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
      let newdata = await this.state.data?.map(item1 => {
        item1.sectors?.map(itemsectors => {
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
      let newdata = await this.state.data?.map(item1 => {
        item1.sectors?.map(itemsectors => {
          itemsectors.startup.filter(itemstartup => {
            if (itemstartup.numberOfEmployees) {
              if (NumberText === 50) {

                if (itemstartup.numberOfEmployees <= 50 && itemstartup.numberOfEmployees >= 0) {
                  Arr.push(itemstartup)

                }
              }
              else if (NumberText === 100) {

                if (itemstartup.numberOfEmployees <= 100 && itemstartup.numberOfEmployees >= 51) {

                  Arr.push(itemstartup)

                }
              }
              else if (NumberText === 200) {

                if (itemstartup.numberOfEmployees <= 200 && itemstartup.numberOfEmployees >= 101) {

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

          if (NumberText === 50) {

            if (this.state.filterdStartup[i]?.numberOfEmployees <= 50 && this.state.filterdStartup[i]?.numberOfEmployees >= 0) {
              Arr.push(this.state.filterdStartup[i])

            }
          }




          else if (NumberText === 100) {

            if (this.state.filterdStartup[i]?.numberOfEmployees <= 100 && this.state.filterdStartup[i]?.numberOfEmployees >= 51) {
              // console.log(this.state.filterdStartup)

              Arr.push(this.state.filterdStartup[i])

            }
          }

        }
        else if (NumberText === 200) {

          if (this.state.filterdStartup[i]?.numberOfEmployees <= 200 && this.state.filterdStartup[i]?.numberOfEmployees >= 101) {
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
            <Card.Title >{this.state.filterdStartup[i].startupName}</Card.Title>
         
          </Card.Body>

          <ListGroup className="list-group-flush">
            <ListGroup.Item className="Employees">Employees :{this.state.filterdStartup[i].numberOfEmployees}</ListGroup.Item>
            <ListGroup.Item className="city">{this.state.filterdStartup[i].city}</ListGroup.Item>

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
           

        <Form className="form-Search" onSubmit={this.searchFilter}>
          <Form.Group className="mb-3" controlId="formBasicEmail">


  <div>

            {/* <Form.Label className="d-block"></Form.Label> */}
            <Form.Control
              type="text"
              placeholder="Search Startup"
              className="course-search-input"
              name="searchValue"
              value={this.state.searchValue}
              onChange={this.searchChange}
            />
  </div>

          </Form.Group>
          <Form.Group>
        
            <input
              type="submit"
              value="Search"
              className="seachbutton"
            />

          </Form.Group>
        </Form>
        {/* =============================== */}
        <div className="select-container">
          <Form.Group controlId="exampleForm.SelectCustom1">
            {/* <Form.Label className='label'>  Employees number</Form.Label> */}
            <Form.Control
            className='formcontrol'
            
              as="select"
              name="level"
              onChange={this.NumberFilter}
            >
              <option value="all">Employees</option>
              <option value={50}>0-50</option>
              <option value={100}>51-100</option>
              <option value={200}>101-200</option>
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
          <Form.Group controlId="exampleForm.SelectCustom3"
          >
            {/* <Form.Label className='label'>city</Form.Label> */}
            <Form.Control
            className='formcontrol'
              as="select"
              name="City"
              onChange={this.CityFilter}
            >
              <option value="all">city</option>
              <option value="Amman">Amman</option>
              <option value="Balqa ">Balqa</option>
              <option value="Madaba ">Madaba </option>
              <option value="Zarqa ">Zarqa </option>
              <option value="Ajlun ">Ajlun </option>
              <option value="Irbid">Irbid</option>
              <option value="Mafraq ">Mafraq </option>
              <option value="Aqaba ">Aqaba </option>
              <option value="Karak ">Karak</option>
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