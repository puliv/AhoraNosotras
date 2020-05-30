import React, { Component } from 'react'
import { Profiles } from '../components/Profiles.js'
import { AboutUs } from '../components/AboutUs.js'
import { Learning } from '../components/Learning.js'
import { Magazine } from '../components/Magazine/Magazine.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/PORTADA_DEFINITIVA.png'
import { Link } from 'react-router-dom'
import { Subscribe } from './Subscribe.js'


export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home">
          <a href="#magazine">
            <img
              src={portada}
              alt="portada"
              className="home-cover-img"
            />
          </a>
        </div >
        <div className="scroll-container">
          <div id="AboutUs" className="section">
            <AboutUs />
          </div>
          <div id="Magazine" className="section">
            <Magazine />
          </div>
          <div id="Learning" className="section">
            <Learning />
          </div>
          <div id="Profiles" className="section">
            <Profiles />
          </div>
          <div id="Subscribe" className="section">
            <Subscribe />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
