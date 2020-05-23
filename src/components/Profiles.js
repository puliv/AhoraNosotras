import React, { Component } from 'react'
import protagonistas from '../protagonistas.json'
import flower_1 from '../assets/details/flower_1.svg'

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
              <div className="profile-img-div">
                <img
                  className="profile-img-photo"
                  src={x.img}
                  alt="Protagonistas"
                />
              </div>
              <div className="profile-text-div">
                <h3 className="profile-h3">{x.name}</h3>
                <span className="profile-span-x">{x.from}</span>
                <span className="profile-span-x roll">{x.rollover}</span>
              </div>
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
        <div className="profile-main">
          <img
            src={flower_1}
            alt="flores"
            className="profile-img-flower left"
          />
          <div className="profile-center">
            <div className="profile-header">
              <h2 className="profile-h2">PROTAGONISTAS</h2>
              <span className="profile-span">Desde nuestros espacios y territorios, cada una de<br />nosotras trabaja para cambiar la historia.</span>
            </div>
            <div className="profile-body">
              {protag}
            </div>
          </div>
          <img
            src={flower_1}
            alt="flores"
            className="profile-img-flower right"
          />
        </div>
      </div>
    )
  }
}

export default Profiles
