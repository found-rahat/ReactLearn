import React, { Component } from "react";

export class classClick extends Component {
  clickHandlar() {
    console.log("click the button");
  }
  render() {
    return (
      <div>
        <button onClick={this.clickHandlar}>click me</button>
      </div>
    );
  }
}

export default classClick;
