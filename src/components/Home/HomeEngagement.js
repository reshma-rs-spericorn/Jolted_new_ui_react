import React, { Component } from 'react'

class HomeEngagement extends Component {
  render() {
    return (
      <div>
        <section id="engagement" className="section animate">
          <div className="container" data-tagged="ENGAGEMENT">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Natural Engagement. <br />
                Organic Growth.
					    </h1>
              <div className="section__text">
                <p>
                  With auto-like bots being shut down by Instagram, Jolted offers a more personal, safer, and natural alternative for engaging with users within a smooth and fast process.
						 	    <br /> <br />
                  In return, you’ll convert users at a much higher rate, attract active followers with a real interest in your product, and grow more organically.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Engager.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Engager.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Engager.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeEngagement;
