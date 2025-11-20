import React, { Component } from "react";

class Welcome extends Component {
  render() {
    console.log(this.props);
    const { name, heroName, Age } = this.props;
    return (
      <h1>
        Class {name}, hero {heroName}And Age is {Age}
      </h1>
    );
  }
}
export default Welcome;
