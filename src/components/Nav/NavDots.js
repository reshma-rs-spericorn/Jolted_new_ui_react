import React, { Component } from 'react'

class NavDots extends Component {
  render() {
    return (

      <nav className="dots">
        <a className="dots__item" href="#home" data-number="1"></a>
        <a className="dots__item" href="#what" data-number="2"></a>
        <a className="dots__item" href="#campaigns" data-number="3"></a>
        <a className="dots__item" href="#targeting" data-number="4"></a>
        <a className="dots__item" href="#filtering" data-number="5"></a>
        <a className="dots__item" href="#engagement" data-number="6"></a>
        <a className="dots__item" href="#activity" data-number="7"></a>
        <a className="dots__item" href="#analytics" data-number="8"></a>
        <a className="dots__item" href="#why" data-number="9"></a>
        <a className="dots__item" href="#invite" data-number="10"></a>
      </nav>

    )
  }
}

export default NavDots;
