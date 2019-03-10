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
                            <p>
                                Frontend developer, full-stack .net developer
                                <br/>Backend experience > 8 years
                                <br/>Frontend experience > 2 years
                                <br/>My aims:
                                <br/>I try to constantly evolve in software engineering. 
                                    I put the focus on the frontend and UX/UI, I think that they have a future. 
                                    At the same time, I appreciate the role of backend technologies, because business 
                                    data must be stored efficiently and safely. I also think that it is necessary to be 
                                    a professional also in related areas: infrastructure and autotesting (qa).
                            </p>
                            <div class="row">
                                <div class="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p class="address">
                                        <span>Russia, Moscow city</span><br />
                                        <span>+7(916)489-86-02</span><br />
                                        <span>to.knyazev@gmail.com</span><br />
                                        <span>Social networks</span>
                                    </p>
                                </div>
                                <div class="columns download">
                                    <p>
                                        <a href="files/knyazev_ivan_resume.pdf" class="button" download="knyazev_ivan_resume.pdf"><i class="fa fa-download"></i>Download Resume</a>
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