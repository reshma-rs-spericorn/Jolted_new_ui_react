import React, { Component } from 'react'

class HomeInvite extends Component {
  render() {
    return (
      <div>
        <section id="home" className="section section--gradient animate">
          <div className="container" data-tagged="PER INVITE ONLY">
            <h1 className="section__title">Grow a bigger brand on Instagram.</h1>
            <p className="spaced-xs-5 spaced-sm-7 spaced-7">
              The smarter way to grow a bigger and more loyal following quickly and organically.
				</p>
            <button type="submit" className="btn btn-o--white btn--up btn--lg spaced-xs-9 spaced-sm-10 spaced-10"><span>Request Invite</span></button>

            <div className="screen-wrap">
              <img src="./images/Desktop-Page.png" alt="" className="section__screen section__screen--d" className="section__screen section__screen--d" />
              <img src="./images/Tablet-Page.png" alt="" className="section__screen section__screen--t" />
              <img src="./images/Mobile-Page.png" alt="" className="section__screen section__screen--m" />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeInvite;
