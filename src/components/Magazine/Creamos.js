import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'
import creamosImg from '../../assets/REVISTA3/creamos.png'


export class Creamos extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section creamos">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">CREAMOS</h3>
          <h1 className="section-h1">MADRE DE CINCO </h1>
          <h2 className="section-h2">Por Nancy Cereceda</h2>
        </div>

        <div className="section-img-div">
          <img
            src={creamosImg}
            alt="creamos"
            className="section-img"
          />
        </div>
        <div className="section-div-span">
          <span className="section-span">
            Es madre de cinco, cuatro vivas, uno muerto. Con cada nochevieja, él cumple un año más, de no estar. Mientras todos celebran, ella en silencio recuerda sus dieciocho, en un campamento minero, sintiendo dolores que no entendía. Sonaron los fuegos artificiales, todos se abrazaron, estaba sola en el baño del segundo piso. Con los estallidos llegó el llanto, la encontraron llena de sangre y con un hijo entre sus brazos, su padre la llevó al hospital. Ese día nació el dolor. El matrón de urgencia la cosió sin piedad, el matrón le anunciaría que su primer hijo había muerto.
          </span>
        </div>

        <div className="hablamos-division"></div>

        <div className="section-div-images">
          <div className="section-div-tercio">
            <img src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/Creamos_aborto.jpg?raw=true"} alt="creamos" className="img-creamos" />
            <h2 className="section-h2">Ilustración: Catalina Potocnjak</h2>
          </div>
          <div className="section-div-tercio">
            <img src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/Creamos_IsabellaAlzamora.jpg?raw=true"} alt="creamos" className="img-creamos" />
            <h2 className="section-h2">Ilustración: Por Isabella Alzamora</h2>
          </div>
          <div className="section-div-tercio">
            <img src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA3/Creamos_PaulaMena.png?raw=true"} alt="creamos" className="img-creamos" />
            <h2 className="section-h2">Ilustración: Por Paula Mena</h2>
          </div>
        </div>

        <ReadNext section={"creamos"} />
      </div>
    );
  }
}

export default Creamos;
