import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter as Router
} from "react-router-dom";
import Nav from './Nav/Nav'
import Main from './Main/Main';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';
import About from './About/About';
import Blog from './Blog/Blog';
import Faq from './Faq/Faq';
import Pricing from './Pricing/Pricing';

class App extends Component {
  render() {
    return (
      <HashRouter >
        <div className="App">
          <div className="content">
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login} />
            <Route path='/signup' component={SignUp} />
            <Route path='/about' component={About} />
            <Route path="/blog" component={Blog} />
            <Route path='/faq' component={Faq} />
            <Route path='/pricing' component={Pricing} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
