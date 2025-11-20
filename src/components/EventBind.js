import React, { Component } from "react";

class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      massage: "hello",
    };
    // this.clickHandler = this.clickHandler.bind(this); //3
  }

  //   clickHandler() {
  //     this.setState({
  //       massage: "Good Bye!",
  //     });
  //     console.log(this);
  //   } //123

  clickHandler = () => {
    this.setState({
      massage: "Good Bye!",
    });
    console.log(this);
  }; //4

  render() {
    return (
      <div>
        <div>{this.state.massage}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
        {/* <button onClick={() => this.clickHandler()}>click</button> */}
        {/* <button onClick={this.clickHandler}>click</button> 3*/}
        <button onClick={this.clickHandler}>click</button> {/* 4*/}
      </div>
    );
  }
}

export default EventBind;
