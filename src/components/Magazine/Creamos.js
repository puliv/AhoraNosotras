import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import creamos from '../../assets/REVISTA2/Creamos.png'
import { animateScroll as scroll } from 'react-scroll'

export class Creamos extends Component {
  componentDidMount() {
    scroll.scrollToTop()
  }

  render() {
    return (
      <div className="section creamos">
        <GoBack />
        <div className="section-titles">
          <h3 className="section-h3">CREAMOS</h3>
          <h1 className="section-h1">NO ES PANDEMIA, ES PAN DE CADA DÍA</h1>
          <h2 className="section-h2">Por Ericka Ñanco, vocera de Asamblea de Mujeres Ngulumapu 2018 - 2019</h2>
        </div>

        <div className="section-img-div">
          <img
            src={creamos}
            alt="creamos"
            className="section-img"
          />
        </div>
        <div className="section-div-span">
          <span className="section-span">
            Durante estas últimas semana, en plena crisis sanitaria, los ministros del Interior y de Defensa nos sorprendieron a través de los medios de comunicación al anunciar públicamente un reforzamiento militar de la Unidad Fundamental de Orden Público (UFO) a las regiones del Bío Bío y Araucanía, dizque para “combatir” la delincuencia en el territorio.
          </span>
          <span className="section-span">
            Si consideramos que el rol de las fuerzas armadas en Chile es “preservar la paz, garantizar la soberanía nacional, mantener la integridad territorial y proteger a la población e instituciones frente a cualquier amenaza externa, así como constituir una importante herramienta de la política exterior de Chile”, lo más sensato sería pensar que este arsenal de militares se presenten a ser un aporte en contra de la única amenaza externa que hoy nos aqueja como país: el COVID-19.
          </span>
          <span className="section-span">
            Más aún si el gobierno aumentó en 3 mil millones de dólares su presupuesto 2020. Sin embargo, lógicas de funcionamiento de este tipo de las FF.AA no funciona cuando algo huele o se ve como mapuche. Ejemplo, de ello es que el pasado 4 de junio, Alejandro Treuquil, el werken de la comunidad We Newen de Collipulli, que reivindica tierras en disputa con forestal Arauco, murió asesinado por desconocidos dejando una viuda y tres hijos.
          </span>

          <div className="section-div-split">
            <div className="section-div-half">
              <span className="section-div-half-left">
                No hubo palabras de aliento a la familia por parte del gobierno, mucho menos una condena tajante ante semejante acto. Hoy, con una investigación en curso, no existen imputados, tan solo el angustiante infortunio de un hombre que nació con el pecado de apellidarse Treuquil y no Luchsinger, de criarse en territorio mapuche y no gringo
            </span>
            </div>
            <div className="section-div-half">
              <span className="section-div-half-right">
                Las nulas intenciones que tiene el gobierno de darle soluciones políticas a un tema que viene arrastrándose hace décadas como lo es el reconocimiento constitucional a los pueblos originarios, asunto que por cierto no debe ni puede combatirse con milicia.
            </span>
            </div>
          </div>
          <span className="section-span">
            Esta situación no es mejor cuando de mujeres se trata. Casos como el de Lorenza Cayuhan, Francisca Linconao o Macarena Valdés, nos recuerdan que no corre mejor suerte una mujer mapuche, de comunidad y que defiende sus derechos. El Estado utiliza todo su aparato represor para silenciar con cárcel o sicarios a aquellas que con coraje y valentía se atreven a sacar la voz por los suyos y suyas.
          </span>
          <span className="section-span">
            Lamentable esta realidad  acá en la Araucanía es pan de cada día. La amenaza externa en plena pandemia sumada al aumento de presupuesto desproporcionado a las Fuerzas Armadas es una burda excusa. Todo esto nos da cuenta de las nulas intenciones que tiene el gobierno de Sebastián Piñera de darle soluciones políticas a un tema que viene arrastrándose hace décadas como lo es el reconocimiento constitucional a los pueblos originarios, asunto que por cierto no debe ni puede combatirse con milicia.
          </span>
        </div>

        <ReadNext section={"creamos"} />
      </div>
    );
  }
}

export default Creamos;
