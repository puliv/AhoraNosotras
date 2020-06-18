import React, { Component } from 'react'
import { Profiles } from '../components/Profiles.js'
import howThisWork from '../assets/img/juntassomoscomunidad.png'
import { Subscribe } from './Subscribe.js'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg'
import { Element } from 'react-scroll';
import { Link } from 'react-router-dom';


export class Home extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="home-scroll-container">
          <div id="home" className="home">
            <Link to="/magazine">
              <img
                src={portada}
                alt="portada"
                className="home-cover-img"
              />
            </Link>
          </div>
          <Link to="/aboutUs">
            <div className="home-infography">
              <h2 className="about-us-h2 how-work">¿Cómo funciona la Comunidad Ahora Nosotras?</h2>
              <img
                src={howThisWork}
                alt="Como funciona la comunidad"
                className="home-info-img"
              />
            </div>
          </Link>
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
