import React, { Component } from 'react'
import howThisWork from '../assets/img/juntassomoscomunidad.png'
import flowers from '../assets/flowers.png'

export class AboutUs extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="about-us-first-img">
          {/* Primera imagen de fondo */}
        </div>
        <div className="about-us">
          <div className="about-us-text-div">
            <img
              src={flowers}
              alt="flores"
              className="about-us-flower left"
            />
            <div className="about-us-text">
              <h2 className="about-us-h2 us">NOSOTRAS</h2>
              <span className="about-us-span us">
                Somos muchas voces quienes desde el feminismo y la militancia estamos transformando Chile y nuestro partido. Por eso juntas decidimos crear #AhoraNosotras, nuestra propuesta para hacer de
                Revolución Democrática el primer partido realmente feminista, capaz de transformar
                Chile en lo público y en lo privado.
                Lo hacemos nosotras porque hemos pasado de vivir la desigualdad de género a
                entenderla y organizarnos para disputar el poder y así transformarlo todo.
                </span>
            </div>
            <img
              src={flowers}
              alt="flores"
              className="about-us-flower right"
            />
          </div>

          <div className="about-us-img-div">
            <h2 className="about-us-h2 how-work">¿Cómo funciona la comunidad #AhoraNosotras?</h2>
            <img
              src={howThisWork}
              alt="Como funciona la comunidad"
              className="about-us-img"
            />
          </div>

          <div className="about-us-date-div">
            <h2 className="about-us-h2 date">NOS CONSTITUÍMOS</h2>
            <span className="about-us-span date">Las mujeres conformaremos Poder Constituyente Feminista para repensar la
          convivencia, nuestra comunidad y la construcción del poder. Juntas imaginaremos un Nuevo Chile.</span>
            <h4 className="about-us-h4">Fechas Claves</h4>
            <ul className="about-us-ul">
              <li className="about-us-li">
                <span className="about-us-span-date">06 JUN <br />&nbsp;2020</span>
                <span className="about-us-span-text">
                  Cierre de plazo para cambio de domicilio electoral.
                  </span>
              </li>
              <li className="about-us-li">
                <span className="about-us-span-date">25 OCT <br />&nbsp;2020</span>
                <span className="about-us-span-text">
                  Plebiscito Constitucional.
                  </span>
              </li>
              <li className="about-us-li">
                <span className="about-us-span-date">29 NOV <br />&nbsp;2020</span>
                <span className="about-us-span-text">
                  Primarias Alcaldes/as.
                  </span>
              </li>
              <li className="about-us-li">
                <span className="about-us-span-date">11 ABR <br />&nbsp;2021</span>
                <span className="about-us-span-text">
                  Elección alcaldes/as, concejales/as. gobernadores/as y convencionales constituyentes.
                  </span>
              </li>
              <li className="about-us-li">
                <span className="about-us-span-date">02 MAY <br />&nbsp;2021</span>
                <span className="about-us-span-text">
                  Segunda vuelta gobernadores/as.
                  </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="about-us-second-img">
          {/* Segunda imagen de fondo */}
        </div>
      </React.Fragment>
    )
  }
}

export default AboutUs
