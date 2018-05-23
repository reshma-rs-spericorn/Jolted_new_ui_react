import React, { Component } from 'react'

class HomeWhyJolted extends Component {
  render() {
    return (
      <div>
        <section id="why" className="section animate">
          <div className="container" data-tagged="Why Jolted?">
            <div className="section__modules">
              <h1 className="section__title">Enjoy real growth.</h1>
              <div className="flag-wrap">
                <div className="flag">
                  <div className="flag__icon">
                    <svg role="img" className="icon icon-cup"><use xlinkHref="icons/icons.svg#icon-cup"></use></svg>
                  </div>
                  <div className="flag__content">
                    <h4 className="flag__title">Safe &amp; Reliable</h4>
                    <p>
                      With accounts being banned for using bots, Jolted offers a safe and reliable automated solution that plays by the rules while being more efficient.
								    </p>
                  </div>
                </div>
                <div className="flag">
                  <div className="flag__icon">
                    <svg role="img" className="icon icon-interface"><use xlinkHref="icons/icons.svg#icon-interface"></use></svg>
                  </div>
                  <div className="flag__content">
                    <h4 className="flag__title">Smart Interface</h4>
                    <p>
                      We simplify the mechanics of your Instagram marketing by offering you an organized and clean interface that will make growing your page feel like a breeze.
								    </p>
                  </div>
                </div>
                <div className="flag">
                  <div className="flag__icon">
                    <svg role="img" className="icon icon-globe"><use xlinkHref="icons/icons.svg#icon-globe"></use></svg>
                  </div>
                  <div className="flag__content">
                    <h4 className="flag__title">Deep Targeting</h4>
                    <p>
                      With 5 effective filters and the ability to add unlimited targets (hashtags, competitors, and locations), you’ll be able to effortlessly reach your target audience.
								    </p>
                  </div>
                </div>
                <div className="flag">
                  <div className="flag__icon">
                    <svg role="img" className="icon icon-flower"><use xlinkHref="icons/icons.svg#icon-flower"></use></svg>
                  </div>
                  <div className="flag__content">
                    <h4 className="flag__title">Grow Faster</h4>
                    <p>
                      Through natural engagement and powerful automation, you’ll be able to quickly gain more followers and increase your page’s overall organic reach.
								    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeWhyJolted;
