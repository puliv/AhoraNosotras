import React, { Component } from 'react'
import anlogo from '../assets/anlogo.png'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-img-div">
          <img
            src={anlogo}
            alt="Ahora Nosotras"
            className="footer-img-anlogo"
          />
        </div>
        <div className="footer-social-media-div">
          <a href="https://www.instagram.com/AhoraNosotrasRD">
            <InstagramOutlined className="footer-icon" />
          </a>
          <a href="https://www.facebook.com/AhoraNosotrasRD/">
            <FacebookOutlined className="footer-icon" />
          </a>
          <a href="https://twitter.com/AhoraNosotrasRD">
            <TwitterOutlined className="footer-icon" />
          </a>
        </div>
      </div>
    )
  }
}

export default Footer

