import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";
import { animateScroll as scroll } from 'react-scroll'
import creamos from '../../assets/REVISTA3/creamos.jpg'

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
          <h1 className="section-h1">MADRE DE CINCO </h1>
          <h2 className="section-h2">Por Nancy Cereceda</h2>
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
            Es madre de cinco, cuatro vivas, uno muerto. Con cada nochevieja, él cumple un año más, de no estar. Mientras todos celebran, ella en silencio recuerda sus dieciocho, en un campamento minero, sintiendo dolores que no entendía. Sonaron los fuegos artificiales, todos se abrazaron, estaba sola en el baño del segundo piso. Con los estallidos llegó el llanto, la encontraron llena de sangre y con un hijo entre sus brazos, su padre la llevó al hospital. Ese día nació el dolor. El matrón de urgencia la cosió sin piedad, el matrón le anunciaría que su primer hijo había muerto.
          </span>

          {/* Destacado */}
          {/* <div className="section-div-split">
            <div className="section-div-half" style={{ display: 'flex', flexDirection: 'column', alignContent: 'space-between' }}>
              <span className="section-div-half-left" style={{ marginBottom: '10px' }}>
                No hubo palabras de aliento a la familia por parte del gobierno, mucho menos una condena tajante ante semejante acto. Hoy, con una investigación en curso, no existen imputados, tan solo el angustiante infortunio de un hombre que nació con el pecado de apellidarse Treuquil y no Luchsinger, de criarse en territorio mapuche y no gringo
            </span>
              <span className="section-div-half-left">
                Esta situación no es mejor cuando de mujeres se trata. Casos como el de Lorenza Cayuhan, Francisca Linconao o Macarena Valdés, nos recuerdan que no corre mejor suerte una mujer mapuche, de comunidad y que defiende sus derechos. El Estado utiliza todo su aparato represor para silenciar con cárcel o sicarios a aquellas que con coraje y valentía se atreven a sacar la voz por los suyos y suyas.
            </span>
            </div>
            <div className="section-div-half">
              <span className="section-div-half-right">
                Las nulas intenciones que tiene el gobierno de darle soluciones políticas a un tema que viene arrastrándose hace décadas como lo es el reconocimiento constitucional a los pueblos originarios, asunto que por cierto no debe ni puede combatirse con milicia.
            </span>
            </div>
          </div> */}
        </div>

        <ReadNext section={"creamos"} />
      </div>
    );
  }
}

export default Creamos;
