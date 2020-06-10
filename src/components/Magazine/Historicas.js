import React, { Component } from 'react'
import back from '../../assets/icons/arrow-left.svg'
import ReadNext from './ReadNext'
import { Link } from 'react-router-dom'


export class Historicas extends Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
        return (
            <div className="historicas">
                <div className="edit-top">
                    <Link to="/magazine">
                        <img src={back} alt="back" className="edit-back-icon" />
                    </Link>
                </div>

                <div className="edit-main">
                    <div className="edit-titles">
                        <h3 className="protag-h3 title">
                            Historicas
            </h3>
                        <h1 className="protag-h1">
                            Eso que llaman amor es trabajo no pagado.
            </h1>
                        <h2 className="protag-h2">
                            Equipo Ahora Nosotras
            </h2>

                        <div className="Historicas-div">
                            <img
                                src={Historicas}
                                alt="Historicas"
                                className="Historicas-img"
                            />
                        </div>
                    </div>
                </div>
                <ReadNext section={"Historicas"} />
            </div>
        )
    }
}

export default Historicas
