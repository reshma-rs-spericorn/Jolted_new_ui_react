import React, { Component } from 'react'

class HomeActivity extends Component {
  render() {
    return (
      <div>
        <section id="activity" className="section animate">
          <div className="container" data-tagged="ACTIVITY">
            <div className="section__modules">
              <h1 className="section__title section__title--sm">
                Safe automation. <br />
                Quick results.
					    </h1>
              <div className="section__text">
                <p>
                  Once you’ve queued up the users you wish to engage and specified how you want to engage them, Jolted will then process each of your actions and automatically push them to Instagram on your behalf.
						 	    <br /> <br />
                  Our algorithm will make sure you’ll stay well within Instagram’s limits and have your actions appear natural while making sure you reach as many people as possible.
						    </p>
              </div>
              <div className="screen-wrap">
                <img src="./images/Desktop-Activity.png" alt="" className="section__screen section__screen--d" />
                <img src="./images/Tablet-Activity.png" alt="" className="section__screen section__screen--t" />
                <img src="./images/Mobile-Activity.png" alt="" className="section__screen section__screen--m" />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeActivity;
