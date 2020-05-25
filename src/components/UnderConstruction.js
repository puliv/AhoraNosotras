import React, { Component } from 'react'
import fondotemoral from '../assets/img/fondotemoral.png'

export class UnderConstruction extends Component {
  render() {
    return (
      <div className="temporal-div">
        <img
          src={fondotemoral}
          alt="fondotemoral"
          className="temporal-img"
        />
      </div>
    )
  }
}

export default UnderConstruction