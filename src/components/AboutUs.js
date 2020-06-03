import React, { Component } from 'react'
import howThisWork from '../assets/img/juntassomoscomunidad.png'
import flowers from '../assets/details/flowers.png'
// import ahoraNosotras1 from '../assets/img/IMAGEN_1.1.png'
// import { Menu, Dropdown } from 'antd';

// const menu = (
//   <Menu style={{ width: "100%", marginTop: "13px", border: "1px solid #630164" }}>
//     <Menu.Item key="0">
//       <a href="http://www.alipay.com/">"Lorem ipsum dolor sit amet, consectetur adipiscing elit" </a>
//     </Menu.Item>
//     <Menu.Item key="1">
//       <a href="http://www.taobao.com/">"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</a>
//     </Menu.Item>
//     <Menu.Item key="2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit"</Menu.Item>
//   </Menu>
// );


export class AboutUs extends Component {
  render() {
    return (
      <div className="about-us-container">
        <div className="about-us-first-img" >
          {/* Primera imagen de fondo */}
          {/* <img
            src={ahoraNosotras1}
            alt="flores"
            className="ahora-nosotras-top"
          /> */}
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
                {/* <Dropdown overlay={menu} trigger={['click']}> */}
                <span className="about-us-span-text">
                  Cierre de plazo para cambio de domicilio electoral.
                  </span>
                {/* </Dropdown> */}
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
      </div >
    )
  }
}

export default AboutUs
