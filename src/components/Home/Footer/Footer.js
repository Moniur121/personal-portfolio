import React from 'react';
import { FaFacebookF, FaLinkedin, FaTwitter,FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="footer" id="footer">
            <div className="container">
                <div className="footer-area d-flex justify-content-between">
                    <div className="developer-name">
                        <p className="text-light">Designed and Developed by Moniur Rahman</p>
                    </div>
                    <div className="copyRight">
                        <p className="text-light">Copyright © 2021 MB</p>
                    </div>
                    <div className="linkingProfile">
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
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;