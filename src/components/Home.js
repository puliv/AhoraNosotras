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
        <div id="home" className="home">
          <img
            src={portada}
            alt="portada"
            className="home-cover-img"
            onClick={() => scroller.scrollTo("magazine", scrollType)}
          />
        </div>
        <div className="home-scroll-container">
          <Element name="aboutUs">
            <div id="aboutUs" className="home-section">
              <AboutUs />
            </div>
          </Element>
          <Element name="magazine">
            <div id="magazine" className="home-section">
              <Magazine />
            </div>
          </Element>
          <Element name="learning">
            <div id="learning" className="home-section">
              <Learning />
            </div>
          </Element>
          <Element name="profiles">
            <div id="profiles" className="home-section">
              <Profiles />
            </div>
          </Element>
          <Element name="subscribe">
            <div id="subscribe" className="home-section">
              <Subscribe />
            </div>
          </Element>
        </div>
      </React.Fragment>
    )
  }
}

export default Home
