import React, { Component } from "react";
import back from "../../assets/icons/arrow-left.svg";
import { Link } from "react-router-dom";

export class GoBack extends Component {
  render() {
    return (
      <div className="go-back-top">
        <Link to="/magazine">
          <img src={back} alt="back" className="go-back-icon" />
        </Link>
      </div>
    );
  }
}

export default GoBack;
