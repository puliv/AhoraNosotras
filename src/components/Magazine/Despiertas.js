import React, { Component } from "react"
import ReadNext from "./ReadNext"
import GoBack from "./GoBack"
import { animateScroll as scroll } from 'react-scroll'
import despiertas from '../../assets/REVISTA2/Despiertas.png'

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
            ¡SUELTEN EL AGUA!
          </h1>
          <h2 className="section-h2">Por Equipo Ahora Nosotras</h2>

          <div className="section-div-span">
            <div className="section-span">
              Según la Organización Mundial de la Salud (OMS) para evitar contraer el coronavirus es fundamental lavarse las manos con agua y jabón constantemente. Sin embargo, producto de la crisis hídrica, el extractivismo, el monocultivo y el saqueo indiscriminado del agua en Chile hay muchas comunidades que no pueden cumplir con ese mínimo para el cuidado de la vida.
            </div>
            <div className="section-span">
              Hace más de dos décadas, la Asamblea General de Naciones Unidas proclamó el 17 de junio como el Día Mundial de Lucha contra la Desertificación y la Sequía. Por eso, en este segundo número dedicado a “Mujeres, crisis climática y defensa de los territorios” nos preguntamos ¿Qué podemos hacer nosotras frente a la escasez de un recurso vital como el agua en tiempos de crisis sanitaria?
            </div>
          </div>

          <div className="despiertas-div">
            <img
              src={despiertas}
              alt="despiertas"
              className="despiertas-img"
            />
          </div>

          <div className="section-div-span">
            <div className="section-span">
              ¡Sin agua, ni salud!
            </div>
            <div className="section-span">
              En Chile, en plena pandemia hoy tenemos aproximadamente 1 millón 100 mil de personas con serias dificultades para acceder al agua potable todos los días.
            </div>
            <div className="section-span">
              Por otra parte, hay 350 mil personas que dependen del sistema de agua potable rural vía camiones aljibes y/o pozos.
            </div>
            <div className="section-span">
              Aparte del negocio de estos camiones por el alto precio del agua y que son pagados por el Estado chileno, estos no cuentan con fiscalización de la autoridad sanitaria por lo que la calidad biológica de esta agua se desconoce.
            </div>
            <div className="section-span">
              Cada vez que una persona se lava las manos gasta de 1 a 2 litros. En lugares como Petorca, cada hectárea de palto permitiría lavarse las manos 42 mil veces.
            </div>
            <div className="section-span">
              Esta situación de escasez hídrica implica que lavarse las manos frecuentemente sea una tarea imposible.
            </div>
            <div className="section-span">
              Fuente: Informe Mundial de las Naciones Unidas sobre el Desarrollo de los Recursos Hídricos de 2019, Greenpeace Chile y Modatima
            </div>
            <div className="section-span">
              Mujeres frente al despojo
            </div>
            <div className="section-span">
              En los territorios, las mujeres son las que entregan el agua a sus comunidades.
            </div>
            <div className="section-span">
              Ejemplo de ello es que 8 de 10 mujeres son recolectoras de agua, entre eso hay niñas incluidas.
            </div>
            <div className="section-span">
              Si bien en el papel las autoridades señalan que entregan 50 litros de agua por habitante, semanalmente hay comunidades que sobreviven solo con entre 15 litros y 20 litros de agua al día.
            </div>
            <div className="section-span">
              Fuente: Mujeres Modatima
            </div>
            <div className="section-span">
              Plan Nacional de Emergencia ¡Ahora!
            </div>
            <div className="section-span">
              Bajo la Campaña “Suelta el Agua”, movimientos como Greenpeace y Modatima reconocen que las medidas paliativas como la entrega de bidones de agua o alimentos no alcanzan.
            </div>
            <div className="section-span">
              En el corto plazo demandan un Plan Nacional de Emergencia de Distribución y Liberación para abastecer de agua inmediatamente a todos y todas los que no tienen ni siquiera para lavarse las manos o higienizar sus hogares.
            </div>
            <div className="section-span">
              En el largo plazo y en medio de un proceso constituyente que sigue en curso urge modificar el Código de Aguas del año 1981 para evitar que en Chile los privados tengan más derecho al agua que las personas.
            </div>
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    )
  }
}

export default Despiertas
