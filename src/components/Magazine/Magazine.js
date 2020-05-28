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
import { DownOutlined } from '@ant-design/icons'



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
                    <img
                      src={contraportada}
                      alt="backcover"
                      className="mag-backcover-img"
                    />
                    <span>HISTÓRICAS <DownOutlined /></span>
                  </Col>
                </Row>
              </div>

              <div className="mag-scroll-historicas">
                <Row className="mag-hist-row">
                  <Col span={24} className="mag-hist-col">
                    <span className="mag-hist-span">
                      En tiempos de pandemia, las mujeres se han convertido en la primera línea en la defensa de la salud y la vida. Sin embargo, este protagonismo de doctoras, enfermeras y asistentes no es azaroso, sino que se lo debemos a mujeres pioneras que se atrevieron a dar un paso al frente y ser parte de disciplinas del conocimiento históricamente masculinizadas como las ciencias.
                    </span>
                    <span className="mag-hist-span">
                      Recordemos que, en el siglo XIX la mujer chilena no podía acceder a una educación profesional pues ésta se encontraba limitada por una ley que impedía a las mujeres ingresar a la universidad. Finalmente, en 1877, y después de una larga batalla de las mujeres de la época, se permite a las mujeres poder formarse profesionalmente. Es por ello que, en esta primera versión de históricas, queremos reconocer a Eloísa Díaz, la primera mujer estudiante de medicina de la Universidad de Chile y la primera mujer médico de Chile y América del Sur, quien abrió las puertas para muchas compañeras pudiesen ingresaran a estos campos. Décadas más tarde, podemos decir que el legado de Eloísa sigue vigente gracias a otro liderazgo que ha destacado por su rol en esta crisis.
                    </span>
                    <span className="mag-hist-span">
                      Hablamos de la Izkia Siches, ariqueña, médica cirujana chilena de la Universidad de Chile, primera presidenta del Colegio Médico de Chile y la más joven en ocupar un cargo que por más de 70 años fue sólo ocupado por hombres. Izkia no sólo ha destacado por ser pionera en este puesto directivo, sino porque lo ha ejercido tenazmente a pesar de la oposición en el propio sector de salud. Su figura ha sido clave para mostrar a la ciudadanía y al gobierno, los caminos más seguros y eficaces en la presente crisis sanitaria.
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
