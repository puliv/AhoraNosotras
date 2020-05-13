import React, { Component } from 'react'
import { Drawer } from 'antd'
import { MenuOutlined } from '@ant-design/icons'


export class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      openMenu: null
    }
  }


  render() {
    return (
      <div className="header">
        <MenuOutlined />
        <Drawer
          title="Menú"
          placement={"right"}>

        </Drawer>
      </div>
    )
  }
}

export default Header
