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
                            <p>Sed ut perspiciatis</p>
                            <div class="row">
                                <div class="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p class="address">
                                        <span>Jonathan Doe</span><br />
                                        <span>1600 Amphitheatre Parkway<br />
                                            Mountain View, CA 94043 US
                                        </span><br />
                                        <span>(123)456-7890</span><br />
                                        <span>anyone@website.com</span>
                                    </p>
                                </div>
                                <div class="columns download">
                                    <p>
                                        <a href="#" class="button"><i class="fa fa-download"></i>Download Resume</a>
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