import React, { Component } from 'react'
import anlogo from '../assets/logos/ahora-nosotras.png'
import falogo from '../assets/logos/frente-amplio.png'
import rdlogo from '../assets/logos/revolucion-democratica.png'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined, LinkedinOutlined } from '@ant-design/icons'


export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="footer-top">
          <div className="footer-img-div-top">
            <img
              src={anlogo}
              alt="Ahora Nosotras"
              className="footer-img-anlogo"
            />
          </div>
          <div className="footer-social-media-div">
            <a href="https://www.instagram.com/AhoraNosotrasRD">
              <InstagramOutlined className="footer-icon social" />
            </a>
            <a href="https://www.facebook.com/AhoraNosotrasRD/">
              <FacebookOutlined className="footer-icon social" />
            </a>
            <a href="https://twitter.com/AhoraNosotrasRD">
              <TwitterOutlined className="footer-icon social" />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-img-div-bottom">
            <img
              src={rdlogo}
              alt="Revolución Democrática"
              className="footer-img-rdlogo"
            />
            <img
              src={falogo}
              alt="Frente Amplio"
              className="footer-img-falogo"
            />
          </div>
          <div className="footer-span-div-bottom">
            <span className="footer-span">Diseño: Francisca Mora&nbsp;
            <a href="https://www.linkedin.com/in/franmora/">
                <LinkedinOutlined className="footer-icon" />
              </a>
            </span>
            <span className="footer-span">Desarrollo: Paulina Vera&nbsp;
            <a href="https://www.linkedin.com/in/pulie/">
                <LinkedinOutlined className="footer-icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

