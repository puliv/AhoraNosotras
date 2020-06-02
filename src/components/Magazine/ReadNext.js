import React, { Component } from 'react'
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'


export class ReadNext extends Component {
  constructor(props) {
    super(props)

    this.state = {
      previousSection: null,
      nextSection: null,
      currentSection: null
    }
  }

  componentDidMount() {
    const { section } = this.props

    if (section) {
      switch (section) {
        case "Editorial":
          this.setState({
            previousSection: null,
            nextSection: "Hablamos"
          })
          break;

        case "Hablamos":
          this.setState({
            previousSection: "Editorial",
            nextSection: "Protagonistas"
          })
          break

        case "Protagonistas":
          this.setState({
            previousSection: "Hablamos",
            nextSection: "Creamos"
          })
          break

        case "Creamos":
          this.setState({
            previousSection: "Protagonistas",
            nextSection: "Despiertas"
          })
          break

        case "Despiertas":
          this.setState({
            previousSection: "Creamos",
            nextSection: null
          })
          break

        default:
          break;
      }
    } else {
      this.setState({
        previousSection: null,
        nextSection: null
      })
    }
  }



  render() {
    const { previousSection, nextSection } = this.state

    return (
      <div className="read-next">
        <div className="read-next-div previous">
          {previousSection && <span className="read-next-span">
            Leer
          </span>}
          {previousSection && <span className="read-next-span">
            {previousSection}
          </span>}
          {previousSection && <span className="read-next-span-icon">
            <Link to={previousSection}>
              <ArrowLeftOutlined className="arrow-left" />
            </Link>
          </span>}
        </div>

        <div className="read-next-div next">
          {nextSection && <span className="read-next-span">
            Leer
          </span>}
          {nextSection && <span className="read-next-span">
            {nextSection}
          </span>}
          {nextSection && <span className="read-next-span-icon">
            <Link to={nextSection}>
              <ArrowRightOutlined className="arrow-right" />
            </Link>
          </span>}
        </div>
      </div>
    )
  }
}

export default ReadNext
