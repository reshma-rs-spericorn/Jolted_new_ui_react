import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import RequestForm from '../Common/RequestForm';

class Pricing extends Component {
  render() {
    return (
      <div className="page">
        <Nav />
        <main className="main">
          <section className="section flat-top pb-0 spaced-7 spaced-sm-6 spaced-xs-4">
            <div className="container" data-tagged="Pricing">
              <h2 className="section__title">Growth that's right for you.</h2>
              <p className="text-lg">
                We offer 3 different packages, each based on a different marketing objective. <br />
                Once you're invited for a free trial, you'll be able to select one and upgrade.
		          </p>
              <div className="pricing-wrap">
                <div className="pricing">
                  <strong className="pricing__type">Personal</strong>
                  <span className="pricing__price">
                    <small>$</small>
                    <span>17</span>
                    <small>mo</small>
                  </span>
                  <ul className="pricing__features">
                    <li>1 Instagram Account</li>
                    <li>Unlimited Access</li>
                  </ul>
                </div>
                <div className="pricing pricing--blue">
                  <strong className="pricing__type">Professional</strong>
                  <span className="pricing__price">
                    <small>$</small>
                    <span>47</span>
                    <small>mo</small>
                  </span>
                  <ul className="pricing__features">
                    <li>5 Instagram Account</li>
                    <li>Unlimited Access</li>
                  </ul>
                </div>
                <div className="pricing pricing--green">
                  <strong className="pricing__type">Agency</strong>
                  <span className="pricing__price">
                    <small>$</small>
                    <span>97</span>
                    <small>mo</small>
                  </span>
                  <ul className="pricing__features">
                    <li>15 Instagram Account</li>
                    <li>Unlimited Access</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <RequestForm />
        </main>
      </div>
    )
  }
}

export default Pricing;
