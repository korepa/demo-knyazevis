import React, { Component } from 'react';
export default class Testimonials extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="testimonials">
                    <div className="text-container">
                        <div className="row">
                            <div className="two columns header-col">
                                <h1><span>Client Testimonials</span></h1>
                            </div>
                            <div className="ten columns flex-container">
                                <div className="flexslider">
                                    <ul className="slides">
                                        <li>
                                            <blockquote>
                                                <p>Under construction...)</p>
                                                <cite>Author</cite>
                                            </blockquote>
                                        </li>
                                        <li>
                                            <blockquote>
                                                <p>Under construction...)</p>
                                                <cite>Author</cite>
                                            </blockquote>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}