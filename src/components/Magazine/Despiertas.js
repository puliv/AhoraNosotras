import React, { Component } from "react"
import ReadNext from "./ReadNext"
import GoBack from "./GoBack"
import { animateScroll as scroll } from 'react-scroll'

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
            Eso que llaman amor es trabajo no pagado
          </h1>
          <h2 className="section-h2">Por Equipo Ahora Nosotras</h2>

          <div className="section-div-span">
            <div className="section-span">
              Despiertas es una sección dedicada a conocer datos importantes para la lucha de los derechos de
              las mujeres y el movimiento feminista. En este primer número de la Revista Ahora Nosotras dedicado
              a “Mujeres y Trabajo en Tiempos de Crisis” hablaremos sobre la deuda del reconocimiento del
              trabajo doméstico y no remunerado en Chile.
            </div>
          </div>

          <div className="despiertas-div">
            <img
              src={
                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/DESPIERTAS.png?raw=true"
              }
              alt="despiertas"
              className="despiertas-img"
            />
          </div>

          <div className="section-div-span">
            <div className="section-span">
              La crisis social, económica y sanitaria producto del COVID - 19 profundizó una cuarta dimensión: la
              crisis de los cuidados. Producto del confinamiento, el trabajo invisible que no ha sido ni reconocido ni
              valorado y que miles de mujeres realizan día a día para sostener la reproducción de la vida aumentó,
              provocando altos niveles de sobrecarga con hasta triples jornadas laborales, cansancio y estrés.

            </div>
            <div className="section-span">
              En el año 2019, Comunidad Mujer realizó un estudio llamado “¿Cuánto aportamos al PIB? Primer
              Estudio Nacional de Valoración Económica del Trabajo Doméstico y de Cuidado No Remunerado en
              Chile”. A partir del análisis se reconoce que el trabajo doméstico no remunerado supera la
              contribución de otras áreas económicas como el valor de los servicios financieros y empresariales, la
              construcción, el sector agropecuario, silvícola y de pesca.

            </div>
            <div className="section-span">
              Frente a este escenario no es casual que la creación de un sistema nacional de cuidados sea una
              demanda impulsada por el movimiento feminista en Chile que año a año toma más fuerza. Por eso,
              desde Ahora Nosotras esperamos que después de esta crisis palabras como la “corresponsabilidad”
              o “socialización de las tareas de cuidado” salgan del discurso y se hagan costumbre en todos los
              hogares de nuestro país.
            </div>
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    )
  }
}

export default Despiertas
