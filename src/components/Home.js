import React, { Component } from 'react'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/PORTADA_DEFINITIVA.png'


export class Home extends Component {
  render() {
    return (
      <div className="home">
        <img
          src={portada}
          alt="portada"
          className="home-cover-img"
        />
      </div>
    )
  }
}

export default Home
