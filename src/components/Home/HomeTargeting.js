import React, { Component } from 'react'

class HomeTargeting extends Component {
  render() {
    return (
      <div>
        <section id="targeting" className="section animate">
          <div className="container" data-tagged="TARGETING">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Input targets. <br />
                Output followers.
					    </h1>
              <div className="section__text">
                <p>
                  You can define your target audience based on the hashtags you think they’re using, locations they’re geo-tagging or relevant accounts they’re following.
							    <br /> <br />
                  Jolted will then automatically build your audience and serve them to you once you’re ready to engage and convert them into new followers.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Targeting.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Targeting.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Targeting.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeTargeting;
