import React, { Component } from 'react';
import SignUpHeader from './SignUpHeader';
import SignUpForm from './SignUpForm';
import Footer from '../Footer/Footer';

class SignUp extends Component {
  render() {
    return (
      <div className="page page--out">
        <SignUpHeader />
        <main className="main">
          <section className="section flat-top">
            <div className="container" data-tagged="Signup">
              <h2 className="section__title">You’ve been invited!</h2>
              <p className="text-lg section__short" >
                To get started, please signup below (no credit card is needed). After you signup, you’ll have 2 weeks of free unrestricted access to Jolted.
		          </p>
              <p className="alert alert--danger">
                Please fill in all of the fields.
		          </p>
              <SignUpForm />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    )
  }
}

export default SignUp;
