import React, { Component } from 'react'
import mercedes from '../assets/img/IMAGEN_3.1.png'
import ReactPlayer from 'react-player'

export class Learning extends Component {
  constructor(props) {
    super(props)

    this.state = {
      mercedes
    }
  }


  render() {
    return (
      <div className="learning">
        <div className="learning-div-top">
          <h2 className="learning-h2">APRENDEMOS</h2>
          <span className="learning-span">
            #AhoraNosotras es un también un encuentro, un intercambio, en el que juntas aprendemos y desarrollamos todas nuestras habilidades e intereses. Aquí podrás encontrar todos los materiales formativos de nuestra Escuela Nacional y las charlas virtuales que estamos desarrollando.
        </span>
        </div>
        <div className="learning-div-videos">
          <div className="learning-video">
            <ReactPlayer url="https://vimeo.com/414586386" controls width={500} />
          </div>
          <div className="learning-video">
            <ReactPlayer url="https://vimeo.com/411802745" controls width={500} />

          </div>
        </div>
      </div>
    )
  }
}

export default Learning
