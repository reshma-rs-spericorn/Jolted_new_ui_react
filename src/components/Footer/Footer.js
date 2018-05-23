import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <p className="footer__copy">
            <a href="homepage.html" className="footer__logo">
              <svg x="0px" y="0px" viewBox="0 0 30 30" className="logo-c">
                <path className="logo-c__circle" d="M15,0c8.3,0,15,6.7,15,15s-6.7,15-15,15S0,23.3,0,15S6.7,0,15,0z" />
                <g className="logo-c__sign">
                  <polygon points="11.9,12.1 15,15 18,6.1" />
                  <polygon points="18.1,18 15,15 12,23.9	" />
                </g>
              </svg>
            </a>
            <span>&copy; Jolted 2017</span>
          </p>
          <nav className="footer__nav">
            <a href="policy.html">Privacy <span className="">Policy</span></a>
            <a href="terms.html">Terms <span className="">of Use</span></a>
          </nav>
          <div className="footer__socials">
            <a href="#!">
              <svg role="img" className="icon icon-facebook"><use xlinkHref="icons/icons.svg#icon-facebook"></use></svg>
            </a>
            <a href="#!">
              <svg role="img" className="icon icon-twitter"><use xlinkHref="icons/icons.svg#icon-twitter"></use></svg>
            </a>
          </div>
        </footer>
      </div >
    )
  }
}

export default Footer;
