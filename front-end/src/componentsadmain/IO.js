import React, { Component } from 'react'
import '../css/io.css'
export class IO extends Component {
  render() {
    return (
        <>
      <div><div className="wrapper">
   
      <section id="home" className="sec-main">
        <h1 className="main-heading">Where creativity happens.</h1>
      </section>
    
      <section id="about" className="sec-about">
        <div className="container1">
          <h1>About me</h1>
    
          <hr />
    
          <div className="row">
            <div class="col-sm-6 col-sm-offset-3">
              <p>Hi, my name is Alex Devero and I am a Web Designer & Developer based in Prague. I love crafting beautiful web pages in HTML5, CSS3 and JavaScript or jQuery. My other skills include WordPress, Photoshop, Illustrator. You can grab my CV in
                <a href="#">English</a> or <a href="#">Czech</a> version. If you want to hire me or just to talk, <a className="js-connect" href="#footer">connect</a> with me.</p>
            </div>
          </div>
        </div>
      </section>










      <section id="services" className="sec-services">
        <div className="container1">
          <h1>Services</h1>
    
          <hr />
    
          <div class="row">
            <div class="col-sm-4">
              <i class="fa fa-4x fa-paint-brush"></i>
    
              <h2 class="h3">Beautiful Design</h2>
    
              <p>Every website is beautiful, unique and tailored to suit your needs and requirements.</p>
            </div>
    
            <div class="col-sm-4">
              <i class="fa fa-4x fa-code"></i>
    
              <h2 class="h3">Clean Code</h2>
    
              <p>All websites are written in valid and clean HTML5 / CSS3 &amp; JavaScript (jQuery).</p>
            </div>
    
            <div class="col-sm-4">
              <i class="fa fa-4x fa-tablet"></i>
    
              <h2 class="h3">Always Responsive</h2>
    
              <p>All websites are responsive. They will look great on desktop, tablets and mobile phones too.</p>
            </div>
          </div>
        </div>
      </section>
    
      <section id="folio" class="sec-folio">
        <div class="container1">
          <h1>Previous Work</h1>
    
          <hr />
    
          <div class="row">
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/Oog0wehKxYs/450x450" alt="By Håkon Sataøen" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/EfpOiZvPbT4/450x450" alt="By Samuel Zeller" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/2aoVQXwLf3g/450x450" alt="By Scott Webb" />
            </div>
          </div>
    
          <div class="row">
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/o2KD7JtqTlk/450x450" alt="By Has Bonk" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/TV2ET43jK0w/450x450" alt="By Scott Webb" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/lZ2LB1s_z7s/450x450" alt="By Daniel Lozano Valdés" />
            </div>
          </div>
    
          <div class="row">
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/o4qL4FuwN6I/450x450" alt="By Anthony DELANOIX" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/ej7RYC0ED_c/450x450" alt="By Patrick Pilz" />
            </div>
    
            <div class="col-md-4">
              <img class="center-block" src="https://source.unsplash.com/0G1r-Cg0zS8/450x450" alt="By Vita Vilcina" />
            </div>
          </div>
        </div>
      </section>
    
      <section id="testimonials" class="sec-testimonials">
        <div class="container1">
          <h1>Clients said</h1>
    
          <hr />
    
          <div class="row">
            <div class="col-sm-4">
              <p class="text-center">"Alex did great job when designing our website. It was pleasure to work with him and I'm sure we will hire him again."</p>
    
              <p class="text-right">&mdash; Marc Andressen</p>
            </div>
    
            <div class="col-sm-4">
              <p class="text-center">"Alex proved to be truly creative designer who is able to create just stunning design I immediately fell in love with!"</p>
    
              <p class="text-right">&mdash; Emily Cooper</p>
            </div>
    
            <div class="col-sm-4">
              <p class="text-center">"I have worked with several different people and it always seemed like a pain—luckily I found Alex Devero. Thank you Alex!"</p>
    
              <p class="text-right">&mdash; Scott Grubber</p>
            </div>
          </div>
        </div>
      </section>
    
      <section id="contact" class="sec-contact">
        <div class="container1">
          <h1>Hire me</h1>
    
          <hr />
    
          <div class="row">
            <div class="col-sm-4 col-sm-offset-4">
              <form class="center-block" action="#" method="post">
                <div class="form-group">
                  <label class="sr-only" for="inputName">Full name</label>
    
                  <input id="inputName" class="form-control" type="text" placeholder="Adam Smith" required />
                </div>
    
                <div class="form-group">
                  <label for="inputMail" class="sr-only">Email Address</label>
    
                  <input id="inputMail" class="form-control" type="email" placeholder="adam.smith@mail.com" required />
                </div>
    
                <div class="form-group">
                  <label for="inputMessage" class="sr-only">Your Message</label>
    
                  <textarea id="inputMessage" class="form-control" name="message" cols="30" rows="8" required></textarea>
                </div>
    
                <div class="form-group">
                  <button class="btn btn-default center-block" type="submit" value="Hire me">Hire me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    
     
    </div></div>
    </>

    )
  }
}

export default IO