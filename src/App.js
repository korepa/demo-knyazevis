import React, { Component } from 'react';
import Header from './components/header/header';
import About from './components/about/about';
import Resume from './components/resume/resume';
import personalData from './storage/personalData';
import Footer from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData}/>
        <About />
        <Resume />
        <Footer />
      </div>
    );
  }
}

export default App;