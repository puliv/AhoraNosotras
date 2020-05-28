import React, { Component } from 'react'
import { Row, Col } from 'antd'
import portada from '../../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/PORTADA_DEFINITIVA.png'
import editorial from '../../assets/REVISTA_AHORA_NOSOTRAS/2_EDITORIAL/editorial.png'
import protagonistas from '../../assets/REVISTA_AHORA_NOSOTRAS/3_PROTAGONISTAS/protagonistaspng-03.png'
import hablamos from '../../assets/REVISTA_AHORA_NOSOTRAS/4_HABLAMOS/Hablamos.png'
import fabiolaCampillay from '../../assets/REVISTA_AHORA_NOSOTRAS/5_CREAMOS/FABIOLA_CAMPILLAY.png'
import despiertas from '../../assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/DESPIERTAS.png'
import contraportada from '../../assets/REVISTA_AHORA_NOSOTRAS/7_CONTRAPORTADA/ahoranosotras.png'
import Editorial from './Editorial'
import './Magazine.css'



export class Magazine extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="magazine">
          <div className="mag-top">
            <div className="mag-scroll">
              <div className="mag-scroll-left">
                <div className="mag-img-cover-div">
                  <img
                    src={portada}
                    alt="cover"
                    className="mag-img-cover"
                  />
                </div>
                <div className="mag-img-backover-div">
                  <img
                    src={contraportada}
                    alt="backcover"
                    className="mag-backcover-img"
                  />
                </div>
              </div>
              <div className="mag-scroll-right">
                <Row className="mag-scroll-row-vertical">
                  <Col span={12} className="mag-ver-div-col left">
                    <img
                      src={editorial}
                      alt="mag-img"
                      className="mag-ver-img"
                    />
                    <div className="mag-ver-text">
                      <h3 className="mag-h3">EDITORIAL</h3>
                      <h2 className="mag-h2">CRIAR Y CUIDAR TAMBIÉN ES TRABAJAR</h2>
                      <h4 className="mag-h4">POR EQUIPO AHORA NOSOTRAS</h4>
                    </div>
                  </Col>
                  <Col span={12} className="mag-ver-div-col right">
                    <img
                      src={hablamos}
                      alt="mag-img"
                      className="mag-ver-img"
                    />
                    <div className="mag-ver-text">
                      <h3 className="mag-h3">HABLAMOS</h3>
                      <h2 className="mag-h2">VALDIVIA<br /> SOLIDARIA</h2>
                      <h4 className="mag-h4">POR @Vic_tonha_ Y CAMILA CASTILLO GUERRERO</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="mag-scroll-row-horizontal">
                  <Col span={24} className="mag-hor-div-col">
                    <img
                      src={protagonistas}
                      alt="mag-img"
                      className="mag-hor-img"
                    />
                    <div className="mag-hor-text">
                      <h3 className="mag-h3">PROTAGONISTAS</h3>
                      <h2 className="mag-h2">AURORA PARDO: "CHILE ES UN MAL EMPLEADOR"</h2>
                      <h4 className="mag-h4">POR JAVIERA LÓPEZ LAVANA</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="mag-scroll-row-vertical">
                  <Col span={12} className="mag-ver-div-col left">
                    <img
                      src={fabiolaCampillay}
                      alt="mag-img"
                      className="mag-ver-img"
                    />
                    <div className="mag-ver-text">
                      <h3 className="mag-h3">CREAMOS</h3>
                      <h2 className="mag-h2">HOMENAJE A<br /> FABIOLA CAMPILLAY</h2>
                      <h4 className="mag-h4">POR EQUIPO AHORA NOSOTRAS</h4>
                    </div>
                  </Col>
                  <Col span={12} className="mag-ver-div-col right">
                    <img
                      src={despiertas}
                      alt="mag-img"
                      className="mag-ver-img despiertas"
                    />
                    <div className="mag-ver-text">
                      <h3 className="mag-h3">DESPIERTAS</h3>
                      <h2 className="mag-h2">ESO QUE LLAMAN AMOR ES TRABAJO<br /> NO PAGADO</h2>
                      <h4 className="mag-h4">POR @Vic_tonha_ Y CAMILA CASTILLO GUERRERO</h4>
                    </div>
                  </Col>
                </Row>
                <Row className="mag-scroll-row-backcover">
                  <Col span={24} className="mag-backcover-col">
                    <span className="mag-span">
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </span>
                  </Col>
                </Row>
              </div>
            </div>
          </div>

          <div className="mag-main">
            <Editorial />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Magazine
