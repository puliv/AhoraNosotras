import React, { Component } from 'react'
import { Profiles } from '../components/Profiles.js'
import { AboutUs } from '../components/AboutUs.js'
import { Learning } from '../components/Learning.js'
import { Magazine } from '../components/Magazine/Magazine.js'
import { Subscribe } from './Subscribe.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg'



export class Home extends Component {
  render() {
    return (
      <React.Fragment>

        <div id="Home" className="home">
          <a href="#Magazine">
            <img
              src={portada}
              alt="portada"
              className="home-cover-img"
            />
          </a>
        </div>
        <div className="home-scroll-container">
          <div id="AboutUs" className="home-section">
            <AboutUs />
          </div>
          <div id="Magazine" className="home-section">
            <Magazine />
          </div>
          <div id="Learning" className="home-section">
            <Learning />
          </div>
          <div id="Profiles" className="home-section">
            <Profiles />
          </div>
          <div id="Subscribe" className="home-section">
            <Subscribe />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
