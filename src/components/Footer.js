import React, { Component } from 'react'
import anlogo from '../assets/logos/ahora-nosotras.png'
import logo_ug from '../assets/logos/logo_ug.png'
import rdlogo from '../assets/logos/revolucion-democratica.png'
import { InstagramOutlined, FacebookFilled, TwitterOutlined, LinkedinFilled } from '@ant-design/icons'


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
            <a href="https://www.facebook.com/AhoraNosotrasRD/" target="_blank" rel="noopener noreferrer">
              <FacebookFilled className="footer-icon social" style={{ color: '#D969D9' }} />
            </a>
            <a href="https://twitter.com/AhoraNosotrasRD" target="_blank" rel="noopener noreferrer">
              <TwitterOutlined className="footer-icon social" style={{ color: '#D969D9' }} />
            </a>
            <a href="https://www.instagram.com/AhoraNosotrasRD" target="_blank" rel="noopener noreferrer">
              <InstagramOutlined className="footer-icon social" style={{ color: '#D969D9' }} />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-img-div-bottom">
            <img
              src={logo_ug}
              alt="Unidad de Genero"
              className="footer-img-falogo"
            />
            <img
              src={rdlogo}
              alt="Revolución Democrática"
              className="footer-img-rdlogo"
            />
          </div>
          <div className="footer-span-div-bottom">
            <span className="footer-span">Diseño: Francisca Mora&nbsp;
            <a href="https://www.linkedin.com/in/franmora/">
                <LinkedinFilled className="footer-icon" />
              </a>
            </span>
            <span className="footer-span">Desarrollo: Paulina Vera&nbsp;
            <a href="https://www.linkedin.com/in/pulie/">
                <LinkedinFilled className="footer-icon" />
              </a>
            </span>
          </div>
        </div>
      </div>
    )
  }
}

export default Footer

