import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { FaHome,FaUserGraduate, FaRProject,FaBloggerB,FaVoicemail,FaRegEnvelope} from "react-icons/fa";
const Header = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  bg-header navigation-bar" >
                <div class="container-fluid">
                    <a class="navbar-brand text-warning fs-3" href="#">Moniur Rahman</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto">
                            <li class="nav-item">
                                <a href="#home" className="nav-link fs-5  text-light  "><FaHome></FaHome>Home</a>
                            </li>
                            <li class="nav-item">
                                <a href="#about" className="nav-link fs-5  text-light  "><FaUserGraduate></FaUserGraduate>About</a>
                            </li>
                            <li class="nav-item">
                            <a href="#project" className="nav-link fs-5  text-light  "> <FaRProject></FaRProject>Project</a>
                            </li>
                            <li class="nav-item">
                            <a href="#resume" className="nav-link fs-5  text-light  "> <FaVoicemail></FaVoicemail>Resume</a>
                            </li>
                            <li class="nav-item">
                            <a href="#blog" className="nav-link fs-5  text-light  "><FaBloggerB></FaBloggerB>Blog</a>
                            </li>
                            <li class="nav-item">
                            <a href="#contact" className="nav-link fs-5 text-light  "><FaRegEnvelope></FaRegEnvelope>Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;