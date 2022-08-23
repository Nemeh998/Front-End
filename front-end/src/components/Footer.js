import React, { Component } from 'react'
import '../css/footer.css'
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export class Footer extends Component {
  render() {
    return (
    
      <footer class="footer-basic ">
        
      <div id="footer-logo" class="logo">
          <div id="logo" class="center" >
              {/* <img src="images/logo.png" alt="" /> */}
            
          </div>
      </div>
      <div class="social"><a href="#"><i ><GitHubIcon/></i></a><a href="#"><i class="icon ion-social-snapchat"></i><LinkedInIcon/></a><a href="#"><i class="icon ion-social-twitter"></i><TwitterIcon/></a><a href="#"><i class="icon ion-social-facebook"><FacebookIcon/></i></a></div>
      <span class="copyright">Htu studant © 2022</span>
    
    
  </footer>
    )
  }
}

export default Footer