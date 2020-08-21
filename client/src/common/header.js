import React, { Component } from "react";
import "./../assets/styles/header.css";
import { withRouter } from "react-router-dom";

class header extends Component {
  render() {
    return (
      <header className="app-header">
        <img
          src={require("./../assets/images/1.png")}
          onClick={() => this.props.history.push("/")}
        />
      </header>
    );
  }
}

export default withRouter(header);
