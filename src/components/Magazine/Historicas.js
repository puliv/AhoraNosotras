import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'

export class Historicas extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section historicas">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">HISTÓRICAS</h3>
          <h1 className="section-h1">Berta Cáceres y Macarena Valdés</h1>
          <h2 className="section-h2">Ilustración por: Camila Ortega</h2>
        </div>

        <div className="section-div-span ">
          <span className="section-span">
            En Junio como el Mes del Medioambiente hemos decidido mirar a los conflictos a los que se han enfrentado mujeres que se dedican al activismo y lucha socioambiental.
          </span>
          <span className="section-span">
            Así llegamos a los casos emblemáticos de Macarena y Berta, ambas mujeres indígenas, reconocidas por su liderazgo y resistencia a los estados opresores y a el amedrentamiento de  a las grandes empresas extractivistas.
          </span>
          <span className="section-span">
            Así es como vemos que la lucha medioambiental está cruzada por una fuerte resistencia de los pueblos originarios que defienden sus territorios, la lucha contra la xenofobia y la discriminación promovida desde el aparato estatal para exigir igualdad y un trato digno.
          </span>
          <span className="section-span">
            Berta Cáceres (1971-2016) fue una lideresa indígena lenca, feminista y activista del medio ambiente hondureña y Macarena Valdés (1984-2016) fue activista medioambientalista mapuche, ambas amedrentadas y asesinadas. Se hace evidente lo vulnerable de la situación, en especial si eres mujer e indígena.
          </span>
          <span className="section-span">
            Así temas que han resonado en esta cuarentena se hacen lejanos e incluso irrisorios al ver cómo son tratados en los medios masivos, como el llamado a lavarse las manos (¿como? Si no hay agua) y el caso que ha conmovido a nivel mundial, como fue el asesinato de George Floyd  y el racismo como si ocurriera solo en Estados Unidos (¿acaso no ocurre en chile también?¿qué pasa con Alejandro Treuquil?) nos llaman a hacer reflexiones más profundas.

          </span>

        </div>

        <div className="historicas-img-div">
          <img
            src={"https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA2/Historicas.png?raw=true"}
            alt="Historicas"
            className="historicas-img"
          />
        </div>

        <ReadNext section={"historicas"} />
      </div>
    );
  }
}

export default Historicas;
