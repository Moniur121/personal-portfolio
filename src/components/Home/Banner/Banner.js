import React from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter, FaGithub,FaDownload } from "react-icons/fa";
import { Link } from 'react-router-dom';
import profileImg from '../../../images/profile-img.png'
import Typical from 'react-typical'
import { FaHandPaper } from "react-icons/fa";
const Banner = () => {
    
    return (
        <div className="header-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="header-content">
                            <div className="header-section">
                                <div className="linking-profile">
                                    <ul>
                                        <li><a href="https://www.facebook.com/moniurrahman121/" target="_blank" rel="noreferrer noopener">
                                            <FaFacebookF className="commonIcons"></FaFacebookF>
                                        </a></li>
                                        <li><a href="https://www.linkedin.com/in/moniur/" target="_blank" rel="noreferrer noopener">
                                            <FaLinkedin className="commonIcons"></FaLinkedin>
                                        </a></li>
                                        <li><a href="https://twitter.com/ShimulMoniur" target="_blank" rel="noreferrer noopener">
                                            <FaTwitter className="commonIcons"></FaTwitter>
                                        </a></li>
                                        <li><a href="https://github.com/Moniur121" target="_blank" rel="noreferrer noopener">
                                            <FaGithub className="commonIcons"></FaGithub>
                                        </a></li>

                                    </ul>
                                </div>
                                <span className="text-muted">welcome to my world</span>
                                <h1>HI, THERE <FaHandPaper className="text-warning fs-3"></FaHandPaper> <br /> <span className="text-danger">I'm Moniur Rahman Shimul</span></h1>
                                <span className="fs-1">i'm a  <Typical
                                    className="typical"
                                    steps={['Web Developer', 1000, 'Front End Developer', 500, 'React Developer', 500]}
                                    loop={Infinity}
                                    wrapper="p"
                                />
                                </span>

                                <h4>BASED IN BD</h4>
                                <p className="mt-4 mb-4 text-muted">
                                    <Typical className="text-muted"
                                        steps={['A self-motivated and enthusiastic web developer with a deep interest in JavaScript. To work in the Software industry with modern web technologies of different local & multinational Software/ IT agencies of Bangladesh and grow rapidly with increasing responsibilities.', 1000, 500]}
                                        loop={Infinity}
                                        wrapper="p"
                                    />
                                </p>
                                <div className="header-buttons">
                                    <button type="button" class="btn btn-outline-warning "><a className="text-decoration-none text-light" href="https://drive.google.com/file/d/11Z1Qrz0M6pVlAfj0mu802oLnfiPrbQfZ/view?usp=sharing" target="_blank" rel="noopener noreferrer"><FaDownload></FaDownload> DOWNLOAD RESUME</a>
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="banner-img">
                            <img className="img-fluid" src={profileImg} alt="man" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;