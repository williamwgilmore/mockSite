import React, { Component } from 'react';
import Welcome from './Welcome.js';
import About from './About.js';
import Experience from './Experience.js';
import Contact from './Contact.js';
import Navbar from './Navbar.js';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Navbar />
        <Welcome />
        <About />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
