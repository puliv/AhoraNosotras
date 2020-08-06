import React, { Component } from "react";
import "./Magazine.css";
import Editorial from "./Editorial";
import Hablamos from "./Hablamos";
import Creamos from "./Creamos";
import Protagonistas from "./Protagonistas";
import Despiertas from "./Despiertas";
import cover from '../../assets/REVISTA3/portada-3.png'
import editorialImg from '../../assets/REVISTA3/editorial.png'
import hablamosImg from '../../assets/REVISTA3/hablamos_alejandratoledo.png'
import opinamosImg from '../../assets/REVISTA3/opinamos.png'
import creamosImg from '../../assets/REVISTA3/creamos.png'
import despiertasImg from '../../assets/REVISTA3/despiertas.png'
import backcover from '../../assets/REVISTA3/contraportada.jpg'

import { Row, Col } from "antd";
import { animateScroll as scroll } from "react-scroll";
import { Link, Switch, Route } from "react-router-dom";
import Opinamos from "./Opinamos";
import Historicas from "./Historicas";

export class Magazine extends Component {
  componentDidMount() {
    scroll.scrollToTop();
  }

  render() {
    return (
      <React.Fragment>
        <div className="magazine">
          <Switch>
            <Route exact path={"/magazine"}>
              <div className="mag-top">

                <div className="mag-scroll-left">
                  <Link to="/magazine/protagonistas">
                    <img
                      src={cover}
                      alt="cover"
                      className="mag-img-cover"
                    />
                  </Link>
                </div>

                <div className="mag-scroll-right">
                  <Row className="mag-scroll-row-vertical">
                    <Col className="mag-ver-div-col left">
                      <Link to="/magazine/editorial">
                        <img
                          src={editorialImg}
                          alt="mag-img"
                          className="mag-ver-img"
                        />
                        <div className="mag-ver-text">
                          <h3 className="mag-h3">EDITORIAL</h3>
                          <h2 className="mag-h2">
                            PODER DECIDIR, PARA NO MORIR
                              </h2>
                          <h4 className="mag-h4">POR ANITA MARTÍNEZ</h4>
                        </div>
                      </Link>
                    </Col>
                    <Col className="mag-ver-div-col right">
                      <Link to="/magazine/hablamos">
                        <img
                          src={hablamosImg}
                          alt="mag-img"
                          className="mag-ver-img"
                        />
                        <div className="mag-ver-text">
                          <h3 className="mag-h3">HABLAMOS</h3>
                          <h2 className="mag-h2">
                            DE OSCURIDAD Y LUZ
                              </h2>
                          <h4 className="mag-h4">Por Alejandra Toledo</h4>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="mag-scroll-row-horizontal">
                    <Link to="/magazine/opinamos">
                      <Col span={24} className="mag-hor-div-col">
                        <img
                          src={opinamosImg}
                          alt="mag-img"
                          className="mag-hor-img"
                        />
                        <div className="mag-hor-text">
                          <h3 className="mag-h3">OPINAMOS</h3>
                          <h2 className="mag-h2">
                            OBLIGADAS AL ENCIERRO
                              </h2>
                          <h4 className="mag-h4">Por Valeria Cárcamo</h4>
                        </div>
                      </Col>
                    </Link>
                  </Row>
                  <Row className="mag-scroll-row-vertical">
                    <Col className="mag-ver-div-col left">
                      <Link to="/magazine/creamos">
                        <img
                          src={creamosImg}
                          alt="mag-img"
                          className="mag-ver-img"
                        />
                        <div className="mag-ver-text">
                          <h3 className="mag-h3">CREAMOS</h3>
                          <h2 className="mag-h2">
                            MADRE DE CINCO
                              </h2>
                          <h4 className="mag-h4">
                            Por Nancy Cereceda
                              </h4>
                        </div>
                      </Link>
                    </Col>
                    <Col className="mag-ver-div-col right">
                      <Link to="/magazine/despiertas">
                        <img
                          src={despiertasImg}
                          alt="mag-img"
                          className="mag-ver-img despiertas-prev"
                        />
                        <div className="mag-ver-text">
                          <h3 className="mag-h3">DESPIERTAS</h3>
                          <h2 className="mag-h2">
                            EDUCACIÓN, ANTICONCEPTIVOS Y ABORTO LEGAL ¡AHORA!
                              </h2>
                          <h4 className="mag-h4">
                            POR EQUIPO AHORA NOSOTRAS
                              </h4>
                        </div>
                      </Link>
                    </Col>
                  </Row>
                  <Row className="mag-scroll-row-backcover">
                    <Link to="/magazine/historicas">
                      <Col span={24} className="mag-backcover-col">
                        <img
                          src={backcover}
                          alt="backcover"
                          className="mag-backcover-img"
                        />
                        <div className="mag-backcover-text">
                          <span className="mag-h2-historicas">
                            HISTÓRICAS
                            </span>
                          {/* <h4 className="mag-h4-historicas">
                            POR ????
                              </h4> */}
                        </div>

                      </Col>
                    </Link>
                  </Row>
                </div>

              </div>
            </Route>
            <Route path="/magazine/editorial" component={Editorial} />
            <Route path="/magazine/protagonistas" component={Protagonistas} />
            <Route path="/magazine/hablamos" component={Hablamos} />
            <Route path="/magazine/opinamos" component={Opinamos} />
            <Route path="/magazine/creamos" component={Creamos} />
            <Route path="/magazine/despiertas" component={Despiertas} />
            <Route path="/magazine/historicas" component={Historicas} />
          </Switch>
        </div>
      </React.Fragment>
    );
  }
}

export default Magazine;
