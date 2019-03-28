import React from "react";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type) {
    return e => {
      this.setState({ [type]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.processForm(this.state);
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.history.push("/"));
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

  render() {
    let emailContainer;
    if (this.props.formType === "Sign Up") {
      emailContainer = (
        <label>
          <input
            type="text"
            placeholder="Email"
            onChange={this.handleInput("email")}
          />
        </label>
      );
    }
    return (
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
              // value={this.state.username}
              placeholder="Username"
              onChange={this.handleInput("username")}
            />
          </label>

          <label>
            <input
              type="password"
              // value={this.state.password}
              placeholder="Password"
              onChange={this.handleInput("password")}
            />
          </label>

          <p>Don't have an account and too lazy to create one?</p>
          <a>Sign in as a demo user</a>

          <div className="form-links">
            <a href="">Create account</a>
            <input
              onClick={this.handleSubmit}
              type="submit"
              className="signin-button"
              value={this.props.formType}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SessionForm;
