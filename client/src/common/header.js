import React, { Component } from "react";
import "./../assets/styles/header.css";
export default class header extends Component {
  render() {
    return (
      <header className="app-header">
        <img src={require("./../assets/images/1.png")} />
      </header>
    );
  }
}
