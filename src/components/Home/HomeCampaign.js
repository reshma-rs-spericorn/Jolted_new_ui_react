import React, { Component } from 'react'

class HomeCampaign extends Component {
  render() {
    return (
      <div>
        <section id="campaigns" className="section animate">
          <div className="container" data-tagged="CAMPAIGNS">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Create a campaign. <br />
                Get an audience.
					    </h1>
              <div className="section__text">
                <p>
                  When creating a campaign, you’ll be able to define and segment an audience you wish to engage with. <br /> <br />
                  By keeping different audiences separate, you’ll be able to split-test groups of targets and determine which Instagram users are truly your target audience.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Campaigns.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Campaigns.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Campaigns.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeCampaign;
