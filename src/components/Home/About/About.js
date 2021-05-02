import React from 'react';
import personalImg from '../../../images/profile-img.png';
import Typical from 'react-typical'
const About = () => {

    return (
        <div className="about" id="about">
            <div className="container">
                <div className="common">
                    <h1 className="main-header text-light">About Me</h1>
                    <p className="main-content text-light text-muted">I am a React, Javascript, Developer. Here is some information about me, I love coding, coding makes me have a will.</p>
                    <div className="commonBorder"></div>
                </div>
                <div className="row about-section">
                    <div className="col-md-6">
                        <div className="about-img">
                            <img src={personalImg} alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="about-info">
                            <h1 className="text-light">KNOW WHO <span className="text-danger">I AM</span></h1>
                            <div className="about-info-description">
                                <p className="text-light text-muted">
                                    <Typical className="text-warning"
                                        steps={['A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.', 1000,500]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                    </p>
                            </div>
                            <div className="info-contacts">
                                s
                                <h5 className="text-light"><span className="text-danger">Name:</span> Moniur Rahman </h5>
                                <h5 className="text-light"><span className="text-danger">Email:</span> moniurrahman121@gmail.com</h5>
                                <h5 className="text-light"><span className="text-danger">Phone:</span> 01710339782</h5>
                                <h5 className="text-light"><span className="text-danger">Address:</span> Upashohor, Sylhet</h5>


                            </div>
                        </div>
                    </div>
                </div>
                <div className="skills-area">
                    <h1 className='text-light text-center'>MY SKILLS</h1>
                    <div className="commonBorder"></div>
                    <div className="progress-area">
                        <h4 className="text-light">BOOTSTRAP</h4>
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: '70%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">70%</div>
                        </div>
                        <h4 className="text-light">CSS3</h4>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </div>
                        <h4 className="text-light">JAVASCRIPT</h4>
                        <div class="progress">
                            <div class="progress-bar bg-info" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                        <h4 className="text-light">REACT</h4>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{ width: '85%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">85%</div>
                        </div>
                        <h4 className="text-light">JAVA</h4>
                        <div class="progress">
                            <div class="progress-bar bg-success" role="progressbar" style={{ width: '80%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">80%</div>
                        </div>
                        <h4 className="text-light">NODE.JS</h4>
                        <div class="progress">
                            <div class="progress-bar bg-primary" role="progressbar" style={{ width: '60%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">60%</div>
                        </div>
                        <h4 className="text-light">MONGODB</h4>
                        <div class="progress">
                            <div class="progress-bar bg-danger" role="progressbar" style={{ width: '90%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">90%</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;