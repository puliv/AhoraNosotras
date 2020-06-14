import React, { Component } from "react";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

export class ReadNext extends Component {
  constructor(props) {
    super(props);

    this.state = {
      previousSection: null,
      nextSection: null,
      currentSection: null,
    };
  }

  componentDidMount() {
    const { section } = this.props;

    if (section) {
      switch (section) {
        case "editorial":
          this.setState({
            previousSection: null,
            nextSection: "hablamos",
          });
          break;

        case "hablamos":
          this.setState({
            previousSection: "editorial",
            nextSection: "opinamos",
          });
          break;

        case "opinamos":
          this.setState({
            previousSection: "hablamos",
            nextSection: "protagonistas",
          });
          break;

        case "protagonistas":
          this.setState({
            previousSection: "opinamos",
            nextSection: "creamos",
          });
          break;

        case "creamos":
          this.setState({
            previousSection: "protagonistas",
            nextSection: "despiertas",
          });
          break;

        case "despiertas":
          this.setState({
            previousSection: "creamos",
            nextSection: "historicas",
          });
          break;

        case "historicas":
          this.setState({
            previousSection: "despiertas",
            nextSection: null,
          });
          break;

        default:
          break;
      }
    } else {
      this.setState({
        previousSection: null,
        nextSection: null,
      });
    }
  }

  render() {
    const { previousSection, nextSection } = this.state;

    return (
      <div className="read-next">
        <div className="read-next-div previous">
          {previousSection && <span className="read-next-span">Leer</span>}
          {previousSection && (
            <span className="read-next-span">{previousSection}</span>
          )}
          {previousSection && (
            <span className="read-next-span-icon">
              <Link to={`/magazine/${previousSection}`}>
                <ArrowLeftOutlined className="arrow-left" />
              </Link>
            </span>
          )}
        </div>

        <div className="read-next-div next">
          {nextSection && <span className="read-next-span">Leer</span>}
          {nextSection && <span className="read-next-span">{nextSection}</span>}
          {nextSection && (
            <span className="read-next-span-icon">
              <Link to={`/magazine/${nextSection}`}>
                <ArrowRightOutlined className="arrow-right" />
              </Link>
            </span>
          )}
        </div>
      </div>
    );
  }
}

export default ReadNext;
