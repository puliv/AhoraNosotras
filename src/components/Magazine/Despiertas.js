import React, { Component } from 'react'
import back from '../../assets/icons/arrow-left.svg'
import despiertas from '../../assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/DESPIERTAS.png'
import ReadNext from './ReadNext'
import { Link } from 'react-router-dom'


export class Despiertas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="despiertas">
        <div className="edit-top">
          <Link to="/magazine">
            <img src={back} alt="back" className="edit-back-icon" />
          </Link>
        </div>
        <div className="edit-main">
          <div className="edit-titles">
            <h3 className="protag-h3 title">
              DESPIERTAS
            </h3>
            <h1 className="protag-h1">
              Eso que llaman amor es trabajo no pagado.
            </h1>
            <h2 className="protag-h2">
              Equipo Ahora Nosotras
            </h2>

            <div className="despiertas-div">
              <img
                src={despiertas}
                alt="despiertas"
                className="despiertas-img"
              />
            </div>
          </div>
        </div>
        <ReadNext section={"despiertas"} />
      </div>
    )
  }
}

export default Despiertas
