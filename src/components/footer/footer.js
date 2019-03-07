import React, { Component } from 'react';
export default class Footer extends Component {
    render() {
        return (
            <React.Fragment>
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                <li><a href="https://www.facebook.com/iknyazev"><i className="fa fa-facebook" /></a></li>
                                <li><a href="https://twitter.com/korepa"><i className="fa fa-twitter" /></a></li>
                                <li><a href="https://www.linkedin.com/in/knyazevivan/"><i className="fa fa-linkedin" /></a></li>
                                <li><a href="https://www.instagram.com/korepa"><i className="fa fa-instagram" /></a></li>
                                <li><a href="skype:to.knyazev?call"><i className="fa fa-skype" /></a></li>
                            </ul>
                            <ul className="copyright">
                                <li>© Copyright 2019</li>
                                <li>Design by Ivan Knyazev</li>
                            </ul>
                        </div>
                        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
                    </div>
                </footer>
            </React.Fragment>
        );
    }
}