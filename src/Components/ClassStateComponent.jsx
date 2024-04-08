import React, { Component } from "react";
import BellA from "./BellA.webp";
import BellB from "./BellB.png";

export default class StateComponent extends Component {
  styles = {
    fontStyle: "bold",
    color: "teal",
    textAlign: "center",
  };
  constructor(props) {
    super(props);

    this.state = {
      greetings: "Welcome",
      message: "Subscribe to Easylearning",
      imageUrl: BellA,
    };
  }
  buttonChange = () => {
    this.setState({
      message: "Hit the bell icon to never miss an update",
      sub: "Subscribed",
    });
  };
  imageChange = () => {
    this.setState({
      imageUrl: BellB,
      message: "Thank You for Subscribing!! Happy Learning",
    });
  };
  render() {
    return (
      <div>
        <h1 style={this.styles}>{this.state.greetings}</h1>
        <h3 style={this.styles}>{this.state.message}</h3>
        <button style={{ marginLeft: 730 }} onClick={this.buttonChange}>
          Subsribe
        </button>
        <p />
        <img
          style={{ width: "30px", height: "30px", marginLeft: "750px" }}
          src={this.state.imageUrl}
          onClick={this.imageChange}
          alt=""
        />
      </div>
    );
  }
}
