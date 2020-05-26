import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h1>
        Welcome, please <Link to="/done-quick-view">click here</Link> to see
        your dones.
      </h1>
    );
  }
}
