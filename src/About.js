import React, { Component } from 'react'
import './css/About.css'
import cover from './img/cover.webp'

export default class  extends Component {
  render() {
    return (
   <div>

<div className="about-header">
          <div className="about-header-img">
             {/* <img src={cover}/> */}

            <div className="container h-100">
              <div className="row row-cols-2 h-100">
                <div className="col about-header-text">
                
                </div>
              </div>
            </div>
          </div>
        </div>










        <div className="about-pic-header pt-5 pb-5">
          <div className="container">
            <h1>StartUp</h1>
            <p>
               
              To provide members with a platform of products  services that support their continuous growth, expansion, and prosperity toward a mature sector that substantially contributes to the national economy and provides quality jobs for Jordanians
            </p>
          </div>
        </div>

        <div>
          <hr id="hr" />
        </div>

        <div className="about-pic-header pt-5 pb-5">
          <div className="container">
            <h1>Our Mission</h1>
            <p>
            To provide members with a platform of products & services that support their continuous growth, expansion, and prosperity toward a mature sector that substantially contributes to the national economy and provides quality jobs for Jordanians
            </p>
          </div>
        </div>

        <div>
          <hr id="hr" />
        </div>

        {/* <div className="about-pic-header pt-5 mt-5">
          <div className="container">
            <h1>team</h1>
          </div>
        </div> */}
        {/* ====================== */}
        {/* <div className="about-pic">
          <div className="row pt-5 pb-5 row-cols-6 w-100"> */}
    

            {/* =========== */}
            {/* <div className="col">
              <div className="box">
                <div className="box-pic">
                  <div className="thumb">
                    <p>
                      {" "}
                      <a href="https://github.com/Nemeh998">
                        <GitHubIcon />
                      </a>{" "}
                      <a href="https://www.linkedin.com/in/nemh-ablan/">
                        <LinkedInIcon/>
                      </a>
                    </p>
                  </div>
                  <img src={imgNEmh} alt="nemh" />
                </div>
                <h4>Nemah Ablan</h4>
                <p className="ne">B.Sc. in Computer Science</p>
              </div>
        
            </div>
           
          </div>
        </div> */}

        {/* <div>
          <hr id="hr" />
        </div> */}

        <div className="about-pic-header">
          <h1 className="mt-3 mb-4">Conntact Us</h1>
          <div className="conntactUsCom">
            <div className="container">
              <h3>ADDRESS:</h3>
              <p>Bulding 23, King Hussein Business Park, King Abdullah II St 242, Amman</p>
              <p>P.O.Box 183334 Amman 11118 Jordan</p>
              <h3>website:</h3>
              <p><a href="http://htu.edu.jo">htu</a></p>
              <h3>CALL US:</h3>
              <p>065808787</p>
            </div>
          </div>
        </div>

  
      </div>
    )
  }
}
