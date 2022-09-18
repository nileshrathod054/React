import React, { Component } from "react";
import axios from "axios";

export class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userid: "",
      title: "",
      body: "",
    };
  }
  ChangeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state.userid);

    axios
      .get("https://jsonplaceholder.typicode.com/posts", this.state)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    const { userid, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div>
            <label for="userid">User Id: </label>
            <input
              placeholder="User Id"
              type="text"
              name="userid"
              value={userid}
              onChange={this.ChangeHandler}
            />
          </div>
          <br />
          <div>
            <label for="title">Title: </label>
            <input
              placeholder="Title"
              type="text"
              name="title"
              value={title}
              onChange={this.ChangeHandler}
            />
          </div>
          <br />
          <div>
            <label for="Feedback">Body: </label>
            <input
              placeholder="Body"
              type="text"
              name="body"
              value={body}
              onChange={this.ChangeHandler}
            />
          </div>
        </form>
        <br />

        <button type="submit" onClick={this.submit} class="button">
          Submit
        </button>
      </div>
    );
  }
}
export default PostForm;
