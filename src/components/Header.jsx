import React, { Component } from "react";
import GoogleAuth from "./GoogleAuth";

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ui secondary pointing menu">
        ManyDone
        <div className="right menu">
          <GoogleAuth />
        </div>
      </div>
    );
  }
}
