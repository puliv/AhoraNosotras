import React, { Component } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { InstagramOutlined, FacebookFilled, TwitterOutlined } from '@ant-design/icons'
import anlogo from '../assets/logos/ahora-nosotras.png'
import closeIcon from '../assets/close-icon.svg'


export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openMenu: false
    }
  }


  render() {
    const { openMenu } = this.state
    return (
      <div className="header">
        <div className="header-social-media-div">
          <a href="https://www.facebook.com/AhoraNosotrasRD/">
            <FacebookFilled className="header-icon" />
          </a>
          <a href="https://twitter.com/AhoraNosotrasRD">
            <TwitterOutlined className="header-icon" />
          </a>
          <a href="https://www.instagram.com/AhoraNosotrasRD">
            <InstagramOutlined className="header-icon" />
          </a>
        </div>
        <div className="header-img-div">
          <img
            src={anlogo}
            alt="Ahora Nosotras"
            className="header-img-anlogo"
          />
        </div>
        <div className="header-menu-div">
          <MenuOutlined className="header-icon menu" onClick={() => { this.setState({ openMenu: true }) }} />
        </div>
        <Drawer
          visible={openMenu}
          closable={false}
          width={300}
          onClose={() => { this.setState({ openMenu: false }) }}
          drawerStyle={{ backgroundColor: "#000" }}
          placement={"right"}>
          <div className="drawer-top">
            <img
              src={closeIcon}
              alt="Cerrar"
              className="drawer-close-icon"
              onClick={() => { this.setState({ openMenu: false }) }}
            />
          </div>
          <div className="drawer-main">
            <h3 className="boombiddy">NOSOTRAS</h3>
            <h3 className="drawer-h3">REVISTA</h3>
            <h3 className="drawer-h3">APRENDEMOS</h3>
            <h3 className="drawer-h3">PROTAGONISTAS</h3>
            <h3 className="drawer-h3 contact">CONTACTO</h3>
            <h3 className="drawer-h3">NEWSLETTER</h3>
          </div>
          <div className="drawer-bottom">
            <a href="https://www.facebook.com/AhoraNosotrasRD/">
              <FacebookFilled className="drawer-icon social" />
            </a>
            <a href="https://twitter.com/AhoraNosotrasRD">
              <TwitterOutlined className="drawer-icon social" />
            </a>
            <a href="https://www.instagram.com/AhoraNosotrasRD">
              <InstagramOutlined className="drawer-icon social" />
            </a>
          </div>
        </Drawer>
      </div>
    )
  }
}

export default Header
