import React, { Component } from 'react'

class RequestForm extends Component {
  render() {
    return (

      <div>
        <section className="section" id="invite" data-number="10">
          <div className="container" data-tagged="Get Access">
            <h2 className="section__title">Request your invite.</h2>
            <p>
              Jolted is currently accepting users on an invite-only first come, first served basis. Once you're invited, you'll have the ability to try Jolted for a 7 days free-trial (no cc required) and see for yourself how effective it really is. So act fast and request your invitation below. You have nothing to lose but everything to gain.
          </p>
            <div className="alert alert--danger">
              <p>
                Oops: Please enter your name to submit your request.
            </p>
            </div>
            <form action="" className="form" noValidate>
              <div className="floater">
                <input id="contact-name" type="text" placeholder="Name" className="form__input" />
                <label htmlFor="contact-name" className="form__label">Your Name</label>
              </div>
              <div className="floater">
                <input id="contact-email" type="email" placeholder="Email Address" className="form__input" />
                <label htmlFor="contact-email" className="form__label">Email Address</label>
              </div>
              <button type="submit" className="btn btn-o btn--up btn--lg btn--grad"><span>Invite me</span></button>
            </form>
            <a href="#!"><small>I'm already on this list, I want to check my place.</small></a>
          </div>
        </section>
      </div>

    )
  }
}

export default RequestForm;
