import React, { Component } from "react";
import ChildComponents from "./ChildComponents";

export class ParentComponents extends Component {
  constructor(props) {
    super(props);

    this.state = {
      massage: "Welcome",
    };
    this.ParentComponentsHandler = this.ParentComponentsHandler.bind(this);
  }
  ParentComponentsHandler(childName) {
    this.setState({
      massage: `Done! ${childName}`,
    });
  }

  render() {
    return (
      <div>
        <h1>{this.state.massage}</h1>
        <ChildComponents clickHandler={this.ParentComponentsHandler} />
      </div>
    );
  }
}

export default ParentComponents;
