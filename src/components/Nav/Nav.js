import React, { Component } from 'react';

import {
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";


class Nav extends Component {

  render() {
    return (
      <div >
         <header className="header">
          <NavLink to="/" className="header__logo">
            <svg x="0px" y="0px" viewBox="0 0 77 14.7" className="logo" style={homediv}>
              <path d="M1.6,2.8V0.9h6.2v8.2c0,1.4-0.4,2.5-1.1,3.2c-0.8,0.7-1.8,1.1-2.9,1.1c-1.5,     0-2.8-0.5-3.8-1.5l1.2-1.6
                C2,11,2.9,11.4,3.6,11.4c0.6,0,1-0.2,1.4-0.5c0.4-0.4,0.6-0.9,0.6-1.7V2.8L1.6,2.8z M20.8,12c-1,0.9-2.2,1.4-3.7,1.4
                c-1.4,0-2.7-0.5-3.7-1.4c-1-0.9-1.5-2.1-1.5-3.5c0-1.3,0.5-2.5,1.5-3.4c1-0.9,2.2-1.4,3.7-1.4c1.5,0,2.7,0.5,3.7,1.4
                c1,0.9,1.5,2.1,1.5,3.4C22.3,9.9,21.8,11.1,20.8,12L20.8,12z M14.9,10.8c0.6,0.6,1.4,0.9,2.2,0.9c0.8,0,1.6-0.3,2.2-0.9
                c0.6-0.6,0.9-1.3,0.9-2.2c0-0.9-0.3-1.7-0.9-2.2c-0.6-0.6-1.4-0.9-2.2-0.9c-0.8,0-1.6,0.3-2.2,0.9c-0.6,0.6-0.9,1.4-0.9,2.2
                C14.1,9.5,14.4,10.2,14.9,10.8z M28.5,13.3h-2V0.1h2V13.3z M35.8,5.4v4.8c0,0.4,0.1,0.8,0.4,1.1c0.2,0.3,0.6,0.4,1,0.4
                c0.4,0,0.9-0.2,1.3-0.6l0.8,1.4c-0.7,0.6-1.5,0.9-2.4,0.9c-1.7,0-3.1-1.3-3.2-3c0-0.1,0-0.1,0-0.2V5.4h-1.2V3.8h1.2v-3h2.1v3h2.6
                v1.6L35.8,5.4z M51.8,9.4h-7.6c0.1,0.7,0.4,1.2,1,1.7c0.6,0.4,1.3,0.6,2,0.6c1.2,0,2.2-0.4,2.8-1.1l1.2,1.2
                c-1.1,1.1-2.6,1.6-4.1,1.6c-1.3,0-2.5-0.4-3.5-1.3c-1-0.9-1.5-2.2-1.4-3.5c-0.1-1.3,0.5-2.6,1.5-3.5c0.9-0.9,2.2-1.3,3.4-1.3
                c1.2,0,2.4,0.4,3.4,1.2c0.9,0.8,1.5,2,1.4,3.2L51.8,9.4z M44.2,7.9h5.6c0-0.8-0.3-1.4-0.8-1.8c-0.5-0.4-1.2-0.7-1.9-0.6
                c-0.7,0-1.4,0.2-2,0.7C44.5,6.5,44.2,7.1,44.2,7.9L44.2,7.9z M56.6,12.1c-0.9-0.9-1.4-2.2-1.4-3.5c0-1.5,0.5-2.6,1.4-3.5
                c0.9-0.9,2.1-1.3,3.4-1.3c1.3,0,2.3,0.5,3.1,1.6V0.1h2.1v13.1h-2.1v-1.4c-0.8,1-2,1.6-3.3,1.6C58.6,13.4,57.5,13,56.6,12.1z
                M57.3,8.6c-0.1,1.6,1.2,3,2.9,3.1c0.8,0,1.6-0.3,2.2-0.9c0.6-0.6,0.8-1.3,0.8-2.2c0-0.9-0.3-1.7-0.8-2.3s-1.3-0.9-2.1-0.9
                s-1.5,0.3-2.1,0.9C57.6,7,57.3,7.8,57.3,8.6z M74.5,7.4l-2.6-2.5L77,0L74.5,7.4z M77,9.9l-5,4.9l2.5-7.3L77,9.9z"/>
            </svg>
          </NavLink>

          <button type="button" className="btn-clean header__trigger">
            <span className="menu-trigger"></span>
          </button>

          <nav className="header__nav header__nav--d">
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/pricing" >Pricing</NavLink>
            <NavLink to="/faq" >FAQ</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
          </nav>

          <nav className="header__nav header__nav--m">
            <NavLink to="/" >Home</NavLink>
            <NavLink to="/about" >About</NavLink>
            <NavLink to="/pricing" >Pricing</NavLink>
            <NavLink to="/faq" >FAQ</NavLink>
            <NavLink to="/blog" >Blog</NavLink>
            <NavLink to="/login" >Login</NavLink>
          </nav>

          <NavLink to="/login" className="header__login">Login</NavLink>
          <NavLink to="/invite" className="btn btn-o--purple header__invite">
            <span>Get</span>
            <span>Request</span>
            <span>Invite</span>
          </NavLink>
        </header>
      </div>
    );
  }
}
const homediv = {
  fill: 'currentColor'
}
export default Nav;