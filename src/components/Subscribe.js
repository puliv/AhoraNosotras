import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button } from 'antd'
import { getSubscribeData } from '../actions/index'

const { TextArea } = Input;

export class Subscribe extends Component {
  constructor(props) {
    super(props)

    this.state = {
      subscribeItem: [{
        subsName: "",
        subsEmail: "",
        subsCity: "",
        subsComment: ""
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


  // handleSubcribeItems = () => {
  //   const { subsName, subsEmail, subsCity, subsComment } = this.state
  //   this.props.getSubscribeItems(subsName, subsEmail, subsCity, subsComment)
  // }



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
            <Input onChange={this.handleOnChange} id="name" />
          </div>
          <div>
            <h3 className="subscribe-h3">Correo</h3>
            <Input onChange={this.handleOnChange} id="email" />
          </div>
          <div>
            <h3 className="subscribe-h3">Comuna/Ciudad</h3>
            <Input onChange={this.handleOnChange} id="city" />
          </div>
          <div>
            <h3 className="subscribe-h3">Comentarios</h3>
            <TextArea onChange={this.handleOnChange} id="comment" />
          </div>
          <Button
            className="subscribe-btn"
            type="primary"
            onClick={this.handleSubcribeItems}>Enviar</Button>
        </Form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ...state
  };
}

const mapActionsToProps = (dispatch) => {
  return {
    getSubscribeItems: getSubscribeData(dispatch)
  }
}

export default connect(mapStateToProps, mapActionsToProps)(Subscribe)
