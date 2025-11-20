import React, { Component } from "react";

class state extends Component {
  constructor() {
    super();
    this.state = {
      massage: "Welcome Visitor",
      button: "Subscribe",
    };
  }
  changeMasage() {
    if (this.state.button === "Subscribe") {
      this.setState({
        massage: "thank You for Subscribing ....",
        button: "unsubscribe",
      });
    } else {
      this.setState({
        massage: "Welcome Visitor",
        button: "Subscribe",
      });
    }
  }
  render() {
    return (
      <>
        <h1>{this.state.massage}</h1>
        <button onClick={() => this.changeMasage()}>{this.state.button}</button>
      </>
    );
  }
}

export default state;
