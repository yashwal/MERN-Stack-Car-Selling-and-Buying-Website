import React, { Component } from "react";
import "./login.css";
import axios from "axios";
import { Link } from "react-router-dom";
import CreateAcc from "./CreateAcc";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  flag = false;
  flags = "";
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios(
      "http://localhost:5000/api/users/login?email=" +
        this.state.email +
        "&password=" +
        this.state.password
    ).then((result) => {
      if (result.data.msg === "logged in") {
        this.props.isLogin(true);
      } else if (result.data.flag === "Wrong password") {
        alert(result.data.flag);
      } else {
        alert(result.data.emailnotfound);
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
            <br></br>
            <br></br>
            <input
              className="password"
              type="password"
              name="password"
              placeholder="Enter Your Password...."
              required
              onChange={this.handleChange}
            />
            <br></br>
            <br></br>

            <button className="button" onSubmit={this.handleSubmit}>
              LOG IN
            </button>
            <br></br>
            <br></br>
            
            <Link className="a" to="/Acc">
              Create an account
            </Link>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
