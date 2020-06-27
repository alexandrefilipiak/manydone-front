import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Welcome extends Component {
  render() {
    return (
      <h1>
        Welcome, please <Link to="/done-quick-view">click here</Link> to see
        your dones. And <Link to="/done-table-view">click here</Link> to edit
        your dones.
      </h1>
    );
  }
}
