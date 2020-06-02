import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import vimeo from '../assets/logos/vimeo_logo.png'
import COMUNICACION_ESTRATEGICA from '../assets/PDF/COMUNICACION_ESTRATEGICA/1COMUNICACION_ESTRATEGICA.pdf'
import RECOMENDACIONES_PARA_ESTRATEGIA_COMUNICACIONAL from '../assets/PDF/COMUNICACION_ESTRATEGICA/2RECOMENDACIONES_PARA_ESTRATEGIA_COMUNICACIONAL.pdf'
import COMUNICACIÓN_POLÍTICA from '../assets/PDF/COMUNICACION_ESTRATEGICA/3COMUNICACIÓN_POLÍTICA.pdf'
import FEMINISMOS_TENSIONES_Y_FORMAS from '../assets/PDF/HISTORIA_FEMINISTA/1FEMINISMOS_TENSIONES_Y_FORMAS.pdf'
import VIOLENCIA_DE_GÉNERO_Y_FEMINISMOS from '../assets/PDF/HISTORIA_FEMINISTA/2VIOLENCIA_DE_GÉNERO_Y_FEMINISMOS.pdf'
import HERRAMIENTAS_PARA_LA_COMPRENSION from '../assets/PDF/PROCESO_CONSTITUYENTE/1HERRAMIENTAS_PARA_LA_COMPRENSION.pdf'
import PODER_FEMINISTA_CONSTITUYENTE from '../assets/PDF/PROCESO_CONSTITUYENTE/2PODER_FEMINISTA_CONSTITUYENTE.pdf'
import PROCESOS_CONSTITUYENTES_CONSTITUCIONES from '../assets/PDF/PROCESO_CONSTITUYENTE/3PROCESOS_CONSTITUYENTES_CONSTITUCIONES.pdf'
import FEMINISMO_Y_ASAMBLEA_CONSTITUYENTE from '../assets/PDF/PROCESO_CONSTITUYENTE/4FEMINISMO_Y_ASAMBLEA_CONSTITUYENTE.pdf'
import Ingreso_familiar_de_emergencia_1 from '../assets/PDF/OTRAS_EXPERIENCIAS/Ingreso_familiar_de_emergencia_1.pdf'
import MUJERES from '../assets/details/MUJERES.png'
import flower_2 from '../assets/details/Flores_amarillas.svg'
import pdf_icon_1 from '../assets/icons/Grupo.svg'
import pdf_icon_2 from '../assets/icons/Grupo_2.svg'
import pdf_icon_3 from '../assets/icons/Grupo_3.svg'
import pdf_icon_4 from '../assets/icons/Grupo_4.svg'

export class Learning extends Component {
  constructor(props) {
    super(props)

    this.state = {
      COMUNICACION_ESTRATEGICA
    }
  }


  render() {
    return (
      <div className="learning">
        <div className="learning-div-text">
          <img
            src={flower_2}
            alt="flores"
            className="learning-flower left"
          />
          <div className="learning-text">
            <h2 className="learning-h2">APRENDEMOS</h2>
            <span className="learning-span">
              #AhoraNosotras es un también un encuentro, un intercambio, en el que juntas aprendemos y desarrollamos todas nuestras habilidades e intereses. Aquí podrás encontrar todos los materiales formativos de nuestra Escuela Nacional y las charlas virtuales que estamos desarrollando.
            </span>
          </div>
          <img
            src={flower_2}
            alt="flores"
            className="learning-flower right"
          />
        </div>

        <div className="learning-div-talk">
          <div className="learning-talk-title">
            <h2 className="learning-h2 talk">Nuestras Charlas</h2>
          </div>

          <div className="learning-video-div a">
            <div className="learning-video">
              <ReactPlayer url="https://vimeo.com/414586386" controls width={500} />
            </div>
            <div className="learning-video-text">
              <h3 className="learning-h3">Ingreso Familiar de Emergencia.</h3>
              <span className="learning-span-video">En el contexto de la actual crisis sanitaria mundial por Coronavirus, conversamos con Mercedes D Alessandro, quien efectuó una charla sobre el Ingreso de Emergencia, política pública con perspectiva de género que tiene por propósito beneficiar 3,6 millones de hogares argentinos. Esto con el objetivo de abrir la discusión sobre Renta Básica de Emergencia en Chile.</span>
            </div>
          </div>

          <div className="learning-video-div b">
            <div className="learning-video">
              <ReactPlayer url="https://vimeo.com/411802745" controls width={500} />
            </div>
            <div className="learning-video-text">
              <h3 className="learning-h3">Procesos Constituyentes y Constituciones: Una Lectura de Género.</h3>
              <span className="learning-span-video">Charla dirigida a reflexionar sobre cómo la perspectiva de género puede ser un eje fundante y transversal que irradie la discusión constitucional en la futura Convención Constitucional, descartando una visión neutra respecto de la forma y contenido de una Constitución Política.</span>
            </div>
          </div>

          <div className="learning-vimeo-link">
            <span className="learning-video-span">
              Todas nuestras charlas las puedes encontrar en nuestro canal de
              <img src={vimeo} alt="vimeo" className="vimeo-logo" />
            </span>
            <button className="learning-btn">Ir al canal</button>
          </div>
        </div>

        <div className="learning-div-pdf">
          <h2 className="learning-h2 pdf-h2">El conocimiento se comparte</h2>
          <span className="learning-span pdf-span">Si quieres profundizar en los contenidos de nuestras Escuelas y Charlas Virtuales. <br />Revisa los materiales preparados por las y los profesores y ponentes de #AhoraNosotras.</span>
          <div className="learning-pdf">
            <div className="learning-pdf-div-icon">
              <img
                src={pdf_icon_1}
                alt="pdf_icon"
                className="pdf-icon"
              />
            </div>
            <div className="learning-pdf-div-text">
              <h3 className="learning-h3">Comunicación estratégica</h3>
              <a className="learning-pdf-a" href={COMUNICACION_ESTRATEGICA} target="/blank">[PDF] Comunicación estratégica y construcción del discurso político</a>
              <p className="learning-pdf-author">
                Por Juanita Rojas, Auska Ovando y Camila Rodriguez, diciembre 2019.
            </p>
              <a className="learning-pdf-a" href={RECOMENDACIONES_PARA_ESTRATEGIA_COMUNICACIONAL} target="/blank">[PDF] Recomendaciones para construir una estrategia comunicacional</a>
              <p className="learning-pdf-author">
                Por Juanita Rojas, Auska Ovando y Camila Rodriguez, diciembre 2019.
            </p>
              <a className="learning-pdf-a" href={COMUNICACIÓN_POLÍTICA} target="/blank">[PDF] Comunicación política</a>
              <p className="learning-pdf-author">
                Por Sebastian Kraljevich.
            </p>
            </div>
          </div>

          <div className="learning-pdf">
            <div className="learning-pdf-div-icon">
              <img
                src={pdf_icon_2}
                alt="pdf_icon"
                className="pdf-icon"
              />
            </div>
            <div className="learning-pdf-div-text">
              <h3 className="learning-h3">Historia Feminista</h3>
              <a className="learning-pdf-a" href={FEMINISMOS_TENSIONES_Y_FORMAS} target="/blank">[PDF] Feminismos, tensiones y formas de participación política</a>
              <p className="learning-pdf-author">
                Por María Stella Toro, septiembre 2019.
            </p>
              <a className="learning-pdf-a" href={VIOLENCIA_DE_GÉNERO_Y_FEMINISMOS} target="/blank">[PDF] Violencia de género y feminismos en Chile, 1970 - Presente</a>
              <p className="learning-pdf-author">
                Por Hillary Hiner, diciembre 2019.
            </p>
            </div>
          </div>

          <div className="learning-pdf">
            <div className="learning-pdf-div-icon">
              <img
                src={pdf_icon_3}
                alt="pdf_icon"
                className="pdf-icon"
              />
            </div>
            <div className="learning-pdf-div-text">
              <h3 className="learning-h3">Proceso Constituyente</h3>
              <a className="learning-pdf-a" href={HERRAMIENTAS_PARA_LA_COMPRENSION} target="/blank">[PDF] Herramientas para la comprensión sobre el acuerdo por una nueva constitución</a>
              <p className="learning-pdf-author">
                Por Claudia Heiss, diciembre 2019.
            </p>
              <a className="learning-pdf-a" href={PODER_FEMINISTA_CONSTITUYENTE} target="/blank">[PDF] Poder feminista constituyente</a>
              <p className="learning-pdf-author">
                Por Gloria María, diciembre 2019.
            </p>
              <a className="learning-pdf-a" href={PROCESOS_CONSTITUYENTES_CONSTITUCIONES} target="/blank">[PDF] Procesos constituyentes y constituciones: una lectura de género</a>
              <p className="learning-pdf-author">
                Por Yanira Zúñiga, abril 2019.
            </p>
              <a className="learning-pdf-a" href={FEMINISMO_Y_ASAMBLEA_CONSTITUYENTE} target="/blank">[PDF] Feminismo y Asamblea Constituyente</a>
              <p className="learning-pdf-author">
                Por Unidad de Género, 2016.
            </p>
            </div>
          </div>

          <div className="learning-pdf">
            <div className="learning-pdf-div-icon">
              <img
                src={pdf_icon_4}
                alt="pdf_icon"
                className="pdf-icon"
              />
            </div>
            <div className="learning-pdf-div-text">
              <h3 className="learning-h3">Otras Experiencias</h3>
              <a className="learning-pdf-a" href={Ingreso_familiar_de_emergencia_1} target="/blank">[PDF] Ingreso familiar de emergencia</a>
              <p className="learning-pdf-author">
                Por Mercedes D'Alessandro, abril 2020.
            </p>
            </div>
          </div>
        </div>

        <div className="learning-div-image">
          <img
            src={MUJERES}
            alt="MUJERES"
            className="learning-img-women"
          />
        </div>
      </div>
    )
  }
}

export default Learning
