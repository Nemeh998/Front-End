import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./Home"
import {Footer} from './components/Footer';
import Admain from "./componentsadmain/Admain";
import axios from "axios";
// import IO from './componentsadmain/IO'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[],
        sectorsData:[],
        displayCard:false,
        selectDataStartUp:{}
    }
}
// =====================================
// get  All data
  async componentDidMount() {
    const serverUrl = process.env.REACT_APP_SERVER;
    const url = `${serverUrl}/getDataHendler`;

    await axios
        .get(url)
        .then((response) => {
            this.setState({
                 data: response.data,
            });
            console.log(this.state.data);
        })
        .catch((err) => {
            this.setState({err: "There is and error"});
        });
}
//========================================
// delete sectors
deleteSectors = async (sectorsId, mainSector) => {
    console.log('first')
    console.log(sectorsId, mainSector)

    const serverUrl = process.env.REACT_APP_SERVER;

    const url = await axios.delete(`${serverUrl}/deletSectorsDataHendler?sectorid=${sectorsId}&mainSector=${mainSector}`);
    this.setState({
        data: url.data,
    
        
    })
console.log(this.setState.data,"data")
}
// ================================================
// delete start up data
deleteStartUp = async (mainSectorid,sectorsId,startupid,idx) => {
  console.log('first')
  console.log("sectorsId",sectorsId,"mainSectorid", mainSectorid,'startupid',startupid)

  const serverUrl = process.env.REACT_APP_SERVER;

  const url = await axios.delete(`${serverUrl}/deletStartUpDataHendler?sectorid=${sectorsId}&mainSectorid=${mainSectorid}&startupid=${startupid}&idx=${idx}`);
  this.setState({
      data: url.data,
  
      
  })
console.log(this.setState.data,"data")
}
// ============================================
// add start up data
addstartupsData = async (e) => {
  e.preventDefault()
  console.log('add data')
  let newStartups = {
      startupName: e.target.startupName.value,
      LogoImage: e.target.LogoImage.value,
      city: e.target.city.value,
      founderName: e.target.founderName.value,
      numberOfEmployees: e.target.numberOfEmployees.value,
      yearOfEstablishment: e.target.yearOfEstablishment.value,
      websiteURL: e.target.websiteURL.value,
      emailAddress: e.target.emailAddress.value,
      Sectors: e.target.Sectors.value,
      mainSectorName:e.target.mainSectorName.value,
  }
  console.log("newStartups", newStartups)
  const serverUrl = process.env.REACT_APP_SERVER;


  let startupsData = await axios.post(`${serverUrl}/postDataHendler`, newStartups)
};

// ====================================================
// add sector Data
addsectorsData = async (e) => {
  e.preventDefault()
  let newSectors = {
      addsubSectorname: e.target.addsubSectorname.value,
      subSectorLogo: e.target.subSectorLogo.value,
      subDesignColor: e.target.subDesignColor.value,
      subParentCategoryName: e.target.subParentCategoryName.value,
      mainSectorName: e.target.mainSectorName.value,
  }

  console.log("NewSectors", newSectors)
  const serverUrl = process.env.REACT_APP_SERVER;
  let sectorsData = await axios.post(`${serverUrl}/postSectorsDataHendler`, newSectors)

}
// ==========================================================
// modal render
displayCardAsModel = (clickStartupImg) => {
  console.log("anything",clickStartupImg)
  this.state.data.map(item1 => {
    item1.sectors.map(itemsectors => {
      itemsectors.startup.map(itemstartup => {

          if(itemstartup.startupName === clickStartupImg){
              const selectDataStartUp=itemstartup;
              console.log('find',selectDataStartUp)
              this.setState({
                selectDataStartUp: selectDataStartUp,
                displayCard: true
              });
              console.log('startupName',selectDataStartUp);
          }
        // after that get horned object and set display as true if
      });
    });

  });
console.log('its wok')

}
handleClose =()=>{
  this.setState({
    displayCard:false
  })
}
  render(){

    return (
      <div >
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home
          displayCardAsModel={this.displayCardAsModel}
          data={this.state.data}
          displayCard={this.state.displayCard}
          handleClose={this.handleClose}
          selectDataStartUp={this.state.selectDataStartUp}
          />}>
          </Route>

          <Route path="/Admain" element={<Admain 
          data={this.state.data}
          deleteStartUp={this.deleteStartUp}
          addstartupsData={this.addstartupsData}
          addsectorsData={this.addsectorsData}

/>}>
          </Route >
          {/* <Route path="/io" element={<IO/>}>
            
            </Route>  */}
        </Routes>
        <Footer />
      </Router>
    </div >
  );
}
}

export default App;
