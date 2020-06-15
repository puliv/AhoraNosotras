import React, { Component } from "react";
import { Link } from "react-router-dom";

export class GoBack extends Component {
  render() {
    return (
      <div className="go-back-top">
        <Link to="/magazine">
          <img
            src={
              "https://raw.githubusercontent.com/puliv/AhoraNosotras/b74bb64dd1442ae322a5bdfd18435db16dd51725/src/assets/icons/arrow-left.svg"
            }
            alt="back"
            className="go-back-icon"
          />
        </Link>
      </div>
    );
  }
}

export default GoBack;
