import React from "react"

const Navigation = (props) =>{
    return(
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav" style={{background:'lightgrey'}}>
            <div class="container" style={{color:"white"}}>
                <a class="navbar-brand" href="/">
            	  <img class="mr-3" src="./logo.png" height="40px" style={{borderRadius:"50px"}}/>
            	  Your Streaming Site</a>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ml-auto">
                    <li class="nav-item">
                      <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="/contact-me/">Contact Me</a>
                    </li>
                  </ul>

                </div>
            </div>
        </nav>
    );
}
export default Navigation;