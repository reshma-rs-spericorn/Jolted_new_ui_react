import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import ContactForm from '../Common/ContactForm';

class About extends Component {
  render() {
    return (
      <div className="page">
        <Nav />
        <div className="hero animate" style={about_bg}>
          <div className="container" data-tagged="Jolted">
            <h1 className="hero__title">We help brands conquer social media.</h1>
            <p>Smarter engagement, means faster growth.</p>
          </div>
        </div>
        <main className="main">
          <section className="section spaced-all-2 spaced-xs-0 flat-top">
            <div className="container">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				      </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
				      </p>
              <blockquote>
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
				      </blockquote>
              <div className="author">
                <img src="./images/profile-img.jpg" alt="" />
                <a href="#!">Fouad Tolaib,            Founder.</a>
              </div>
            </div>
          </section>
          <ContactForm />
        </main>
      </div>
    )
  }
}
const about_bg = {
  ' backgroundImage': "url('./images/cover-about.jpg')"
}

export default About;
