import React from "react";
import "./login.css";
import axios from "axios";

class CreateAcc extends React.Component {
  state = {
    email: "",
    name: "",
    password: "",
    password2: "",
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/users/register", this.state)
      .then((result) => {
        if (result.status === 200) {
          alert("Succesfull");
        } else {
          alert("Email already exists/ Wrong Credentials");
        }
      });
  };

  render() {
    return (
      <div className="login">
        <div>
          <logo />
        </div>

        <div className="loginBox">
          <img className="logo" src="https://pbs.twimg.com/media/DVwbsYbXcAAQF01.jpg" alt="car logo"></img>
          <form onSubmit={this.handleSubmit}>
            <input
              className="email"
              type="text"
              name="email"
              placeholder="Enter Your Email..."
              required
              onChange={this.handleChange}
            />
            <input
              className="email"
              type="text"
              name="name"
              placeholder="User Name"
              required
              onChange={this.handleChange}
            />
            <br></br>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Enter Password...."
              required
              onChange={this.handleChange}
            />
            <input
              className="password"
              type="password"
              name="password2"
              placeholder="Confirm Password"
              required
              onChange={this.handleChange}
            />

            <br></br>
            <br></br>

            <button className="button">Create New Account</button>
            <br></br>
            <br></br>
          </form>
        </div>
      </div>
    );
  }
}

export default CreateAcc;

