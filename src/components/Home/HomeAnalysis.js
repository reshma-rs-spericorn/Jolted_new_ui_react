import React, { Component } from 'react'

class HomeAnalysis extends Component {
  render() {
    return (
      <div>

        <section id="analytics" className="section animate">
          <div className="container" data-tagged="ANALYTICS">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Clear Insights. <br />
                Better Conversions.
					    </h1>
              <div className="section__text">
                <p>
                  Learn which targets convert the best, split-test new targets, dump the ones that aren’t performing well and keep the winners going.
						 	    <br /> <br />
                  Through the stats we will provide you, you’ll be able to monitor your progress, make adjustments as you go and easily optimize your campaigns.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Stats.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Stats.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Stats.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeAnalysis;
