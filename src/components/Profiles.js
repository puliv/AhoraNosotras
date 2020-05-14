import React, { Component } from 'react'
import protagonistas from '../protagonistas.json'

export class Profiles extends Component {
  constructor(props) {
    super(props)

    this.state = {
      protagonistas,
      protag: " "
    }
  }

  componentDidMount() {
    const { protagonistas } = this.state

    if (protagonistas) {
      this.setState({
        protag: protagonistas.map((x) => {
          return (
            <div className="profile-div" key={x.id}>
              <img
                className="profile-img-x"
                src={x.img}
                alt="img"
              />
              <h3 className="profile-h3">{x.name}</h3>
              <span className="profile-span-x">{x.from}</span>
              <span className="profile-span-x roll">{x.rollover}</span>
            </div>
          )
        })
      })
    }
  }

  render() {
    const { protag } = this.state
    return (
      <div className="profile">
        <div className="profile-header">
          <h2 className="profile-h2">PROTAGONISTAS</h2>
          <span className="profile-span">Desde nuestros espacios y territorios, cada una de<br />nosotras trabaja para cambiar la historia.</span>
        </div>
        <div className="profile-body">
          {protag}
        </div>
        <div className="profile-img"></div>
      </div>
    )
  }
}

export default Profiles
