import React, { Component } from "react"
import howThisWork from "../assets/img/juntassomoscomunidad.png"
import { Parallax } from "react-parallax"
import keyDates from "../JSON/key-dates.json"
import { animateScroll as scroll } from 'react-scroll'
// import { Menu, Dropdown } from 'antd'
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
// )

export class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      keyDates,
      dates: [],
      width: window.innerWidth,
      parallaxHeight: 0
    }
  }

  componentDidMount() {
    const { keyDates, width } = this.state
    scroll.scrollToTop()

    if (keyDates) {
      this.setState({
        dates: keyDates.map((data) => {
          return (
            <li key={data.id} className="about-us-li">
              <span className="about-us-span-container">
                <span className="about-us-span-date">{data.date}</span>
                <span className="about-us-span-year">{data.year}</span>
              </span>
              <span className="about-us-span-text">{data.description}</span>
            </li>
          )
        })
      })
    }

    width > 800 ? this.setState({ parallaxHeight: 600 }) : this.setState({ parallaxHeight: 250 })
  }



  render() {
    const { parallaxHeight, dates } = this.state

    return (
      <div className="about-us-container">
        <Parallax
          bgImage={require("../assets/img/IMAGEN_1.1.png")}
          strength={200}
        >
          <div style={{ height: parallaxHeight }} />
        </Parallax>

        <div className="about-us">
          {/* <div className="about-us-text"> */}
          <img
            src={
              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/logos/logo_morado.png?raw=true"
            }
            alt="Ahora Nosotras"
            className="about-us-title-logo"
          />
          <span className="about-us-span-us">
            Somos muchas voces quienes desde el feminismo y la militancia
            estamos transformando Chile y nuestro partido. Por eso juntas
            decidimos crear #AhoraNosotras, nuestra propuesta para hacer de
            Revolución Democrática el primer partido realmente feminista, capaz
            de transformar Chile en lo público y en lo privado. Lo hacemos
            nosotras porque hemos pasado de vivir la desigualdad de género a
            entenderla y organizarnos para disputar el poder y así transformarlo
            todo.
          </span>
          {/* </div> */}

          <div className="about-us-img-div">
            <h2 className="about-us-h2 how-work">
              ¿Cómo funciona la comunidad #AhoraNosotras?
            </h2>
            <img
              src={howThisWork}
              alt="Como funciona la comunidad"
              className="about-us-img"
            />
          </div>

          <div className="about-us-date-div">
            <h2 className="about-us-h2 date">NOS CONSTITUÍMOS</h2>
            <span className="about-us-span date">
              Las mujeres conformaremos Poder Constituyente Feminista para
              repensar la convivencia, nuestra comunidad y la construcción del
              poder. Juntas imaginaremos un Nuevo Chile.
            </span>
            <h4 className="about-us-h4">Fechas Claves</h4>
            <ul className="about-us-ul">{dates}</ul>
          </div>
        </div>

        <Parallax
          bgImage={require("../assets/img/IMAGEN_1.3.png")}
          strength={200}
        >
          <div style={{ height: parallaxHeight }} />
        </Parallax>
      </div>
    )
  }
}

export default AboutUs
