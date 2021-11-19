import React from "react";
import "./Login.css";
import login from "../../image/Login.jpeg";
import logo from "../../image/logo.png";
import { Button, Checkbox, Form, Select } from "semantic-ui-react";
function Login() {
  return (
    <div className="login">
      <img className="login_img" src={login} />
      <img className="logo_img" src={logo} />
      <div className="main_login">
        <div className="header">Sign in to your account</div>
        <div className="creat_new">Or create a new account</div>
        <Form className="form">
          <Form.Field>
            <label>Email address</label>
            <input placeholder="Email address" />
          </Form.Field>
          <Form.Field>
            <label>Password</label>

            <input placeholder="Password" type="password" />
          </Form.Field>
          <div>
            <a>Forgot your password?</a>
          </div>
          <button
            className="ui fluid button"
            style={{ color: "black", margin: "10px 2px" }}
          >
            Login
          </button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
