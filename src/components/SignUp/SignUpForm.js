import React, { Component } from 'react'

class SignUpForm extends Component {
  render() {
    return (
      <div>
        <form action="" className="form form--out" noValidate>
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className="floater">
                <input id="signup-first" type="text" placeholder="First Name" className="form__input" />
                <label htmlFor="signup-first" className="form__label">First Name</label>
              </div>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className="floater">
                <input id="signup-last" type="text" placeholder="Last Name" className="form__input" />
                <label htmlFor="signup-last" className="form__label">Last Name</label>
              </div>
            </div>
          </div>
          <div className="floater">
            <input id="signup-email" type="email" placeholder="Email Address" className="form__input" />
            <label htmlFor="signup-email" className="form__label">Email Address</label>
          </div>
          <div className="floater">
            <input id="signup-pass" type="password" placeholder="Password" className="form__input" />
            <label htmlFor="signup-pass" className="form__label">Password</label>
          </div>
          <div className="floater spaced-all-5">
            <input id="signup-pass2" type="password" placeholder="Confirm Password" className="form__input" />
            <label htmlFor="signup-pass2" className="form__label">Confirm Password</label>
          </div>
          <button type="submit" className="btn btn-o--white btn--up btn--lg"><span>Sign Up</span></button>
        </form>
      </div>
    )
  }
}

export default SignUpForm;
