import React, { Component } from 'react'

class LoginForm extends Component {
  render() {
    return (
      <div>
        <form action="" className="form form--out" noValidate>
          <div className="floater">
            <input id="login-name" type="text" placeholder="Name" className="form__input" />
            <label htmlFor="login-name" className="form__label">Name</label>
          </div>
          <div className="floater spaced-all-5">
            <input id="login-pass" type="password" placeholder="Password" className="form__input" />
            <label htmlFor="login-pass" className="form__label">Password</label>
          </div>
          <div className="form__footer">
            <button type="submit" className="btn btn-o--white btn--up btn--lg"><span>Sign In</span></button>
            <a href="#!">Forgot password?</a>
          </div>
        </form>
      </div>
    )
  }
}

export default LoginForm;
