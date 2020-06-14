import React, { Component } from "react";
import "./Magazine.css";
import Editorial from "./Editorial";
import Hablamos from "./Hablamos";
import Creamos from "./Creamos";
import Protagonistas from "./Protagonistas";
import Despiertas from "./Despiertas";
import opinamos from "../../assets/REVISTA_AHORA_NOSOTRAS/8_OPINAMOS/opinamos.png";

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
                <div className="mag-scroll">
                  <Row className="mag-scroll-row-top">
                    <div className="mag-scroll-left">
                      <Link to="/magazine/protagonistas">
                        <div className="mag-img-cover-div">
                          <img
                            src={
                              "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/portada_revista.jpg?raw=true"
                            }
                            alt="cover"
                            className="mag-img-cover"
                          />
                        </div>
                      </Link>
                    </div>
                    <div className="mag-scroll-right">
                      <Row className="mag-scroll-row-vertical">
                        <Col span={12} className="mag-ver-div-col left">
                          <Link to="/magazine/editorial">
                            <img
                              src={
                                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/2_EDITORIAL/editorial.png?raw=true"
                              }
                              alt="mag-img"
                              className="mag-ver-img"
                            />
                            <div className="mag-ver-text">
                              <h3 className="mag-h3">EDITORIAL</h3>
                              <h2 className="mag-h2">
                                CRIAR Y CUIDAR TAMBIÉN ES TRABAJAR
                              </h2>
                              <h4 className="mag-h4">
                                POR EQUIPO AHORA NOSOTRAS
                              </h4>
                            </div>
                          </Link>
                        </Col>
                        <Col span={12} className="mag-ver-div-col right">
                          <Link to="/magazine/hablamos">
                            <img
                              src={
                                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/4_HABLAMOS/Hablamos.png?raw=true"
                              }
                              alt="mag-img"
                              className="mag-ver-img"
                            />
                            <div className="mag-ver-text">
                              <h3 className="mag-h3">HABLAMOS</h3>
                              <h2 className="mag-h2">
                                VALDIVIA
                                <br /> SOLIDARIA
                              </h2>
                              <h4 className="mag-h4">
                                POR @Vic_tonha_ Y CAMILA CASTILLO GUERRERO
                              </h4>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                      <Row className="mag-scroll-row-horizontal">
                        <Link to="/magazine/opinamos">
                          <Col span={24} className="mag-hor-div-col">
                            <img
                              src={opinamos}
                              alt="mag-img"
                              className="mag-hor-img"
                            />
                            <div className="mag-hor-text">
                              <h3 className="mag-h3">OPINAMOS</h3>
                              <h2 className="mag-h2">
                                FALTA DE CORRESPONSABILIDAD: OTRO SÍNTOMA DE UN
                                MAL PANDÉMICO LLAMADO MACHISMO
                              </h2>
                              <h4 className="mag-h4">POR PAULA TINA MENTE</h4>
                            </div>
                          </Col>
                        </Link>
                      </Row>
                      <Row className="mag-scroll-row-vertical">
                        <Col span={12} className="mag-ver-div-col left">
                          <Link to="/magazine/creamos">
                            <img
                              src={
                                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/5_CREAMOS/creamos-04.png?raw=true"
                              }
                              alt="mag-img"
                              className="mag-ver-img"
                            />
                            <div className="mag-ver-text">
                              <h3 className="mag-h3">CREAMOS</h3>
                              <h2 className="mag-h2">
                                HOMENAJE A<br /> FABIOLA CAMPILLAY
                              </h2>
                              <h4 className="mag-h4">
                                POR EQUIPO AHORA NOSOTRAS
                              </h4>
                            </div>
                          </Link>
                        </Col>
                        <Col span={12} className="mag-ver-div-col right">
                          <Link to="/magazine/despiertas">
                            <img
                              src={
                                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/6_DESPIERTAS/despiertas-05.png?raw=true"
                              }
                              alt="mag-img"
                              className="mag-ver-img despiertas-prev"
                            />
                            <div className="mag-ver-text">
                              <h3 className="mag-h3">DESPIERTAS</h3>
                              <h2 className="mag-h2">
                                ESO QUE LLAMAN AMOR ES TRABAJO
                                <br /> NO PAGADO
                              </h2>
                              <h4 className="mag-h4">
                                POR @Vic_tonha_ Y CAMILA CASTILLO GUERRERO
                              </h4>
                            </div>
                          </Link>
                        </Col>
                      </Row>
                      <Row className="mag-scroll-row-backcover">
                        <Link to="/magazine/historicas">
                          <Col span={24} className="mag-backcover-col">
                            <img
                              src={
                                "https://github.com/puliv/AhoraNosotras/blob/master/src/assets/REVISTA_AHORA_NOSOTRAS/7_CONTRAPORTADA/ahoranosotras.png?raw=true"
                              }
                              alt="backcover"
                              className="mag-backcover-img"
                            />
                            <span className="mag-h2-historicas">
                              HISTÓRICAS
                            </span>
                          </Col>
                        </Link>
                      </Row>
                    </div>
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
