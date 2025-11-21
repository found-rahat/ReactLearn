import React, { Component } from "react";

export class ConditionalRendering extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogiingIn: true,
    };
  }

  render() {
    // short circuit Operator 4 number

    return this.state.isLogiingIn && <div>Welcome Rahat Ahmed</div>;

    // Ternary conditional operator 3 number

    // return this.state.isLogiingIn ? (
    //   <div>welcome Rahat ahmed</div>
    // ) : (
    //   <div>welcome Guest</div>
    // );

    // Element variable 2 number

    // let massage;
    // if (this.state.isLogiingIn) {
    //   massage = "Rahat Ahmed";
    // } else {
    //   massage = "Guest";
    // }
    // return (
    //   <div>
    //     <h1>welcome {`${massage}`}</h1>
    //   </div>
    // );

    //if/else condition 1 number

    // if (this.state.isLogiingIn) {
    //   return (
    //     <div>
    //       <h1>Welcom Rahat Ahmed</h1>
    //     </div>
    //   );
    // } else {
    //   return (
    //     <div>
    //       <h1>Welcom Guest</h1>
    //     </div>
    //   );
    // }
  }
}

export default ConditionalRendering;
