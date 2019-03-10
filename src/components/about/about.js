import React, { Component } from 'react';
export default class About extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="about">
                    <div class="row">
                        <div class="three columns">
                            <img class="profile-pic" src="images/profilepic.jpg" alt="" />
                        </div>
                        <div class="nine columns main-col">
                            <h2>About Me</h2>
                            <p>Frontend developer, full-stack .net developer</p>
                            <div class="row">
                                <div class="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p class="address">
                                        <span>Moscow city</span><br />
                                        <span>+7(916)489-86-02</span><br />
                                        <span>to.knyazev@gmail.com</span>
                                    </p>
                                </div>
                                <div class="columns download">
                                    <p>
                                        <a href="files/test.pdf" class="button" download="knyazevis.pdf"><i class="fa fa-download"></i>Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}