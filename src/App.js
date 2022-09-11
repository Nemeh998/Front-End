import React from "react";
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

import { withAuth0 } from "@auth0/auth0-react";
import About from "./About";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      err:"",
      data: [],
      sectorsData: [],
      // modal startup
      displayCard: false,
      selectDataStartUp: {},
      // update card data 
      selectupdateCrad:{},
      item1id:"",
      itemstartupid:"",
      itemsectorsid:"", 
      idx:"",
      displayCardUpdate:false,
      // ==============
      filteredData:[],
      searchValue: "",
      // ===============update modal
      selectDataSector:[],
      displaystartupCard:false,
      // ===============filter1
    searchValue: "",
      
      filterData:[],
      // ============email
      userEmail:[],
      // jnhbgvfcfvghj
      setSearchInput:[],

      datanewStartups:[]
    }
  }
  // =====================================
  // get  All data
  async componentDidMount() {
    const serverUrl = process.env.REACT_APP_SERVER;
    let url = `${serverUrl}/getDataHendler`;
    if(window.location.pathname.includes('Admain')){
       url = `${serverUrl}/getDataHendlerAdmin`;
    }
  
    await axios
      .get(url)
      .then((response) => {
        let Arr=[];
        response.data.map(item1 => {
          item1.sectors.map(itemsectors => {

            for (let i=0;i<=itemsectors.startup.length;i++){
           if(itemsectors.startup[i]){
                Arr.push(itemsectors.startup[i])
           }
            }   })
          })
      console.log(Arr)
      this.setState({
        data: response.data,
        selectDataSector:Arr
      
      });
      console.log(this.state.selectDataSector,'data from Api')
      })
      .catch((err) => {
        this.setState({err: "There is and error"});
      });
  }
  //========================================
  // delete sectors
  deleteSectors =  (mainSectorid,sectorsId ) => {

    const serverUrl = process.env.REACT_APP_SERVER;
let deletesectors={
  sectorsId:sectorsId,
  mainSectorid:mainSectorid
}
    axios
    .delete(`${serverUrl}/deletSectorsDataHendler`,{
         params:deletesectors,
       }).then((response)=>{
   
         this.setState({
           data: response.data,
       
         });
         window.location.reload();
       }).catch((err)=>{
         this.setState({err: err.message})
       });
  
  }
  // ================================================
  // delete start up data
  deleteStartUp = (mainSectorid, sectorsId, startupid, idx) => {
let deletestartup={mainSectorid:mainSectorid,sectorsId:sectorsId,startupid:startupid,idx:idx};
    const serverUrl = process.env.REACT_APP_SERVER;
 axios
 .delete(`${serverUrl}/deletStartUpDataHendler`,{
      params:deletestartup,
    }).then((response)=>{

      this.setState({
        data: response.data,
        filter:response.data
  
      });
      window.location.reload();
    }).catch((err)=>{
      this.setState({err: err.message})
    });


    
      
  };
  // ============================================
  // add start up data
  addstartupsData = async (e) => {
    e.preventDefault()
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
    
    const serverUrl = process.env.REACT_APP_SERVER;
   
console.log(newStartups)
    let startupsData = await axios.post(`${serverUrl}/postDataHendler`, newStartups)
    this.setState({
      data: startupsData.data,
    });
      window.location.reload();
  };

  // ====================================================
  // add sector Data
  addsectorsData = async (e) => {
    e.preventDefault()
    let newSectors = {
      subSectorname: e.target.subSectorname.value,
      subSectorLogo: e.target.subSectorLogo.value,
      subDesignColor: e.target.subDesignColor.value,
      mainSectorid: e.target.mainSectorName.value,
    }

    const serverUrl = process.env.REACT_APP_SERVER;
    let sectorsData = await axios.post(`${serverUrl}/postSectorsDataHendler`, newSectors)
    this.setState({
      data: sectorsData.data,
    });
      window.location.reload();
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
    window.location.reload();
  }
    // modal render
    displayUpdateCardAsModel = (item_id,itemstartup_id,itemsectors_id, idx_id) => {
      this.setState({
        item1id:item_id,
        itemstartupid:itemstartup_id,
        itemsectorsid:itemsectors_id, 
        idx:idx_id,
      });
      this.state.data?.map(item1 => {
        item1.sectors?.map(itemsectors => {
          
          itemsectors.startup?.map(itemstartup => {
  
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
  
    }
    handleCloseUpdatecard = () => {
      this.setState({
        displayCardUpdate: false
      })
    }
  // ==========================================================
  // modal render
  displayCardAsModel = (clickStartupImg) => {
   
    this.state.data?.map(item1 => {
      item1.sectors?.map(itemsectors => {
        itemsectors.startup?.map(itemstartup => {

          if (itemstartup._id === clickStartupImg) {
            const selectDataStartUp = itemstartup;
       
            this.setState({
              selectDataStartUp: selectDataStartUp,
              displayCard: true
            });
         
          }

        });
      });

    });
  

  }
  handleClose = () => {
    this.setState({
      displayCard: false
    })
  }

  handlerFilter = async(e) => {
    e.preventDefault();
    const searchText=e.target.value;
    this.setState=({
      filterData:this.state.filterData.splice(0, this.state.filterData.length)
    })
  
    const newFilter=await this.state.data?.map((value)=>{
      value.sectors.filter(itemsectors=>{
        if(itemsectors.subSectorname.toLowerCase().includes(searchText.toLowerCase())){
          
          if(searchText!=""){
            this.setState=({
              filterData:this.state.filterData.push(itemsectors)
            })
          }
                                                                      
        }
      })
   
    })

  };

  searchChange = (e) => {
    this.setState({ searchValue: e.target.value });
  }


filterdSector=(subSectorid)=>{
let Arr=[]
  this.state.data?.map(item1 => {
    item1.sectors?.map(itemsectors => {
      if (itemsectors._id === subSectorid) {
        let selectDataSector = itemsectors.startup;
         selectDataSector = selectDataSector.filter((obj)=> obj.approved);

        this.setState({
          selectDataSector: selectDataSector,
          displaystartupCard: true,
        });
        console.log('SectorName', selectDataSector);
      }
      else if(subSectorid==='all'){
      for (let i=0;i<=itemsectors.startup.length;i++){
        if(itemsectors.startup[i]){
console.log(itemsectors.startup[i])
          Arr.push(itemsectors.startup[i])
        }
      }
      Arr = Arr.filter((obj)=> obj.approved);
      console.log(Arr, 'after filter');
      this.setState({
        selectDataSector: Arr,
        displaystartupCard: true,
      });
      }
    });
  });
 

}
addstartupsDatafromUser = async (e) => {
  e.preventDefault()
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
  console.log(newStartups,"addstartupsDatafromUser")
  const serverUrl = process.env.REACT_APP_SERVER;


      let startupsData =  axios.post(`${serverUrl}/poststartupsDataEndUserHendler`, newStartups)
  
    this.setState({
      data:startupsData.data
    })
    window.location.reload();

};

render() {
const { user, isAuthenticated } = this.props.auth0;
    return (
      <div >
   
        <Router>
          <Header isAuthenticated={isAuthenticated} />

          <Routes>
            <Route path="/" element={<Home
            addstartupsDatafromUser={this.addstartupsDatafromUser}
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

datanewStartups={this.state.datanewStartups}
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
                searchChange={this.searchChange}
                searchFilter={this.searchFilter}
                searchValue={this.state.searchValue}
                handlerFilter={this.handlerFilter}
                filterData={this.state.filterData}
                />}>
              
           </Route>
            <Route path='About' element={<About/>}/>
         
        
      
    
          </Routes>
          <Footer />
        </Router>
      </div >
    );
  }
}

export default withAuth0(App);
