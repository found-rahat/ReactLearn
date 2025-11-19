import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return (
      <h1>
        Class {this.props.name}, hero {this.props.heroName}And Age is{" "}
        {this.props.Age}
      </h1>
    );
  }
}
export default Welcome;
