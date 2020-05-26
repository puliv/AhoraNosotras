import React, { Component } from 'react'
import { Row, Col } from 'antd'
import portada from '../assets/REVISTA_AHORA_NOSOTRAS/1_PORTADA/PORTADA_DEFINITIVA.png'

export class Magazine extends Component {
  render() {
    return (
      <div className="magazine">
        <div className="mag-cover">
          <img
            src={portada}
            alt="cover"
            className="mag-img-cover"
          />
        </div>
        <div className="mag-inside">
          <div className="mag-scroll">
            <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
            </Row>
            <Row>
              <Col span={24}>col</Col>
            </Row>
          </div>
        </div>
      </div>
    )
  }
}

export default Magazine
