import React, { Component } from 'react'

class HomeFiltering extends Component {
  render() {
    return (
      <div>
        <section id="filtering" className="section animate">
          <div className="container" data-tagged="FILTERING">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Prequalify users. <br />
                Increase results.
					    </h1>
              <div className="section__text">
                <p>
                  With 5 filters at your disposal, you’ll be able to narrow down your target audience and engage with people you believe are most likely to engage back and follow you.
						 	    <br /> <br />
                  Filters include number of post likes, media comments, user’s followers, and user’s followings, as well as media age.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Filters.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Filters.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Filters.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeFiltering;
