import React, { Component } from 'react'
import { Form, Input, Button } from 'antd'
import firebase from 'firebase';


const { TextArea } = Input;

export class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subsName: "",
      subsEmail: "",
      subsCity: "",
      subsComment: "",
      alert: false,
      alertData: {}
    }
  }

  showAlert = (type, message) => {
    this.setState({
      alert: true,
      alertData: { type, message }
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000)
  }

  resetForm = () => {
    // this.refs.contactForm.reset();
    this.setState({
      subsName: "",
      subsEmail: "",
      subsCity: "",
      subsComment: ""
    })
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
        this.showAlert("success", "Tu solicitud fue procesada con éxito.")
        this.resetForm()
      }).catch(() => {
        this.showAlert("fail", "No se pudo procesar tu solicitud, intenta nuvamente.")
        this.resetForm()
      })
    } else {
      this.showAlert("warning", "Debes completar todos los items.")
    }
  }



  render() {
    const { subsName, subsEmail, subsCity, subsComment, alert, alertData } = this.state

    return (
      <React.Fragment>
        {alert && <div className={`subscribe-div-alert alert-${this.state.alertData.type}`}   >
          <span className="subscribe-span-alert">{alertData.message}</span>
        </div>}
        <div className="subscribe">
          <div className="subscribe-div">
            <h2 className="subscribe-h2">Súmate!</h2>
            <span className="subscribe-span">Suscríbete a nuestro newsletter</span>
          </div>
          <Form className="subscribe-form" required={true} ref="contactForm">
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
              <Button
                className="subscribe-btn"
                type="primary"
                onClick={this.handleClickSend}>Enviar</Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    )
  }
}

export default Subscribe
