import React, { Component } from 'react';
import Welcome from './Welcome.js';
import About from './About.js';
import Experience from './Experience';
import Contact from './Contact';


class App extends Component {
  render() {
    return (
      <div className='fullHeight'>
        <Welcome />
        <About />
        <Experience />
        <Contact />
      </div>
    );
  }
}

export default App;
