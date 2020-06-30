import React, { Component } from 'react'
import fondotemoral from '../assets/img/DESKTOP-02.png'

export class MobileImage extends Component {
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

export default MobileImage