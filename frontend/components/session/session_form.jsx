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

  showErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  render() {
    let emailContainer;
    if (this.props.formType === "Sign up") {
      emailContainer = (
        <>
          <div className="name-row">
            <input
              className="input-firstname"
              type="text"
              placeholder="First name"
            />
            <input type="text" placeholder="Last name" />
          </div>
          <label>
            <input
              type="text"
              placeholder="Your email address"
              onChange={this.handleInput("email")}
            />
          </label>
        </>
      );
    }

    let passwordConfirm;
    if (this.props.formType === "Sign up") {
      passwordConfirm = (
        <label htmlFor="">
          <input type="password" placeholder="Confirm" />
        </label>
      );
    }

    let createAccount;
    if (this.props.formType === "Sign in") {
      createAccount = this.props.navLink;
    } else {
      createAccount = this.props.navLink;
    }

    return (
      <div className="login-page">
        <div className="login">
          <div className="login-header">
            <h2>{this.props.formType}</h2>
            <h3>to continue to AuTube</h3>
          </div>
          <form>
            {this.showErrors()}
            {emailContainer}
            <label>
              <input
                type="text"
                placeholder="Username"
                onChange={this.handleInput("username")}
              />
            </label>
            <label>
              <input
                type="password"
                placeholder="Password"
                onChange={this.handleInput("password")}
              />
            </label>
            {passwordConfirm}
            <p className="demo-text">
              Don't have an account and too lazy to create one?
            </p>
            <a onClick={this.handleDemoLogin}>Sign in as a guest</a>

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
