import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/search.css'
// import { Search } from './Search';
export class Search extends Component {
  state = {
    // allCourses: ,
    // for select 3 filterations:
    filterdCourses: [],
    levelFilterdCourses: [],
    durationFilterdCourses: [],
    skillsFilterdCourses: [],
    levelValue: "all",
    durationValue: "all",
    skillsValue: "all",
    // end of select 3 filterations
    searchValue: "",
  };
  searchFilter = (e) => {
    
    e.preventDefault();
    let value = e.target.searchValue.value.toLowerCase();

    // const Regex = new RegExp(value, "g");
   let newdata=this.props.data.map(item1 => {
      item1.sectors.map(itemsectors => {
        itemsectors.startup.map(itemstartup => {
         if(itemstartup.startupName.toLowerCase().includes(value)){
        console.log(itemstartup)
        this.setState({ filterdCourses: itemstartup });
         }
        })})})
        console.log(this.state.filterdCourses)
      };
      
      searchChange = (e) => {
        this.setState({ searchValue: e.target.value });
      };
      




      skillsFilter = (e) => {
        this.setState({ skillsValue: e.target.value, searchValue: "" });
        let skillsValue = e.target.value;
    // const Regex = new RegExp(skillsValue, "g");

    console.log(skillsValue)
        if (
          skillsValue !== "all"  &&this.state.durationValue === "all"
        ) {
          
          let newdata=this.props.data.map(item1 => {
            item1.sectors.map(itemsectors => {
              itemsectors.startup.filter(itemstartup => {
                if(itemstartup.city){

                  if(itemstartup.city.toLowerCase().includes(skillsValue.toLowerCase())){
               
                 this.setState({ filterdCourses: itemstartup,
                   skillsFilterdCourses: itemstartup });
               
                  }
                  }else{
                    console.log("nodatain this city")
                }
              })})})
        console.log(this.state.filterdCourses,this.state.skillsFilterdCourses)
        // =====================================================================
        }  
         else if (
          skillsValue !== "all" &&
          this.state.durationValue !== "all" 
       
        ) {
          const Regex = new RegExp(e.target.value, "g");
          let newdata=this.props.data.map(item1 => {
            item1.sectors.map(itemsectors => {
              itemsectors.startup.filter(itemstartup => {
                if(itemstartup.city){

                  if(itemstartup.city.toLowerCase().includes(skillsValue.toLowerCase())){
               
                 this.setState({ filterdCourses: itemstartup,
                   skillsFilterdCourses: itemstartup });
               
                  }
                  }else{
                    console.log("nodatain this city")
                }
              })})})
        } else if (
          skillsValue == "all" &&
          this.state.durationValue !== "all" 
       
        ) {
          const Regex = new RegExp(e.target.value, "g");
          let newdata = this.state.filterdCourses.filter((course) => {
            if (course.skills) {
              let newskills = course.skills.map((skill) => {
                return skill.toLowerCase();
              });
              return Regex.test(newskills);
            }
          });
          this.setState({ filterdCourses: newdata });
          this.setState({ skillsFilterdCourses: newdata });
        } 
      };
      // ====================================
      
  durationFilter = (e) => {
    this.setState({ durationValue: e.target.value, searchValue: "" });
    let durationValue = parseInt(e.target.value);

    if (durationValue !== "all" &&this.state.skillsValue === "all"
    ) {
      let newdata=this.props.data.map(item1 => {
        item1.sectors.map(itemsectors => {
          itemsectors.startup.filter(itemstartup => {
            if(itemstartup.numberOfEmployees){

              if(itemstartup.numberOfEmployees<=durationValue&&durationValue>=0){
           
             this.setState({ filterdCourses: itemstartup,
               skillsFilterdCourses: itemstartup });
           
              }
              }else{
                console.log("nodatain this city")
            }
          })})})
     
    } else if (
      durationValue !== "all" &&
      this.state.skillsValue === "all" 
    ) {
      let newdata=this.props.data.map(item1 => {
        item1.sectors.map(itemsectors => {
          itemsectors.startup.filter(itemstartup => {
            if(itemstartup.numberOfEmployees){

              if(itemstartup.numberOfEmployees<=durationValue&&durationValue>=5){
           
             this.setState({ filterdCourses: itemstartup,
               skillsFilterdCourses: itemstartup });
           
              }
              }else{
                console.log("nodatain this city")
            }
          })})})
    } else if (
      durationValue !== "all" &&
      this.state.skillsValue !== "all" &&
      this.state.levelValue === "all"
    ) {
      let newdata = this.state.skillsFilterdCourses.filter((course) => {
        let number = parseInt(course.duration);
        if (e.target.value === "above") {
          return number >= 4;
        } else {
          return number < 4;
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ durationFilterdCourses: newdata });
    } else if (
      durationValue !== "all" &&
      this.state.skillsValue !== "all" &&
      this.state.levelValue !== "all"
    ) {
      let newdata = this.state.filterdCourses.filter((course) => {
        let number = parseInt(course.duration);
        if (e.target.value === "above") {
          return number >= 4;
        } else {
          return number < 4;
        }
      });
      this.setState({ filterdCourses: newdata });
      this.setState({ durationFilterdCourses: newdata });
    } else {
      if (this.state.levelValue !== "all" && this.state.skillsValue === "all") {
        this.setState({ filterdCourses: this.state.levelFilterdCourses });
      } else if (this.state.skillsValue !== "all") {
        this.setState({ filterdCourses: this.state.skillsFilterdCourses });
      } else if (
        this.state.levelValue !== "all" &&
        this.state.skillsValue !== "all"
      ) {
        this.setState({ filterdCourses: this.state.skillsFilterdCourses });
      } else {
        this.setState({ filterdCourses: this.state.allCourses });
      }
    }
  };
      render() {
    return (
      <div className="search-container">
              
                <Form onSubmit={this.searchFilter}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="d-block">Search Courses</Form.Label>
              <Form.Control
                type="text"
                placeholder="What you want to learn"
                className="course-search-input"
                name="searchValue"
                value={this.state.searchValue}
                onChange={this.searchChange}
              />
              <input
                type="submit"
                value="Search"
                className="course-search-btn btn btn-success"
              />
            </Form.Group>
          </Form>
          {/* =============================== */}
          <div className="select-container">
            <Form.Group controlId="exampleForm.SelectCustom1">
              <Form.Label>Level</Form.Label>
              <Form.Control
                as="select"
                name="level"
                onChange={this.levelFilter}
              >
                <option value="all">All</option>
                <option value="5">0-5</option>
                <option value="10">6-10</option>
                <option value="20">11-20</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom2">
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
            </Form.Group>
            <Form.Group controlId="exampleForm.SelectCustom3">
              <Form.Label>city</Form.Label>
              <Form.Control
                as="select"
                name="skills"
                onChange={this.skillsFilter}
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
          {/* <div>
          {this.state.filterdCourses.map((item1)=>{
            return(
              <> */}
          <img src={this.state.filterdCourses.LogoImage} alt="nopic"/>
              {/* </>
            )
          })}


          </div> */}
          </div>
    )
  }
}

export default Search