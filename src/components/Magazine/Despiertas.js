import React, { Component } from "react"
import ReadNext from "./ReadNext"
import GoBack from "./GoBack"
import { animateScroll as scroll } from 'react-scroll'
import despiertas from '../../assets/REVISTA3/despiertas.png'

export class Despiertas extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section despiertas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">DESPIERTAS</h3>
          <h1 className="section-h1">
            EDUCACIÓN, ANTICONCEPTIVOS Y ABORTO LEGAL ¡AHORA!
          </h1>
          <h2 className="section-h2">Por Equipo Ahora Nosotras</h2>

          <div className="section-div-span">
            <div className="section-span">
              En tiempos de pandemia, la consigna “educación sexual para decidir, anticonceptivos para no abortar y aborto legal para no morir” que gritamos en cada julio tomó nuevos ribetes. Luego de cuatro meses desde el inicio de la crisis, diferentes situaciones han dejado en evidencia que los derechos sexuales y derechos reproductivos de las mujeres y disidencias no son una prioridad para el Estado chileno ni para el  gobierno de Sebastián Piñera.
            </div>
            <div className="section-span">
              HLa dificultad para acceder a métodos anticonceptivos producto del cierre de fronteras y el alza de sus precios, la incorporación de preservativos de baja calidad en las cajas de mercadería de la Red de Alimentos para Chile o el difícil acceso a la información sobre datos de aborto legal son solo algunos ejemplos. A continuación, desde el Equipo de Ahora Nosotras te dejamos una nueva infografía para estar despiertas frente a un panorama de total desprotección de nuestra autonomía sexual y reproductiva.
            </div>
          </div>

          <div className="despiertas-div">
            <img
              src={despiertas}
              alt="despiertas"
              className="despiertas-img"
            />
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    )
  }
}

export default Despiertas
