import React, { Component } from "react";

class BasicForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      skill: "",
    };
  }
  handlerUsernameChange = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handlerCommentChange = (event) => {
    this.setState({
      comment: event.target.value,
    });
  };
  handlerSkillChange = (event) => {
    this.setState({
      skill: event.target.value,
    });
  };
  handlerSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.skill}`);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handlerSubmit}>
          <div>
            <label>Username</label>
            <input
              type="text"
              value={this.state.username}
              onChange={this.handlerUsernameChange}
            />
          </div>
          <div>
            <label>comments</label>
            <textarea
              value={this.state.comment}
              onChange={this.handlerCommentChange}
            ></textarea>
          </div>
          <div>
            <label>Skill</label>
            <select value={this.state.skill} onChange={this.handlerSkillChange}>
              <option value="React">React</option>
              <option value="HTML ">HTML</option>
              <option value="CSS">CSS</option>
            </select>
          </div>
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}

export default BasicForm;
