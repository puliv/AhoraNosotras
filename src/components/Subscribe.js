import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import firebase from 'firebase';


const { TextArea } = Input;

export class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subscribeItem: [{
        subsName: "",
        subsEmail: "",
        subsCity: "",
        subsComment: "",
        alert: false,
        alertData: {}
      }]
    }
  }

  handleOnChange = (e) => {
    switch (e.target.id) {
      case "name":
        this.setState({
          subsName: e.target.value
        })
        break

      case "email":
        this.setState({
          subsEmail: e.target.value
        })
        break

      case "city":
        this.setState({
          subsCity: e.target.value
        })
        break

      case "comment":
        this.setState({
          subsComment: e.target.value
        })
        break

      default:
        break
    }
  }

  handleClickSend = (e) => {
    const { subsName, subsEmail, subsCity, subsComment } = this.state
    e.preventDefault();

    const subscribeItems = {
      name: subsName,
      email: subsEmail,
      city: subsCity,
      comment: subsComment
    }

    if (subsName && subsEmail && subsCity && subsComment) {
      firebase.database().ref('subscriptions').push(subscribeItems).then(() => {
        this.setState({
          subsName: "",
          subsEmail: "",
          subsCity: "",
          subsComment: "",
          alert: true,
          alertData: {
            type: "success",
            message: "Tu solicitud fue procesada con éxito."
          }
        })
      }).catch(() => {
        this.setState({
          alert: true,
          alertData: {
            type: "fail",
            message: "No se pudo procesar tu solicitud, intenta nuvamente."
          }
        })
      })
    } else {
      this.setState({
        alert: true,
        alertData: {
          type: "fail",
          message: "Debes completar todos los items del formulario."
        }
      })
    }
  }



  render() {
    const { subsName, subsEmail, subsCity, subsComment, alert, alertData } = this.state

    return (
      <div className="subscribe">
        <div className="subscribe-div-alert">
          <span className="subscribe-span">{alertData.message}</span>
        </div>
        <div className="subscribe-div">
          <h2 className="subscribe-h2">Súmate!</h2>
          <span className="subscribe-span">Suscríbete a nuestro newsletter</span>
        </div>
        <Form className="subscribe-form" required={true}>
          <div>
            <h3 className="subscribe-h3">Nombre y Apellido</h3>
            <Input onChange={this.handleOnChange} id="name" value={subsName} />
          </div>
          <div>
            <h3 className="subscribe-h3">Correo</h3>
            <Input onChange={this.handleOnChange} id="email" value={subsEmail} />
          </div>
          <div>
            <h3 className="subscribe-h3">Ciudad/Comuna</h3>
            <Input onChange={this.handleOnChange} id="city" value={subsCity} />
          </div>
          <div>
            <h3 className="subscribe-h3">Comentarios</h3>
            <TextArea onChange={this.handleOnChange} id="comment" value={subsComment} />
          </div>
          <div className="btn-div">
            {alert && <span className="subscribe-span item">Debes rellenar todos los items</span>}
            <Button
              className="subscribe-btn"
              type="primary"
              onClick={this.handleClickSend}>Enviar</Button>
          </div>
        </Form>
      </div>
    )
  }
}

export default Subscribe
