import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Home from "./Home"
import {Footer} from './components/Footer';
import Admain from "./componentsadmain/Admain";
import axios from "axios";
import StartupForm from "./componentsadmain/StartupForm";
import {ScectorForm} from './componentsadmain/ScectorForm';
import Search from "./Search";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sectorsData: [],
      displayCard: false,
      selectDataStartUp: {},
      // update card
      selectupdateCrad:{},
      item1id:"",
      itemstartupid:"",
      itemsectorsid:"", 
      idx:"",
      displayCardUpdate:false,
      // ==============
      filteredData:[],
      searchValue: "",
      // ===============
      selectDataSector:[],
      displaystartupCard:false,
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
        // console.log(this.state.data);
      })
      .catch((err) => {
        this.setState({err: "There is and error"});
      });
  }
  //========================================
  // delete sectors
  deleteSectors = async (mainSectorid,sectorsId ) => {
    // console.log('first')
    // console.log(sectorsId, mainSector)

    const serverUrl = process.env.REACT_APP_SERVER;

    const url = await axios.delete(`${serverUrl}/deletSectorsDataHendler?sectorid=${sectorsId}&mainSectorid=${mainSectorid}`);
    this.setState({
      data: url.data,
    })
    this.componentDidMount()
  
    // console.log(this.setState.data, "data")
  }
  // ================================================
  // delete start up data
  deleteStartUp = async (mainSectorid, sectorsId, startupid, idx) => {
    // console.log('first')
    // console.log("sectorsId", sectorsId, "mainSectorid", mainSectorid, 'startupid', startupid)

    const serverUrl = process.env.REACT_APP_SERVER;

    const url = await axios.delete(`${serverUrl}/deletStartUpDataHendler?sectorid=${sectorsId}&mainSectorid=${mainSectorid}&startupid=${startupid}&idx=${idx}`);
    this.setState({
      data: url.data,
      filter:url.data

    })
    // console.log(this.setState.data, "data")
    this.componentDidMount()
  }
  // ============================================
  // add start up data
  addstartupsData = async (e) => {
    e.preventDefault()
    // console.log('add data')
    // console.log(e.targe.LogoImage,"pic")
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
      mainSectorName: e.target.mainSectorName.value,
    }
    // console.log("newStartups", newStartups)
    const serverUrl = process.env.REACT_APP_SERVER;


    let startupsData = await axios.post(`${serverUrl}/postDataHendler`, newStartups)
    this.setState({
      data: startupsData.data,
    });
    this.componentDidMount()
  };

  // ====================================================
  // add sector Data
  addsectorsData = async (e) => {
    e.preventDefault()
    let newSectors = {
      subSectorname: e.target.subSectorname.value,
      subSectorLogo: e.target.subSectorLogo.value,
      subDesignColor: e.target.subDesignColor.value,
      // subParentCategoryName: e.target.subParentCategoryName.value,
      mainSectorid: e.target.mainSectorName.value,
    }

    // console.log("NewSectors", newSectors)
    const serverUrl = process.env.REACT_APP_SERVER;
    let sectorsData = await axios.post(`${serverUrl}/postSectorsDataHendler`, newSectors)
    this.setState({
      data: sectorsData.data,
    });
    // this.componentDidMount()
  }
  // ==========================================================
  updateStartUp=async(e)=>{

    let newStartups = {
      startupName: e.target.startupName.value,
      LogoImage: e.target.LogoImage.value,
      city: e.target.city.value,
      founderName: e.target.founderName.value,
      numberOfEmployees: e.target.numberOfEmployees.value,
      yearOfEstablishment: e.target.yearOfEstablishment.value,
      websiteURL: e.target.websiteURL.value,
      emailAddress: e.target.emailAddress.value,
      item1id:this.state.item1id,
      itemstartupid:this.state.itemstartupid,
      itemsectorsid:this.state.itemsectorsid, 
      idx:this.state.idx,
    }
    console.log(newStartups)
    const serverUrl = process.env.REACT_APP_SERVER;
    let startupsData = await axios.put(`${serverUrl}/updateStartupdata`, newStartups)
    this.setState({
      data: startupsData.data,
    });

  }
    // modal render
    displayUpdateCardAsModel = (item_id,itemstartup_id,itemsectors_id, idx_id) => {
      this.setState({
        item1id:item_id,
        itemstartupid:itemstartup_id,
        itemsectorsid:itemsectors_id, 
        idx:idx_id,
      });
      // console.log(item1,itemstartup_id,itemsectors, idx)
      // console.log("anything", clickStartupImg)
      this.state.data.map(item1 => {
        item1.sectors.map(itemsectors => {
          
          itemsectors.startup.map(itemstartup => {
  
            if (itemstartup._id === itemstartup_id) {
              const selectupdateCrad = itemstartup;
              const All=item1
              console.log('find', selectupdateCrad)
              this.setState({
                selectupdateCrad: selectupdateCrad,
                displayCardUpdate: true
              });
              console.log('startupName', this.state.selectupdateCradid);
              console.log(selectupdateCrad)
            }
            // after that get horned object and set display as true if
          });
        });
  
      });
      // console.log('its wok')
  
    }
    handleCloseUpdatecard = () => {
      this.setState({
        displayCardUpdate: false
      })
    }
  // ==========================================================
  // modal render
  displayCardAsModel = (clickStartupImg) => {
    // console.log("anything", clickStartupImg)
    this.state.data.map(item1 => {
      item1.sectors.map(itemsectors => {
        itemsectors.startup.map(itemstartup => {

          if (itemstartup.startupName === clickStartupImg) {
            const selectDataStartUp = itemstartup;
            // console.log('find', selectDataStartUp)
            this.setState({
              selectDataStartUp: selectDataStartUp,
              displayCard: true
            });
            // console.log('startupName', selectDataStartUp);
          }
          // after that get horned object and set display as true if
        });
      });

    });
    // console.log('its wok')

  }
  handleClose = () => {
    this.setState({
      displayCard: false
    })
  }
//   searchFilter = async(e) => {
//     e.preventDefault();
//     let value = e.target.searchValue.value;

//     // const Regex = new RegExp(value, "g");

//      let newdata = await this.state.data.map((mainsector) => {
//         return(
//             <>
//             { mainsector.sectors.filter((itemsectors)=>{
//             console.log(itemsectors.subSectorname,"subSectorname")

//             // return Regex.test(itemsectors.subSectorname);
//             let filterdata= Object.values(itemsectors).join('').toLowerCase().includes(value.toLowerCase())
//       this.setState({ filterData: filterdata });
            
//           })}
            
//             </>
//         )

//       }
      
      
//       );
//     // console.log(newdata,"new")
//   console.log(this.state.filterData,"filter state")
//   };

//   searchChange = (e) => {

//     this.setState({ searchValue: e.target.value });

// };
// searc2
handleFilter=async(e)=>{
  const searchText=e.target.value;
  this.setState=({
      filteredData:this.state.filteredData.splice(0, this.state.filteredData.length)
  })

  const newFilter=await this.props.data.map((value)=>{
      value.sectors.filter(itemsectors=>{
          if(itemsectors.subSectorname.toLowerCase().includes(searchText.toLowerCase())){

              if(searchText!=""){
                  this.setState=({
filteredData:this.state.filteredData.push(itemsectors)
                  })
              }}
          })
      })
  
}

filterdSector=(subSectorname)=>{
  console.log(subSectorname)
  this.state.data.map(item1 => {
    item1.sectors.map(itemsectors => {
      if (itemsectors.subSectorname === subSectorname) {
        const selectDataSector = itemsectors.startup;
        // console.log('find', selectDataSector)
        this.setState({
          selectDataSector: selectDataSector,
          displaystartupCard: true,
        });
        console.log('SectorName', selectDataSector);
      }
    });
  });
}
  render() {

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
              filterData={this.state.filterData}
              // ========================
              searchFilter={this.handleFilter}
              searchChange={this.searchChange}
              searchValue={this.state.searchValue}
              // ======================
              selectDataSector={this.state.selectDataSector}
              filterdSector={this.filterdSector}
              displaystartupCard={this.state.displaystartupCard}
            />}>
            </Route>

            <Route path='Admain' element={<Admain
              data={this.state.data}
              deleteStartUp={this.deleteStartUp}
              addstartupsData={this.addstartupsData}
              addsectorsData={this.addsectorsData}
              />}>

              <Route  index element={<StartupForm
              updateStartUp={this.updateStartUp}
              handleCloseUpdatecard={this.handleCloseUpdatecard}
              displayUpdateCardAsModel={this.displayUpdateCardAsModel}
              displayCardUpdate={this.state.displayCardUpdate}
                data={this.state.data}
                deleteStartUp={this.deleteStartUp}
                addstartupsData={this.addstartupsData}
                selectupdateCrad={this.state.selectupdateCrad}
              />} />
              <Route path='ScectorForm' element={<ScectorForm 
                data={this.state.data}
                deleteSectors={this.deleteSectors}
                addsectorsData={this.addsectorsData}
              />} />
            </Route>
            <Route path='search' element={<Search
                data={this.state.data}
                />}>
              
           
            </Route>
          </Routes>
          <Footer />
        </Router>
      </div >
    );
  }
}

export default App;
