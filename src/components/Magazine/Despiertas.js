import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Despiertas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="section despiertas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h2">DESPIERTAS</h3>
          <h1 className="section-h1">
            Eso que llaman amor es trabajo no pagado.
          </h1>
          <h2 className="section-h3">Por Equipo Ahora Nosotras</h2>

          <div className="despiertas-div">
            <img
              src={
                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/DESPIERTAS.png?raw=true"
              }
              alt="despiertas"
              className="despiertas-img"
            />
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    );
  }
}

export default Despiertas;
