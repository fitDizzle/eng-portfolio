import React from 'react';
import About from './components/about';
import Navbar from './components/navigation/navbar';
import SocialMediaLinks from './components/navigation/socialMediaLinks';

function App() {
  return (
    <div className="App">

      <header id="header">
        <div className="container">

          <h1><a href="index.html">Mark Clark</a></h1>

          <h2>I am a <span>web developer</span> in Phoenix, Arizona</h2>

          <Navbar />
          <SocialMediaLinks />
        </div>
      </header>

      <About />

      <div className="credits">
        Mark Clark <a href="https://bootstrapmade.com/">| Dragon Cats</a>
      </div>
    </div>
  );
}

export default App;
