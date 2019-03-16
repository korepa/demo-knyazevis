import React, { Component } from 'react';
export default class Resume extends Component {
    render() {
        return (
            <React.Fragment>
                <section id="resume">
                    {/* Education
      ----------------------------------------------- */}
                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Moscow Institute of Electronic Engineering</h3>
                                    <p className="info">Master of Engineering<span>•</span> <em className="date">May 2012</em></p>
                                    <p>
                                        I graduated from the Computer Science and Telecommunications Department
                                        at position master of engeneering. Direction of the dissertation 
                                        was "Automation and control in banking cash center"</p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Moscow Institute of Electronic Engineering</h3>
                                    <p className="info">B.A. Degree in Engineering<span>•</span> <em className="date">May 2010</em></p>
                                    <p>
                                        I graduated from the Computer Science and Telecommunications Department
                                        at position bachelor of engeneering. Graduation job 
                                        was "Education testing sofware for new students"</p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Education */}
                    {/* Work
      ----------------------------------------------- */}
                    <div className="row work">
                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>Alfa-Bank (Russia)</h3>
                                    <p className="info">Fullstack developer (.NET, React) <span>•</span> <em className="date">November 2016 - Present</em></p>
                                    <p>
                                        <b>Project "Alfa-Credit" 2018–2019</b>
                                        <br/>Project details: simplification of making requests for credit products (loans, tranches, guarantees) by corporate clients (legal entities).
                                        <br/>The result of the project: reduction of bank expenses on back-office personnel at 15%. Aceleration of the procedure of delivery credit products to customers in 2 times.
                                        <br/>Role in the team: development of backend and frontend in a cluster appication, setting up the pipelines, documenting the API. Migrating a significant portion of legacy code to .net core 2.2.
                                        <br/>Achievements: successfully develop and delivery to production the functionality (services .net core, front react) of registration of loans (tranches).
                                        <br/><font color="blue">#netcore #c# #js #react #typescript #mongodb #mesos #maraphon #sql #docker #ansible #rest</font>
                                        <br/><br/>
                                        <b>Project "Development of corporate business as usual (BAU)" 2016–2017</b>
                                        <br/>Project details: Development and support of corporate accounting and conveyor credit systems.
                                        <br/>Role in the team: middle, backend and database development, supply CI/CD processes, technical leadership in the development team.
                                        <br/>Achievements: develop and delivery functionality of maintain soft loans for the Ministry of Agriculture
                                        <br/><font color="blue">#net #netcore #aspnet #sql #devexpress #mvc #rest #soap #js</font>
                                        <br/><br/>
                                        <b>All activity:</b> technical developers interview, developers onboarding, participation in local meetups and internal trainings, team leadership
                                    </p>
                                </div>
                            </div> {/* item end */}
                            <div className="row item">
                                <div className="twelve columns">
                                    <h3>INPAS</h3>
                                    <p className="info">.NET developer <span>•</span> <em className="date">April 2011 - October 2016</em></p>
                                    <p>
                                        <b>Projects at 2014-2016:</b>
                                        <br/>1) License Manager is a desktop software licensing program for INPAS software to create a file licenses and SAM modules licenses.
                                        <br/>2) POS Loader - software application for loading embed software to VeriFone and PAX terminals.
                                        <br/>3) Inpas Connectors - software libraries used for establish communication between Point-Of-Sale terminals, cash and banking host.
                                        <br/>Role on projects:
                                        <br/>1) Development, support, testing of software: applications, web services and dll-libraries (JavaCard, COM objects)
                                        <br/>2) Development of libraries (low-level drivers) implementing the exchange protocol with a banking POS terminals
                                        <br/>3) Making a technical documentation, consulting with partners-suppliers of POS terminals (vendors)
                                        <br/>Achievements:
                                        <br/>The configuration module for the PAX terminal is implemented, the module allows you to remotely install and update the terminal software.
                                        <br/><font color="blue">#net #c# #wcf #wpf #ef #sql #aspnet #mvc #c++ #rs232 #com</font>
                                        <br/><br/>
                                        <b>Projects at 2011–2013:</b>
                                        <br/>1) Inpas Aqua is a software for interaction with the Electronic Cashier (EC Glory RZ-100). The solution that connect the cashier with the reinforced safe at the bank office. And all of this controlled by the application Inpas Aqua.
                                        <br/>2) Inpas Cursor is a utility for managing Glory bill counters that allows you to control, get statistics data, collect information for reports.
                                        <br/>3) Programm complex IRBIS - a hardware-software complex that works at the cash center of the bank to collect information on the recalculation of cash and send reports to the bank's ABS.
                                        <br/>Role on projects:
                                        <br/>1) Development of application software and dll-libraries that implement the protocols of exchange between cash machines of Glory company
                                        <br/>2) Making a technical documentation, consulting with the vendor (Glory company)
                                        <br/>3) Participation in exhibitions and conferences of banking cash software
                                        <br/>Achievements:
                                        <br/>1) Growth in sales of cash Glory equipment due to complex delivery (cash machines + application software)
                                        <br/>2) Inpas Cursor software was patented in 2013. And software-hadrware complex IRBIS was officially approved after testing at the department of the Central Bank of Russia
                                        <br/><font color="blue">#net #c# #wcf #wpf #winservice #ef #sql #aspnet #mvc #c++ #rs232 #com #usb</font>
                                    </p>
                                </div>
                            </div> {/* item end */}
                        </div> {/* main-col end */}
                    </div> {/* End Work */}
                    {/* Skills
      ----------------------------------------------- */}
                    <div className="row skill">
                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>
                        <div className="nine columns main-col">
                            <p>You can check my skills below
                            </p>
                            <div className="bars">
                                <ul className="skills">
                                    <li><span className="bar-expand eightyfivepercent" /><em>C#</em></li>
                                    <li><span className="bar-expand eightyfivepercent" /><em>Entity Framework</em></li>
                                    <li><span className="bar-expand seventyfivepercent" /><em>SQL</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>NOSQL (MONGO)</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>React</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>Typescript</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>JavaScript</em></li>
                                    <li><span className="bar-expand seventyfivepercent" /><em>HTML</em></li>
                                    <li><span className="bar-expand seventyfivepercent" /><em>CSS</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>Rest</em></li>
                                    <li><span className="bar-expand sixtyfivepercent" /><em>Soap</em></li>
                                    <li><span className="bar-expand fiftypercent" /><em>Devexpress</em></li>
                                </ul>
                            </div>{/* end skill-bars */}
                        </div> {/* main-col end */}
                    </div> {/* End skills */}
                </section>
            </React.Fragment>
        );
    }
}