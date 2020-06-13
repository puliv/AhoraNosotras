import React, { Component } from "react";
import ReadNext from "./ReadNext";
import GoBack from "./GoBack";

export class Historicas extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="historicas">
        <GoBack />

        <ReadNext section={"historicas"} />
      </div>
    );
  }
}

export default Historicas;
