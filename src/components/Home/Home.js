import React, { Component } from 'react';
import Nav from '../Nav/Nav';
import NavDots from '../Nav/NavDots';
import HomeInvite from './HomeInvite';
import HomeWhatsJolted from './HomeWhatsJolted';
import HomeCampaign from './HomeCampaign';
import HomeTargeting from './HomeTargeting';
import HomeFiltering from './HomeFiltering';
import HomeEngagement from './HomeEngagement';
import HomeActivity from './HomeActivity';
import HomeAnalysis from './HomeAnalysis';
import HomeWhyJolted from './HomeWhyJolted';
import RequestForm from '../Common/RequestForm';
import Footer from '../Footer/Footer';


class Home extends Component {

  componentDidMount() {
    this.forceUpdate();
  }
  render() {
    return (
      <div className="page page--home">
        <Nav />
        <NavDots />
        <main className="main flat-top">
          <HomeInvite />
          <HomeWhatsJolted />
          <HomeCampaign />
          <HomeTargeting />
          <HomeFiltering />
          <HomeEngagement />
          <HomeActivity />
          <HomeAnalysis />
          <HomeWhyJolted />
          <RequestForm />
        </main>
        <Footer />
      </div >
    )
  }
}


export default Home;