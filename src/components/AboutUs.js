import React, { Component } from 'react'

export class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <div className="about-us-img"></div>
        <div className="about-us-text">
          <h2 className="about-us-h2">NOSOTRAS</h2>
          <span className="about-us-span">
            Somos muchas voces quienes desde el feminismo y la militancia estamos transformando Chile y nuestro partido. <br />
          Por eso juntas decidimos crear #AhoraNosotras, nuestra propuesta para hacer de
          Revolución Democrática el primer partido realmente feminista,<br /> capaz de transformar
          Chile en lo público y en lo privado.<br />
          Lo hacemos nosotras porque hemos pasado de vivir la desigualdad de género a
          entenderla y organizarnos para disputar el poder y así transformarlo todo.
          </span>
        </div>
        <div className="about-us-second-img"></div>
        <div className="about-us-second-text">
          <h2 className="about-us-h2">NOS CONSTITUÍMOS</h2>
          <span className="about-us-span">Las mujeres conformaremos Poder Constituyente Feminista para repensar la
          convivencia, nuestra comunidad y la construcción del poder. Juntas imaginaremos un Nuevo Chile.</span>
          <h4 className="about-us-h4">Fechas son claves:</h4>
          <ul>
            <li>
              6 de junio de 2020: Cierre de plazo para cambio de domicilio electoral.
            </li>
            <li>
              25 de octubre de 2020: Plebiscito Constitucional.
            </li>
            <li>
              29 de noviembre de 2020: Primarias Alcaldes/as.
            </li>
            <li>
              11 de abril de 2021: Elección alcaldes/as, concejales/as. gobernadores/as y convencionales constituyentes.
            </li>
            <li>
              2 de mayo de 2021: Segunda vuelta gobernadores/as.
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default AboutUs
