import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <section className="section">
        <div className="container" data-tagged="Contact">
          <h2 className="section__title">Get in touch.</h2>
          <p>
            If you have any questions, inquiries, suggestions, or unfiltered feedback about our product then we’d love to hear from you. Feel free to use the form below and we’ll try to get back to you within 24 hours.
		          </p>

          <p className="alert alert--success">Thank you! We’ve received your message.</p>

          <form action="" className="form" noValidate>
            <div className="floater">
              <input id="contact-name" type="text" placeholder="Name" className="form__input" />
              <label for="contact-name" className="form__label">Name</label>
            </div>
            <div className="floater">
              <input id="contact-email" type="email" placeholder="Email Address" className="form__input" />
              <label for="contact-email" className="form__label">Email Address</label>
            </div>
            <div className="floater">
              <textarea id="contact-message" rows="1" placeholder="Message..." className="form__input"></textarea>
              <label for="contact-message" className="form__label">Message...</label>
            </div>
            <button type="submit" className="btn btn--solid btn--purple">Send Message</button>
          </form>
        </div>
      </section>
    )
  }
}

export default Contact;
