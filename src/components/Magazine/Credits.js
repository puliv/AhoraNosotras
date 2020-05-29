import React, { Component } from 'react'

export class Credits extends Component {
  render() {
    return (
      <div className="credits">
        <div className="credits-div">
          <ul>
            <h2 className="credits-h2">CRÉDITOS</h2>
            <li>
              <span className="credits-span">Directora: Anita Martínez.</span>
            </li>
            <li>
              <span className="credits-span">Editora General: Javiera López Layana.</span>
            </li>
            <li>
              <span className="credits-span">Directora de Arte: Talía Silva.</span>
            </li>
            <li>
              <span className="credits-span">Sitio Web: Francisca Mora, Paulina Vera, Sandra Aguilera.</span>
            </li>
            <li>
              <span className="credits-span">Ilustración y contraportada: Luisa Rivera.</span>
            </li>
            <li>
              <span className="credits-span colab">Colaboradoras: Margarita Portuguez, Camila Castillo, Carolina Leria, Priscila Olivares, Bárbara Bustos.</span>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Credits
