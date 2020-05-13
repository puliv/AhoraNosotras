import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

const { TextArea } = Input;

export class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-div">
          <h2 className="subscribe-h1">Súmate!</h2>
          <span className="subscribe-span">Suscríbete a nuestro newsletter</span>
        </div>
        <Form className="subscribe-form">
          <div>
            <h3 className="subscribe-h3">Nombre</h3>
            <Input />
          </div>
          <div>
            <h3 className="subscribe-h3">Correo</h3>
            <Input />
          </div>
          <div>
            <h3 className="subscribe-h3">Comentarios</h3>
            <TextArea />
          </div>
          <Button className="subscribe-btn">Enviar</Button>
        </Form>
      </div>
    )
  }
}

export default Subscribe
