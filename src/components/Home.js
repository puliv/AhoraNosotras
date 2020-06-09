import React, { Component } from 'react'
import { Profiles } from '../components/Profiles.js'
import { Subscribe } from './Subscribe.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg'
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';

// const scrollType = {
//   duration: 500,
//   delay: 50,
//   smooth: true,
//   offset: -10
// }

export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div id="home" className="home">
          <Link to="/magazine">
            <img
              src={portada}
              alt="portada"
              className="home-cover-img"
            />
          </Link>
        </div>
        <div className="home-scroll-container">
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
