import React, { Component } from "react";

export class Credits extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="credits">
        <div className="credits-div">
          <ul>
            <h2 className="credits-h2">CRÉDITOS</h2>
            <li>
              <span className="credits-span">
                <span className="credit-title">Directora: </span>
                Anita Martínez.
              </span>
            </li>
            <li>
              <span className="credits-span">
                <span className="credit-title">Editora General: </span>
                Javiera López Layana.
              </span>
            </li>
            <li>
              <span className="credits-span">
                <span className="credit-title">Directora de Arte: </span>
                Talía Silva.
              </span>
            </li>
            <li>
              <span className="credits-span">
                <span className="credit-title">Sitio Web: </span>
                Francisca Mora, Paulina Vera, Sandra Aguilera.
              </span>
            </li>
            <li>
              <span className="credits-span">
                <span className="credit-title">
                  Ilustración y contraportada:{" "}
                </span>
                Luisa Rivera.
              </span>
            </li>
            <li>
              <span className="credits-span colab">
                <span className="credit-title">Colaboradoras:</span>
                Margarita Portuguez, Camila Castillo, Carolina Leria, Priscila
                Olivares, Bárbara Bustos.
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Credits;
