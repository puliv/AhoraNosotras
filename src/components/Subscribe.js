import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import firebase from "firebase/app";
import "firebase/database";
import classNames from "classnames";
import { animateScroll as scroll } from 'react-scroll'

const { TextArea } = Input;

export class Subscribe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      subsName: "",
      subsEmail: "",
      subsCity: "",
      subsComment: "",
      alert: false,
      alertData: {},
    };
  }

  componentDidMount() {
    scroll.scrollToTop()
  }

  showAlert = (type, message) => {
    this.setState({
      alert: true,
      alertData: { type, message },
    });
    setTimeout(() => {
      this.setState({ alert: false });
    }, 4000);
  };

  resetForm = () => {
    this.setState({
      subsName: "",
      subsEmail: "",
      subsCity: "",
      subsComment: "",
    });
  };

  handleOnChange = (e) => {
    switch (e.target.id) {
      case "name":
        this.setState({
          subsName: e.target.value,
        });
        break;

      case "email":
        this.setState({
          subsEmail: e.target.value,
        });
        break;

      case "city":
        this.setState({
          subsCity: e.target.value,
        });
        break;

      case "comment":
        this.setState({
          subsComment: e.target.value,
        });
        break;

      default:
        break;
    }
  };

  handleClickSend = (e) => {
    const { subsName, subsEmail, subsCity, subsComment } = this.state;
    e.preventDefault();

    const subscribeItems = {
      name: subsName,
      email: subsEmail,
      city: subsCity,
      comment: subsComment,
    };

    if (subsName && subsEmail && subsCity && subsComment) {
      firebase
        .database()
        .ref("subscriptions")
        .push(subscribeItems)
        .then(() => {
          this.showAlert("success", "Tu solicitud fue procesada con éxito.");
          this.resetForm();
        })
        .catch(() => {
          this.showAlert(
            "fail",
            "No se pudo procesar tu solicitud, intenta nuvamente."
          );
          this.resetForm();
        });
    } else {
      this.showAlert("warning", "Debes completar todos los items.");
    }
  };

  render() {
    const {
      subsName,
      subsEmail,
      subsCity,
      subsComment,
      alert,
      alertData,
    } = this.state;
    const { renderFromHome } = this.props

    const alertStyle = classNames(`subscribe-div-alert alert-${this.state.alertData.type}`, { "subscribe-div-alert-active": alert, })
    const subscribeStyle = classNames(`subscribe`, { "subscribe-active": renderFromHome })


    return (
      <React.Fragment>
        <div className={subscribeStyle}>
          {alert && (
            <div className={alertStyle}>
              <span className="subscribe-span-alert">{alertData.message}</span>
            </div>
          )}
          <div className="subscribe-div">
            <h2 className="subscribe-h2">SÚMATE!</h2>
            <span className="subscribe-span">
              Únete a la comunidad y entérate de todas las novedades de Ahora
              Nosotras.
            </span>
          </div>

          <Form className="subscribe-form">
            <Form.Item>
              <h3 className="subscribe-h3">Nombre y Apellido</h3>
              <Input
                onChange={this.handleOnChange}
                id="name"
                value={subsName}
              />
            </Form.Item>
            <Form.Item>
              <h3 className="subscribe-h3">Correo</h3>
              <Input
                onChange={this.handleOnChange}
                id="email"
                value={subsEmail}
              />
            </Form.Item>
            <Form.Item>
              <h3 className="subscribe-h3">Ciudad/Comuna</h3>
              <Input
                onChange={this.handleOnChange}
                id="city"
                value={subsCity}
              />
            </Form.Item>
            <Form.Item>
              <h3 className="subscribe-h3">Comentarios</h3>
              <TextArea
                onChange={this.handleOnChange}
                placeholder="Escribe algo..."
                id="comment"
                value={subsComment}
              />
            </Form.Item>
            <div className="btn-div">
              <Button
                className="subscribe-btn"
                type="primary"
                onClick={this.handleClickSend}
              >
                Enviar
              </Button>
            </div>
          </Form>
        </div>
      </React.Fragment>
    );
  }
}

export default Subscribe;
