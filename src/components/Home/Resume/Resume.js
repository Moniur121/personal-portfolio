import React from 'react';
import resumeProfileImg from '../../../images/moniur.png'
import { FaTelegramPlane, FaUserTag, FaUniversity,FaDownload } from "react-icons/fa";
const Resume = () => {
    return (
        <div className="resume-area" id="resume">
            <div className="container">
                <button type="button" class="btn btn-danger    mt-5" style={{ marginLeft: '50%' }}><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/11Z1Qrz0M6pVlAfj0mu802oLnfiPrbQfZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FaDownload></FaDownload> DOWNLOAD RESUME</a>
                </button>
                <div className="text-light">
                    <div className="resume-header d-flex justify-content-between">
                        <div className="resume-userDescription">
                            <h1>Moniur Rahman Shimul</h1>
                            Email: moniurrahman121@gmail.com <br />
                            Address: Upashohor, Sylhet <br />
                            Phone: 01710339782 <br />
                        </div>
                        <div className="resume-userProfile img-fluid">
                            <img src={resumeProfileImg} alt="" />
                        </div>
                    </div>
                    <div className="resumeCommonBorder mb-5"></div>
                    <div className="carrier-objective">
                        <div className="title-border-area mb-4">
                            <h4 className="fw-bolder">Carrier Objective</h4>
                        </div>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.  </p>
                    </div>
                    <div className="work-experience">
                        <div className="title-border-area mb-4">
                            <h4>Work Experience</h4>
                        </div>
                        <h6><span className="fw-bold">Web Developer</span>  <small>| January 2021 - June 2021</small></h6>
                        <h6 className="fw-bold">Catalyst Education</h6>
                        <p>Roseview Shopping complex, Sylhet , Bangladesh</p><br />
                        <p>Working in a 4 member team, on a Ed Tech startup project, Responsible for converting ideas to web Application with HTML5, CSS3, ROW PHP . </p>

                    </div>
                    <div className="programming-knowledge">
                        <div className="title-border-area mb-4">
                            <h4>Programming Knowledge</h4>
                        </div>
                        <div className="programming-description">
                            <FaTelegramPlane></FaTelegramPlane> <span className="text-light"><span className="fw-bolder">Expertise</span> : JavaScript, ES6, React.js, REST API, React Bootstrap, Bootstrap4, HTML5
                                CS3</span><br />
                            <FaTelegramPlane></FaTelegramPlane> <span className="text-light"><span className="fw-bolder">Comfortable</span> : Gatsby.js, Material UI,Node.js, Express.js, EJS, MongoDB, JSON.</span><br />
                            <FaTelegramPlane></FaTelegramPlane> <span className="text-light"><span className="fw-bolder">Familiar</span> : Redux.js, GraphQL, TypeScript, Laravel, jQuery, AJAX, Wordpress.</span><br />
                            <FaTelegramPlane></FaTelegramPlane> <span className="text-light"><span className="fw-bolder">Tools</span> : VS Code,  Chrome Dev  tool,  Firebase, Netlify, Heroku</span>
                        </div>
                    </div>
                    <div className="education">
                        <div className="title-border-area mb-4">
                            <h4>Education</h4>
                        </div>
                        <div className="education-description mb-4">
                            <FaUserTag></FaUserTag> <span className="text-light"><span className="fw-bolder">Degree</span> : Diploma In Computer Engineering</span><br />
                            <FaUniversity></FaUniversity> <span className="text-light"><span className="fw-bolder">College/University</span> : Islami Bank Institute of Technology, Sylhet</span>
                        </div>
                    </div>
                    <div className="reference mb-5">
                        <div className="title-border-area mb-4">
                            <h4>Reference</h4>
                        </div>
                        <h5>Jhankar Mahbub</h5>
                        Senior software Engineer <br />
                        Programming Hero Community <br />
                        Dhanmondi, Dhaka, Bangladesh<br />
                        Cell no. +8801990-77976<br />

                    </div>
                    <div className="signature">
                        <small className="text-muted  ">moniur</small>
                        <div className="signature-border"></div>
                        <h4>Signature</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Resume;