import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let personalData = this.props.personalData;

    return (
      <React.Fragment>
        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              <li><a className="smoothscroll" href="#resume">Resume</a></li>
              {/* <li><a className="smoothscroll" href="#examples">Examples</a></li> */}
              {/* <li><a className="smoothscroll" href="#testimonials">Testimonials</a></li> */}
              {/* <li><a className="smoothscroll" href="#contact">Contact</a></li> */}
            </ul>
          </nav>
          <div className="row banner">
            <div className="banner-text">
              <h1 className="responsive-headline">{personalData.name}</h1>
              <h3>I am a {personalData.role}.{personalData.roleDescription}</h3>
              <h3>I`m working in <span>Alfa-Bank</span> and make a full-stack dev of corporate business</h3>
              <h3>I use <span>.NET Core</span> backend and <span>ReactJS</span> frontend</h3>
              <h3>Let's <a className="smoothscroll" href="#about"> start scrolling </a>
                and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
              <hr />
              <ul className="social">
                <li><a href="https://www.facebook.com/iknyazev"><i className="fa fa-facebook" /></a></li>
                <li><a href="https://www.linkedin.com/in/knyazevivan/"><i className="fa fa-linkedin" /></a></li>
                <li><a href="https://www.instagram.com/korepa"><i className="fa fa-instagram" /></a></li>
                <li><a href="skype:to.knyazev?call"><i className="fa fa-skype" /></a></li>
              </ul>
            </div>
          </div>
          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
          </p>
        </header>
      </React.Fragment>
    );
  }
}