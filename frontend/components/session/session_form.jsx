import React from "react";
import { withRouter } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoLogin = this.handleDemoLogin.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.currentTarget.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
  }

  handleDemoLogin(e) {
    e.preventDefault();
    this.props.demoLogin();
  }

  // showErrors() {
  //   return (
  //     <ul>
  //       {this.props.errors.map((error, i) => (
  //         <li key={i}>{error}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let signInErr = "";
    let emailErr = "";
    let pwErr = "";
    let nameErr = "";
    this.props.errors.forEach(err => {
      switch (err.split(" ")[0]) {
        case "Username": {
          nameErr = "Enter username";
          break;
        }
        case "Password": {
          pwErr = err;
          break;
        }
        case "Email": {
          emailErr = "Enter email";
          break;
        }
        case "Invalid": {
          signInErr = err;
          break;
        }
      }
    });

    let emailContainer;
    if (this.props.formType === "Sign up") {
      emailContainer = (
        <>
          <div className="input-row">
            <input
              className="input space-input"
              type="text"
              placeholder="First name"
            />
            <input className="input" type="text" placeholder="Last name" />
          </div>
          <label className={emailErr ? "err-label" : ""}>
            <input
              className={emailErr ? "input err-input" : "input"}
              type="text"
              placeholder="Your email address"
              onChange={this.handleInput("email")}
            />
            <i
              id="err"
              className={emailErr ? "fas fa-exclamation-circle error-icon" : ""}
            />
            {emailErr}
          </label>
        </>
      );
    }

    let passwordConfirm;
    if (this.props.formType === "Sign up") {
      passwordConfirm = (
        <label htmlFor="" className="space-input">
          <input className="input" type="password" placeholder="Confirm" />
        </label>
      );
    }

    let createAccount;
    if (this.props.formType === "Sign in") {
      createAccount = this.props.navLink;
    } else {
      createAccount = this.props.navLink;
    }

    let sessionName;
    if (this.props.formType === "Sign in") {
      sessionName = <h2>Sign in</h2>;
    } else {
      sessionName = <h2>Create your Autube Account</h2>;
    }

    return (
      <div className="login-page">
        <div className="login">
          <a href="/">
            <img
              className={
                this.props.formType === "Sign in" ? "logo" : "logo sign-up-logo"
              }
            />
            <img className="logo" src={window.logo} />
          </a>
          <div
            className={
              this.props.formType === "Sign in"
                ? "login-header"
                : "signup-header"
            }
          >
            {sessionName}
            <h4>to continue to AuTube</h4>
          </div>
          <form>
            {emailContainer}
            <label className={signInErr || nameErr ? "err-label" : ""}>
              <input
                className={signInErr || nameErr ? "input err-input" : "input"}
                type="text"
                placeholder="Username"
                onChange={this.handleInput("username")}
              />
              <i
                id="err"
                className={
                  signInErr || nameErr
                    ? "fas fa-exclamation-circle error-icon"
                    : ""
                }
              />
              {signInErr}
              {nameErr}
            </label>

            <div
              className={this.props.formType === "Sign up" ? "input-row" : ""}
            >
              <label
                className={pwErr ? "err-label space-input" : " space-input"}
              >
                <input
                  className={signInErr || pwErr ? "input err-input" : "input"}
                  type="password"
                  placeholder="Password"
                  onChange={this.handleInput("password")}
                />
                <i
                  id="err"
                  className={
                    pwErr ? "fas fa-exclamation-circle error-icon" : ""
                  }
                />
                {pwErr}
              </label>
              {passwordConfirm}
              <i
                className={
                  this.props.formType === "Sign up" ? "far fa-eye-slash" : ""
                }
              />
            </div>
            <div className="demo-controls">
              <p className="demo-text">
                Don't have an account and too lazy to create one?
              </p>
              <a className="demo-btn" onClick={this.handleDemoLogin}>
                Sign in as a guest
              </a>
            </div>

            <div className="form-links">
              {createAccount}
              <input
                onClick={this.handleSubmit}
                type="submit"
                className="signin-button"
                value={this.props.formType}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(SessionForm);
