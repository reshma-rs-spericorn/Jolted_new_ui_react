import React, { Component } from 'react'

class HomeWhatsJolted extends Component {
  render() {
    return (
      <div>
        <section id="what" className="section animate">
          <div className="container" data-tagged="WHAT'S JOLTED?">
            <h1 className="section__title">Growth simplified.</h1>
            <p className="spaced-all-5 spaced-xs-4">
              Jolted will find your targeted users, simplify the mechanics of engagement, speed up the process, and show you exactly where your new followers are coming from, so you know where you’re getting the most results.
				    </p>
            <div className="row">
              <div className="col-xs-12 col-sm-4 spaced-xs-4">
                <h2 className="section__subtitle">Segment</h2>
                <p>
                  Automatically create your list of ideal users on Instagram.
						    </p>
              </div>
              <div className="col-xs-12 col-sm-4 spaced-xs-4">
                <h2 className="section__subtitle">Engage</h2>
                <p>
                  Easily engage and convert the best users for your brand.
						    </p>
              </div>
              <div className="col-xs-12 col-sm-4">
                <h2 className="section__subtitle">Grow</h2>
                <p>
                  Quickly grow your following with naturally engaged users.
						    </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomeWhatsJolted;
