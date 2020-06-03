import React, { Component } from 'react'
import { Profiles } from '../components/Profiles.js'
import { AboutUs } from '../components/AboutUs.js'
import { Learning } from '../components/Learning.js'
import { Magazine } from '../components/Magazine/Magazine.js'
import { Subscribe } from './Subscribe.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg'
import { Element, scroller } from 'react-scroll';


const scrollType = {
  duration: 500,
  delay: 50,
  smooth: true, // linear “easeInQuint” “easeOutCubic” 
  offset: -10
}

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="Home" className="home">
          <img
            src={portada}
            alt="portada"
            className="home-cover-img"
            onClick={() => scroller.scrollTo("Magazine", scrollType)}
          />
        </div>
        <div className="home-scroll-container">
          <Element name="AboutUs">
            <div id="AboutUs" className="home-section">
              <AboutUs />
            </div>
          </Element>
          <Element name="Magazine">
            <div id="Magazine" className="home-section">
              <Magazine />
            </div>
          </Element>
          <Element name="Learning">
            <div id="Learning" className="home-section">
              <Learning />
            </div>
          </Element>
          <Element name="Profiles">
            <div id="Profiles" className="home-section">
              <Profiles />
            </div>
          </Element>
          <Element name="Subscribe">
            <div id="Subscribe" className="home-section">
              <Subscribe />
            </div>
          </Element>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
