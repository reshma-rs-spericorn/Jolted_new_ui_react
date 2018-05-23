import React, { Component } from 'react';

export class FaqCollapse extends Component {
  render() {
    return (
      <div class="faq">
        <h4 class="faq__question collapse-trigger">
          <span class="faq__icon"></span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt?
						      </h4>
        <div class="faq__answer collapse">
          <div class="faq__wrap">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio soluta velit nam accusamus error qui corrupti quas, officia rerum, suscipit omnis corporis aspernatur, laboriosam quam commodi nihil rem ipsam aliquam! Asperiores eligendi officia odio odit, quam harum consectetur totam necessitatibus dicta voluptatem ullam cupiditate repudiandae unde alias? Quod minus accusantium dolores libero provident inventore architecto fugit hic magni blanditiis, assumenda, cumque amet nulla illo odio sapiente. Est, odit dolorum, debitis dignissimos aliquam quos id temporibus aliquid quod quidem ipsum ea vero unde sit veniam! Tenetur eum, sit cum mollitia error minus fuga corporis illum ab, rerum ipsa rem in sequi.
						</p>
          </div>
        </div>
      </div>
    )
  }
}

export default FaqCollapse;
