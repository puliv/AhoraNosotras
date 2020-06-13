import React, { Component } from "react";
import despiertas from "../../assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/DESPIERTAS.png";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Despiertas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="despiertas">
        <GoBack />
        <div className="edit-main">
          <div className="edit-titles">
            <h3 className="protag-h3 title">DESPIERTAS</h3>
            <h1 className="protag-h1">
              Eso que llaman amor es trabajo no pagado.
            </h1>
            <h2 className="protag-h2">Equipo Ahora Nosotras</h2>

            <div className="despiertas-div">
              <img
                src={despiertas}
                alt="despiertas"
                className="despiertas-img"
              />
            </div>
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    );
  }
}

export default Despiertas;
