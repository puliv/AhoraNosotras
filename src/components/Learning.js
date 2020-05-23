import React, { Component } from 'react'
import ReactPlayer from 'react-player'
import vimeo from '../assets/vimeo_logo.png'

export class Learning extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }


  render() {
    return (
      <div className="learning">
        <div className="learning-div-text">
          <h2 className="learning-h2">APRENDEMOS</h2>
          <span className="learning-span">
            #AhoraNosotras es un también un encuentro, un intercambio, en el que juntas aprendemos y desarrollamos todas nuestras habilidades e intereses. Aquí podrás encontrar todos los materiales formativos de nuestra Escuela Nacional y las charlas virtuales que estamos desarrollando.
        </span>
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
        <div className="learninr-div-pdf">
          <h2>El conocimiento se comparte</h2>
          <div className="learning-pdf ce">
            <h3 className="learning-h3">Comunicación estratégica</h3>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Comunicación estratégica y construcción del discurso político</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Recomendaciones para construir una estrategia comunicacional</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Comunicación política</a>
            <p className="learning-pdf-author"></p>
          </div>
          <div className="learning-pdf hf">
            <h3 className="learning-h3">Historia Feminista</h3>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Feminismos, tensiones y formas de participación política</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Violencia de género y feminismos en Chile, 1970 - Presente</a>
            <p className="learning-pdf-author"></p>
          </div>
          <div className="learning-pdf pc">
            <h3 className="learning-h3">Proceso Constituyente</h3>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Herramientas para la comprensión sobre el acuerdo por una nueva constitución</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Poder feminista constituyente</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Procesos constituyentes y constituciones: una lectura de género</a>
            <p className="learning-pdf-author"></p>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Feminismo y Asamblea Constituyente</a>
            <p className="learning-pdf-author"></p>
          </div>
          <div className="learning-pdf oe">
            <h3 className="learning-h3">Otras Experiencias</h3>
            <a className="learning-pdf-a" href="www.hola.com">[PDF] Ingreso familiar de emergencia</a>
            <p className="learning-pdf-author"></p>
          </div>
        </div>
      </div>
    )
  }
}

export default Learning
