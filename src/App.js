import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

import About from './components/about';
import Navbar from './components/navigation/navbar';
import Contacts from './components/contacts';
import Resume from './components/resume';
import Portfolio from './components/portfolio';
import Services from './components/services';
import SocialMediaLinks from './components/navigation/socialMediaLinks';
import TopNavbar from './components/navigation/topNavbar';

function App() {
  let winloc = window.location.pathname.slice(1,) === "home";
  return (
    <div className="App">
      <Router>

        {winloc ? <header id="header">
          <div className="container">

            <h1><a href="index.html">Mark Clark</a></h1>

            <h2>I am a <span>web developer</span> in Phoenix, Arizona</h2>

            <Navbar />
            <SocialMediaLinks />
          </div>
        </header> : <TopNavbar />}

        <div className="credits">
          Mark Clark <a href="https://bootstrapmade.com/">| Dragon Cats</a>
        </div>
        <Switch>
          <Redirect exact path="/" to="/home" />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contacts} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
          <Route render={() => <div><p>404 PAGE NOT FOUND</p></div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
