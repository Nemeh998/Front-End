import React, { Component } from 'react'
import '../css/footer.css'
export class Footer extends Component {
  render() {
    return (
      <footer id="footer">
      
        <ul className="soc-media-ul">
          <li>
            <a href="https://twitter.com/AlexDevero" class="fa fa-twitter" target="_blank"></a>
          </li>
  
          <li>
            <a href="https://plus.google.com/u/0/+AlexDevero" class="fa fa-google-plus" target="_blank"></a>
          </li>
  
          <li>
            <a href="https://cz.linkedin.com/pub/alex-devero/38/262/70/" class="fa fa-linkedin" target="_blank"></a>
          </li>
  
          <li>
            <a href="https://www.behance.net/d3v3r0" class="fa fa-behance" target="_blank"></a>
          </li>
  
          <li>
            <a href="mailto:example@mail.com" class="fa fa-envelope"></a>
          </li>
        </ul>
    </footer>
    )
  }
}

export default Footer