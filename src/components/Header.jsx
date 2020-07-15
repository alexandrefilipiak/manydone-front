import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a href="" className="navbar-brand">
          ManyDones
        </a>
        <div className="right menu">
          <GoogleAuth />
        </div>
      </nav>
    );
  }
}
