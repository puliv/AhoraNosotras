import React, { Component } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { InstagramOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons'
import anlogo from '../assets/anlogo.png'


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
            <FacebookOutlined className="header-icon" />
          </a>
          <a href="https://www.instagram.com/AhoraNosotrasRD">
            <InstagramOutlined className="header-icon" />
          </a>
          <a href="https://twitter.com/AhoraNosotrasRD">
            <TwitterOutlined className="header-icon" />
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
          closable={true}
          onClose={() => { this.setState({ openMenu: false }) }}
          placement={"right"}>
          <h3>Nosotras</h3>
          <h3>Revista</h3>
          <h3>Aprendemos</h3>
          <h3>Sumate a la comunidad</h3>
        </Drawer>
      </div>
    )
  }
}

export default Header
