import React, { Component } from 'react'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/PORTADA_DEFINITIVA.png'
import { Link } from 'react-router-dom'


export class Home extends Component {
  render() {
    return (
      <div className="home">
        <Link to="/magazine">
          <img
            src={portada}
            alt="portada"
            className="home-cover-img"
          />
        </Link>
      </div >
    )
  }
}

export default Home
