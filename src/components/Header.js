import React, { Component } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'
import { InstagramOutlined, FacebookFilled, TwitterOutlined } from '@ant-design/icons'
import anlogo from '../assets/logos/ahora-nosotras.png'
import closeIcon from '../assets/icons/close-icon.svg'
import { Link } from 'react-router-dom'
import { animateScroll as scroll, scroller } from 'react-scroll';

const scrollToSection = {
  duration: 600,
  delay: 100,
  smooth: true, // linear “easeInQuint” “easeOutCubic” 
  offset: -10
}

export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openMenu: false
    }
  }

  handleOnClickScroll = (section) => {
    this.setState({
      openMenu: false
    })
    scroller.scrollTo(section, scrollToSection)
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
          <Link to="/">
            <img
              src={anlogo}
              alt="Ahora Nosotras"
              className="header-img-anlogo"
              onClick={() => scroll.scrollToTop()}
            />
          </Link>
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
            <ul className="drawer-ul">
              <li onClick={() => this.handleOnClickScroll("AboutUs")}>
                <a href="#AboutUs">
                  <span className="drawer-h3">NOSOTRAS</span>
                </a>
              </li>
              <li onClick={() => this.handleOnClickScroll("Magazine")}>
                <a href="#Magazine">
                  <span className="drawer-h3">REVISTA</span>
                </a>
              </li>
              <li onClick={() => this.handleOnClickScroll("Learning")}>
                <a href="#Learning">
                  <span className="drawer-h3">APRENDEMOS</span>
                </a>
              </li>
              <li onClick={() => this.handleOnClickScroll("Profiles")}>
                <a href="#Profiles">
                  <span className="drawer-h3">PROTAGONISTAS</span>
                </a>
              </li>
              <li onClick={() => this.handleOnClickScroll("Subscribe")}>
                <a href="#Subscribe">
                  <span className="drawer-h3">NEWSLETTER</span>
                </a>
              </li>
            </ul>
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
        </Drawer >
      </div >
    )
  }
}

export default Header
