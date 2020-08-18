import React, { Component } from "react";
import axios from "axios";
import { URI } from "./../common/constants";
import Button from "@material-ui/core/Button";
import "./../assets/styles/clicks.css";
export default class ClickMe extends Component {
  constructor(props) {
    super(props);
    this.state = {
      positionX: "50",
      positionY: "50"
    };
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  btnClicked = () => {
    let newX = this.getRandomInt(0, 90);
    let newY = this.getRandomInt(0, 90);
    this.setState({
      positionX: newX,
      positionY: newY
    });
    axios.post(URI);
  };
  render() {
    let btnStyle = {
      position: "relative",
      top: this.state.positionY + "%",
      left: this.state.positionX + "%"
    };
    return (
      <div
        style={{
          height: "100%"
        }}
      >
        <Button onClick={this.btnClicked} style={btnStyle} variant="contained">
          Catch Me
        </Button>
      </div>
    );
  }
}
