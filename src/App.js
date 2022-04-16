import React, { useState, useEffect }  from 'react';
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
import ProjectOne from './components/projects/projectOne';
import ProjectTwo from './components/projects/projectTwo';
import ProjectThree from './components/projects/projectThree';
import ProjectFour from './components/projects/projectFour';
import Home from './components/home';

function App() {
  let [win, setWin] = useState("");
  let winloc = window.location.pathname.slice(1,) === "home";

  useEffect(() => {
    const loadNav = async () => {
      let res = await window.location.pathname.slice(1,) === "home";
      setWin(res);
    };
    loadNav();
  }, []);

  return (
    <div className="App">
      <Router>

        {win ? <header id="header">
          <div className="container">

            <h1><a href="/home">Mark Clark</a></h1>

            <h2>I am a <span>web developer</span> in Phoenix, Arizona</h2>

            <Navbar />
            <SocialMediaLinks />
          </div>
        </header> : <TopNavbar />}

        <div className="credits">
          Mark Clark <a href="#a">| Dragon Cats</a>
        </div>
        <Switch>
          <Redirect exact path="/" to="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contacts} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/project1" component={ProjectOne} />
          <Route exact path="/project2" component={ProjectTwo} />
          <Route exact path="/project3" component={ProjectThree} />
          <Route exact path="/project4" component={ProjectFour} />
          {/* <Route render={() => <div><p>404 PAGE NOT FOUND</p></div>} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
