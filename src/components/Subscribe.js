import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'

const { TextArea } = Input;

export class Subscribe extends Component {
  render() {
    return (
      <div className="subscribe">
        <div className="subscribe-div">
          <h2 className="subscribe-h2">Súmate!</h2>
          <span className="subscribe-span">Suscríbete a nuestro newsletter</span>
        </div>
        <Form className="subscribe-form" required={true}>
          <div>
            <h3 className="subscribe-h3">Nombre y apellido</h3>
            <Input />
          </div>
          <div>
            <h3 className="subscribe-h3">Correo</h3>
            <Input />
          </div>
          <div>
            <h3 className="subscribe-h3">Comuna/Ciudad</h3>
            <Input />
          </div>
          <div>
            <h3 className="subscribe-h3">Comentarios</h3>
            <TextArea />
          </div>
          <Button className="subscribe-btn" type="primary">Enviar</Button>
        </Form>
      </div>
    )
  }
}

export default Subscribe
